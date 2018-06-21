# django 에서 queryset을 json으로 리턴하는 법
```
json_serialize = serializers.serialize('json', contents, ensure_ascii=False)
return JsonResponse({'contents': json_serialize})
```
django.core에 있는 serializers 를 이용해서 하면 된다.  
ensure_ascii 는 한글 깨지는 현상을 해결하기 위해 사용했다.
