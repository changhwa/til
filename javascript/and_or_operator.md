평소에 코드를 작성할때 주로 만나는 코드 중에 이런 코드가 있다.  
만약 해당 값이 있으면 해당 함수를 실행하는 경우 보통은 이렇게 했다.
```
if (user.isLogin()) {
  action();
}
``` 
이걸 한줄로 줄일 수 있는 트릭을 발견했다.  
```
user.isLogin() && action()
```
  
급 궁금해진게 false 인 경우는 어떻게 하나 봤더니 역시나 or 연산자를 쓴다.  
```
user.isLogin() || go_to_login_page()
```
