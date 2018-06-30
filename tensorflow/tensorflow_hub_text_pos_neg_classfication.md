tensorflow hub를 이용해 문장의 스팸 여부를 분석하는 것을 해봤다.  
데이터를 조회하는 코드는 일부 생략한다.  
우선 필요한 라이브러리를 임포트한다.  
```python
# pip install elasticsearch tensorflow pandas numpy tensorflow-hub
import elasticsearch
import tensorflow as tf
import tensorflow_hub as hub
import pandas as pd

es = elasticsearch.Elasticsearch("localhost:9200")
DEFAULT_SIZE = 1000
DEFAULT_MODEL_PATH = '/models/'
 
```

트레이닝 할 데이터를 조회하는 함수를 구현한다.  
tensorflow hub 예제에서는 positive 와 negtive 를 각각 조회해와서 pandas 를 이용해 merge 한다.  
내가 사용한 데이터셋은 이미 각각 조회해오지 않아도 필요한 필드들을 만들 수 있도록 되어 있지만  
따로 가져올 수 있도록 하였다.  
```python
def get_data(start, end, tag, size, page):
  return es.search(...)
  
def get_sentiment(es_data):
  # 확신상태 계산하는 로직
  return sentiment
  
def load_dataset():
  hits = get_data(...)
  data = {}
  data['sentence'] = []
  data['sentiment'] = []
  data['tag'] = []
    
  for hit in result:
    _source = hit['_source']
    data['sentence'].append(_source['text'])
    data['sentiment'].append(get_sentiment(_source))
  return pd.DataFrame.from_dict(data)

def set_data(start_date, start_day, end_date, end_day):
  positive = load_dataset(start_date, start_day, end_date, end_day, ['positive'])
  negative = load_dataset(start_date, start_day, end_date, end_day, ['negitive'])
  positive['polarity'] = 1
  negative['polarity'] = 0
  contents = pd.concat([positive, negative]).sample(frac=1).reset_index(drop=True)
  return contents
```
데이터를 가져와서 긍정 부정으로 마킹하고 그걸 pandas DateFrame 으로 변경하였다. 
트레이닝 대상 데이터를 조회해서 학습을 해본다.  
```python
train_df = set_data(...)

train_input_fn = tf.estimator.inputs.pandas_input_fn(train_df, train_df["polarity"], num_epochs=None, shuffle=True)
predict_train_input_fn = tf.estimator.inputs.pandas_input_fn(train_df, train_df["polarity"], shuffle=False)

embedded_text_feature_column = hub.text_embedding_column(
    key="sentence",
    module_spec="https://tfhub.dev/google/nnlm-en-dim128/1",
    trainable=True)

estimator = tf.estimator.DNNClassifier(
    hidden_units=[500, 100],
    feature_columns=[embedded_text_feature_column],
    n_classes=2,
    optimizer=tf.train.AdagradOptimizer(learning_rate=0.002),
    model_dir=DEFAULT_MODEL_PATH)

estimator.train(input_fn=train_input_fn, steps=3000)
train_eval_result = estimator.evaluate(input_fn=predict_train_input_fn)
print("Training set accuracy: {accuracy}".format(**train_eval_result))
```
nnlm-en-dim128 모듈을 이용해 3000번 학습하고 결과를 예측한다.  
nnlm-ko-dim128 모듈도 있으나 차후 실험해보기로 했다.  
tips ) 가끔 모듈이 다운로드가 실패할때가 있다. 이런경우를 대비해 받아두고 경로를 지정하는것도 방법이다.  
이제 테스트셋을 이용해 결과를 보고 해당 데이터를 출력해보겠다.
```python
test_df = set_data(...)
predict_test_input_fn = tf.estimator.inputs.pandas_input_fn(test_df, test_df["polarity"], shuffle=False)
test_eval_result = estimator.evaluate(input_fn=predict_test_input_fn)
print("Test set accuracy: {accuracy}".format(**test_eval_result))

def get_predictions(estimator, input_fn):
  return [x["class_ids"][0] for x in estimator.predict(input_fn=input_fn)]


LABELS = [
    "neg", "pos"
]

predictions = get_predictions(estimator, predict_test_input_fn)

for index, predict in enumerate(predictions):
  print("==============")
  print('{} --> {}'.format(test_df.loc[index].tag, LABELS[predict]))
  print('text : {}'.format(test_df.loc[index].sentence))
```
