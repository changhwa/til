# Mac 에서 rbenv 를 이용한 루비 버전 관리하기

homebrew 로 rbenv 설치
```
brew install rbenv
```

버전 리스트 확인
```
rbenv install -l
```

최신버전인 2.5.1 설치
```
rbenv install 2.5.1 && rbenv rehash
```

`rbenv global|local|shell version` 으로 사용한다.
