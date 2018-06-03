function high(x) {

  const array = x.split(" ");
  const max_index = array.map(_ => {
    return _.split("").map(__ => __.toLowerCase().charCodeAt(0) % 97).reduce((a, b) => a + b);
  }).reduce((max, a, b, arr) => a > arr[max] ? b : max, 0);
  return array[max_index];
}

console.log(high('man i need a taxi up to ubud'));