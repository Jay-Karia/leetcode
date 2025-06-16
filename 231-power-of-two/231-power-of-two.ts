function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false;
  return Math.log2(n) === Math.floor(Math.log2(n));
};

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3)); // false
