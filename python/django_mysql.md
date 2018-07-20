 
```
# pymysql 설치
pip install pymysql 

# project/settings.py 에 해당 부분 추가
import pymysql
pymysql.install_as_MySQLdb()

# 아래 부분 삭제
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# 추가
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': '',
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '3306'
    }
}

```
