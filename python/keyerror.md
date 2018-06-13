# python map 키값이 없는 경우
elasticsearch 에서 값이 없어서 해당 필드 키가 없는 경우  
KeyError가 발생한다.
기존에는 try ~ catch 로 처리해왔다.
```
try:
  ...
except Exception:
  ...
```

로직이 지저분해져서 찾아보니 map.get('필드명', '기본값') 형태로 처리할 수 있다.  
```
_source = hits['_source']
_source.get('title', '') # title 필드가 없어도 '' 로 세팅함
```

추가로 알게된 점 (왜 미처 생각 못했을까)  
key 가 있는지 체크하여 활용하면 된다.
`ex) source['title'] if title in source else ''`
