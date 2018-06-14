# null 과 blank

[Django Tips#8 - By Vitor Freitas](https://simpleisbetterthancomplex.com/tips/2016/07/25/django-tip-8-blank-or-null.html)   
오늘 쌈박한것을 알게되었다.  
평소에는 별 생각없이 django 에서 모델 설정시에 null=True를 사용해왔다.  
이것이 문제점이 있다는게 주요골자인데..  
(Now, where most developers get it wrong)  
이렇게 설정할 경우 None 과 empty string 이 둘다 들어갈 수 있기 때문이다.  
Django의 기본 컨벤션은 NULL이 아닌 empty string 이기 때문에 null=True 만 쓰는것보다는 blank=True를 쓰라는 의미인듯!
