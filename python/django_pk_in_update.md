## django 에서 pk array로 update 하기
기존에는 많아봐야 10건 이런 데이터만 업데이트 했기 때문에 for 문에서 처리해왔는데  
한번에 몇천건을 업데이트해야하는 이슈가 있어서 확인했다.  
```python
Model.objects.filter(pk__in=ids).update(field1='', field2='')
```
for 문으로 5천건 업데이트 하는데 약 8s 정도 소비되었는데  
해당 구문으로 3.5s 정도로 해결되었다.
