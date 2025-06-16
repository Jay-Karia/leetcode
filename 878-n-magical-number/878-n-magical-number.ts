function nthMagicalNumber(n: number, a: number, b: number): number {
  // Calculate LCM of a and b using GCD
  const gcd = (x: number, y: number): number => (y === 0 ? x : gcd(y, x % y));
  const lcm = (a * b) / gcd(a, b);

  // Binary search
  const MOD = 10**9 + 7;
  let left = Math.min(a, b);
  let right = n * Math.min(a, b); // Upper bound

  // Count magical numbers less than or equal to x
  const countMagical = (x: number): number => {
    // Count numbers divisible by a + numbers divisible by b - numbers divisible by both
    return Math.floor(x / a) + Math.floor(x / b) - Math.floor(x / lcm);
  };

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (countMagical(mid) < n) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left % MOD;
}

// console.log(nthMagicalNumber(1, 2, 3)); // Output: 2
console.log(nthMagicalNumber(4, 2, 3)); // Output: 6
console.log(nthMagicalNumber(1000000000, 40000, 40000));
