function countDigitOne(n: number): number {
  if (n < 1) return 0;
  if (n < 10) return 1;
  let count = 0;
  let factor = 1;
  while (factor <= n) {
    const lowerNumbers = n - (Math.floor(n / factor) * factor);
    const currentDigit = Math.floor((n / factor) % 10);
    const higherNumbers = Math.floor(n / (factor * 10));

    if (currentDigit === 0) {
      count += higherNumbers * factor;
    } else if (currentDigit === 1) {
      count += higherNumbers * factor + lowerNumbers + 1;
    } else {
      count += (higherNumbers + 1) * factor;
    }

    factor *= 10;
  }
  return count;
};

console.log(countDigitOne(13)); // Output: 6
console.log(countDigitOne(0));  // Output: 0
