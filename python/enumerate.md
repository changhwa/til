# 반복문에서 index 사용

파이썬에서 반복문에서 index 값이 필요한 경우 기존엔 이런식으로 해왔다.
```
array = [1, 2, 3, 4, 5]
for index in range(len(array)):
    print(array[index])
```
많이 불편하다고 생각했는데 javascript 에서는 다음과 같이 얻을 수 있다.
```
[1, 2, 3, 4, 5].forEach((_, idx, array) => ...)
```
우리 파이썬이 이럴리 없다고 생각하여 리서치 한 결과 다음과 같이 심플 하게 쓸 수 있었다.
```
for index, value in enumerate([1, 2, 3, 4, 5]):
    print(index, value)
```