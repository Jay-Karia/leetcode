function divide(dividend: number, divisor: number): number {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  return Math.trunc(dividend / divisor);
}

console.log(divide(10, 3)); // Output: 3
console.log(divide(7, -3)); // Output: -2
console.log(divide(0, 1)); // Output: 0
console.log(divide(1, 1)); // Output: 1
console.log(divide(-1, -1)); // Output: 1
console.log(divide(1, 2)); // Output: 0
