# Django 모델에서 DateTimeField 사용시 오류
```
RuntimeWarning: DateTimeField received a naive datetime 
```

settings.py 에서 USE_TZ = False 로 변경한다.  
또는 데이터 입력시 타임존 설정을 해준다.
ex) `datetime.now(tz=timezone...)`
