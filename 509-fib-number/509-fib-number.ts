function fib(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let prev2 = 0;
  let prev1 = 1;
  let current = 0;

  for (let i = 2; i <= n; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return current;
}

console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
