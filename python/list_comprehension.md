파이썬에서 특이하게 와닿는 문법 중 하나이자 잘못 쓰면 가독성을 다 망쳐놓는 list comprehension 이라는 것이 있다.  
보통 특정 숫자 배열 중에 홀수만 string 으로 변환한 배열을 만들라고 하면 쉽게 작성하면 이런 식으로 작성할 것이다.
```python
numbers = [1, 2, 3, 4, 5]
odd_numbers_cast_by_str = []
for number in numbers:
  if number % 2 == 1:
    odd_numbers_cast_by_str.append(str(number))
odd_numbers_cast_by_str
# ['1', '3', '5']
```
이것을 map filter lambda 를 쓰면 다음과 같아진다.
```python
numbers = [1, 2, 3, 4, 5]
list(map(str, filter(lambda x: x % 2, numbers)))
# ['1', '3', '5']
```
개인적으로는 위의 방법이 나쁘다고 생각하지는 않는다
헌데 list comprehension 을 쓰면 좀 더 가독성이 좋아진다.
```python
numbers = [1, 2, 3, 4, 5]
[str(number) for number in numbers if number % 2 == 1]
# ['1', '3', '5']
```
