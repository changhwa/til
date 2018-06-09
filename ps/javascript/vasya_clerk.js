function ticket(arr) {
  let change = 0;
  const a = arr.every(_ => {
    if (_ > 25) {
      change = change - (_ - 25);
      if (change < 0) {
        return false;
      }
      if (_ === 50) change = change + _;
    } else {
      change += _;
    }
    return true;
  })
  return a ? "YES" : "NO";
}

