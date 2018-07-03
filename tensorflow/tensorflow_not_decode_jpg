## tensorflow inception 으로 학습하는 경우 jpg 외 이미지나 디코딩 안되는 문제로 인한 오류 해결
트레이닝, 테스트 이미지셋 중에 jpg 외의 이미지를 전부 지우는 로직 작성
```python
import tensorflow as tf
import glob, os.path
for i, image_name in enumerate(glob.glob(os.path.join('/root/herschel/training/training_image', '*.jpg'))):
        print(i, image_name)
        try:
            with tf.Graph().as_default():
                image_contents = tf.read_file(image_name)
                image = tf.image.decode_jpeg(image_contents, channels=3)
                with tf.Session() as sess:
                    sess.run(tf.global_variables_initializer())
                    tmp = sess.run(image)
        except Exception:
           os.remove(image_name)
           pass
```
