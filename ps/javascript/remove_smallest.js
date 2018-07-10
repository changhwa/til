function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  const index = numbers.indexOf(min);
  return [...numbers.slice(0, index), ...numbers.slice(index + 1)
}
