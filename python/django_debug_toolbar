# Django Debug Toolbar

기존에 장고 프로젝트에서 로그를 볼 때는 콘솔로 봤고 sql log는 보기가 좀 불편했다.  
리서치 결과 Django Debug Toolbar라는 플러그인 을 찾았는데 참 좋다.
[Django Debug Toolbar](https://github.com/jazzband/django-debug-toolbar)  

```
# 1. 플러그인 설치
pip install django-debug-toolbar

# 2. settings.py에 설정값 추가
INSTALLED_APPS = [
    ...
    'debug_toolbar'
]
MIDDLEWARE= [
    ...
    'debug_toolbar.middleware.DebugToolbarMiddleware'
]
INTERNAL_IPS = ('127.0.0.1',)

# 3. project의 urls.py에 debug url 지정

import debug_toolbar
from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path
urlpatterns = [
    ...
    url(r'^__debug__/', include(debug_toolbar.urls)),
]

```
