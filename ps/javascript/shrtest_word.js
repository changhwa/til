function findShort(s) {
  return Math.min(...s.split(" ").map(_ => _.length));
}
