# mocking

요즘 ES로 작업할때마다 테스트 코드를 짜기가 많이 까다로왔는데 역시나 python 에도 mocking 잘해주는게 있다.  
기본으로 내장된 unittest 에 보면 mock 을 쓸 수 있다.
```
from unittest.mock import MagicMock

def mock_find_by_elasticsearch_contents(return_value):
  es.find_by = MagicMock()
  es.find_by.return_value = return_value

def test_ES에서_데이터를_조회:
  # given
  mock_find_by_elasticsearch_contents({'hits': {'hits': [{}]}}

  # when
  es.find_by()

  # then
  es.find_by.called_once()
```
