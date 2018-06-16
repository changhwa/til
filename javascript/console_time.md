# console.time 으로 함수 수행시간 측정

node로 백엔드 코드를 구현할때 함수수행시간이 어느부분이 오래걸리는지 측정할대마다 프로파일링 도구를 이용했는데  
console.time을 이용해서 가볍게 측정이 가능하다.  

```
console.time('이름');
.......수행........
console.timeEnd('이름;);
```
