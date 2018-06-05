function printerError(s) {
  return `${s.split("").filter(_ => _ > 'm').length}/${s.length}`
}

// Best 답을 보니 정규식 s.match(..).length 로 해결했더라
// 적은글자일때는 위의 방식(O) 와 큰차이가 없는데 7만 글자로 하니 내 방법은 80ms , 정규식은 적을때와 동일하게 1.2ms 였다.
// 생각보다 정규식이 빠르구나 종종 애용하는걸로
