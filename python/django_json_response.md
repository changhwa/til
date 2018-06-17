# django 에서 json return

과거에 사용하던 버전에서는 아래와 같이 리턴해왔다.
```
return HttpResponse(json.dumps(json), content_type='application/json')
```
다른 자료를 리서치하는 중에 간소화되었다는 소식을 듣고 확인해보니  
1.7+ 부터는 아래와 같이 간소화 되었다.
```
return JsonResponse({'data':'test'})
```
