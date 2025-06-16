function isPerfectSquare(num: number): boolean {
  return Math.sqrt(num) % 1 === 0;
};

console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false
