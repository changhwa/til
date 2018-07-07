## tmux 에서 마우스로 스크롤 하기
보통 tmux 에서 스크롤을 할 때 `ctrl + b + [ + 방향키` 를 사용한다  
아무래도 마우스로 스크롤 하는 것 보다는 불편해서 마우스 스크롤 하는 방법을 찾아봤다.  
```
# ~/.tmux.conf
set -g terminal-overrides 'xterm*:smcup@:rmcup@'
```
**출처**  
[stackoverflow](https://stackoverflow.com/a/10072789)
