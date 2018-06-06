# python에서 format 사용하기
지금까지는 % 를 사용해왔는데 % 는 불편한 점이 있다.  
TypeError 가 일어날 확률이 높다는 것이다.  
format은 이를 해결할 수 있다.

```
"i am a %s" % A
```
```
"i am a {A}".format(A=ddd)
```

위의 경우 A 에(1, 2, 3) 이 들어오면 예외가 발생한다
