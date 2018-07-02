## python 코딩의 기술 스터디 Day 1 정리  
**Better way 1 사용 중인 파이썬의 버전을 알자**
```
Q) python2 와 python3 어떤걸 쓸까?  
A) python3  

1. pypy에서도 이제 python3 을 지원하므로 더욱더 python2 를 쓸 필요가 없어졌다.  
2. 텐서플로우 serving 등에서 python2 를 쓰고는 있으나 대체하기 어렵지 않음  
```
**Better way 2 PEP 8 스타일 가이드를 따르자**
```
1. 자바를 하면서 camel case 에 익숙해졌으나 python PEP 8 에서는 snake 를 권장하는듯하다.
  - 가독성 측면에서 장점을 가지고 있으나 django 에서 js 랑 같이 쓸때는 좀 햇갈린다. 통일하는게 좋을 수도 있겠다.
2. pycharm 에서 warning or error 로 잡아주니 pycharm을 쓰자
3. 계속 많은 이야기를 나눠볼 필요가 있겠다
```
**Better way 3 bytes, str, unicode의 차이점을 알자**
```
1. bytes 는 raw 8bit 를 저장함
2. str 은 유니코드를 저장함
3. 서로는 바로 쓸 수 있는 것이 아니라 헬퍼함수를 구현해서 쓴다.
4. python 에서 인코딩은 어려운 이슈임
  - 자바와 다르게 utf-8로 인코딩을 해줘야하는 경우가 많음 
  - JSON 한글처리도 고민할 때가 있는데 utf-8로 인코딩해주면 대부분 해결됨
```
**Better way 4 복잡한 표현식 대신 헬퍼 함수를 작성하자**
```
1. 큰 이견 없음
2. 특히 python 의 경우 parameter 에 default 값을 명시할 수 도 있고 일부 파라미터만 넘길 수도 있기 때문에 유연하게 사용 될 듯하다.
```
**Better way 5 시퀀스를 슬라이스하는 방법을 알자**
```
1. 처음 보는 문법이라 신기함
2. a[3:-3] => 3번째 index부터 끝에서 3번째 index까지
3. pandas 를 쓰다 보면 많이 쓰게 된다
```
**Better way 6 한 슬라이스에 start, end, stride를 함께 쓰지 말자**
```
1. 쓸 필요가 있을까 라는 의견도 있었다.
2. 역정렬 같은 걸 할때 의미가 있다
3. 특정 조건씩 넘어가며 데이터를 pick 할 때 간단하게 작성할 수 있기에 메리트가 있다.
4. 책에서 제안하는 방법은 성능상 이슈가 있지 않을까 
  - 큰 데이터를 다룰 때는 이런 방법 보다는 다른 방법들을 고민해본다.
```
**Better way 7 map과 filter 대신 리스트 컴프리헨션을 사용하자**
```
1. python2 에서 list comprehension 의 경우엔 의도하지 않은 동작이 발생할 여지가 있었다.
  - x = [1, 2, 3, 4, 5]
  - [x ** 2 for i in x]
  - x의 값은 ?
2. list comprehension 보다 lambda + map 이 깔끔해 보인다 ( 예제 문제일 수도 있겠다. )
3. lambda를 이해하고 쓰기가 쉽지 않아서 간단한 경우에는 list comprehension 이 강점을 보인다.
4. 개인적으로는 단순한건 comprehension 조금이라도 복잡해지면 map filter lambda 를 선호 
```
**Better way 8 리스트 컴프리헨션에서 표현식을 두 개 넘게 쓰지 말자**
```
1. 확실히 코드의 가독성이 떨어져보인다.
2. 어디까지 코드라인을 줄여야할까 
  - 코드 리뷰등을 통해 정리해가는 것이 좋겠다.
  - 진리의 케바케
```
**Better way 9 컴프리헨션이 클 때는 제너레이터 표현식을 고려하자**
```
1. 큰 데이터를 comprehension 으로 다룰 때는 성능 이슈가 존재할 수 있다.
2. 보통 : [x ** 2 for i in a], 제너레이터 : (x ** 2 for i in a)
```
**Better way 10 range보다는 enumerate를 사용하자**
```
1. 처음 알게 된 방법이라 신기했다. (https://github.com/changhwa/til/blob/master/python/enumerate.md)
2. 과연 쓸 일이 많을까?
  - javascript 에서 상당히 많이 사용했다. foreach
  - python 에서도 index 를 접근하기 위해서 유용하다
```
**Better way 11 이터레이터를 병렬로 처리하려면 zip을 사용하자**
```
1. 같은 함수명인데 python2 와 3가 동작하는 내부 방식이 달라서 혼란스럽다.
2. 성능이슈가 아니고서는 내부 동작까지 파악하기 보다는 함수명을 통해 기능을 파악했다면 이 기능을 사용하는데 집중하고자 했을 것 
3. 제너레이터를 사용함으로 메모리를 효율적으로 사용 할 수 있다. (-> 시간이 부족해서 토론 주제로 상정못함 ㅠ)
```
**Better way 12 for와 while 루프 뒤에는 else 블록을 쓰지 말자**
```
1. 루프 본문이 break 문을 만나지 않은 경우에만 루프 다음에 오는 else 블록이 실행된다.
2. 코드 흐름이 복잡해지니 가능한 쓰지 말자. (과연 쓸 일이 있을까?)
3. 빈 배열을 컨트롤 할 때 좋을 것 같다. 
  - 빈 배열인 경우 다른 함수를 실행한다던가..
```
