django template 에서 if else 를 한줄로 표현하고 싶었다.  
A라는 값이 있으면 A 를 노출하고 없으면 B 를 노출하는 니즈였다.  
```
{{ A if A else B }}
```
처음에는 python 문법이 될까 했는데 아쉽게도 커스텀 을 만들지 않으면  
위의 문법은 동작하지 않았다.  
yesno, default 등을 이용해 쉽게 구현할 수 있었다.  
```
{{ A|yesno:'yes,no,default' }}

# or

{{ A|default:B }}

```

