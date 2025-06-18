function getPrimeFactors(n: number): number[] {
  const factors: number[] = [];
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
}

const allowedPrimeFactors = [2, 3, 5];

function isUgly(n: number): boolean {
  if (n <= 5) return true;
  if(n <= 0) return false;

  const primeFactors = getPrimeFactors(n);
  for (const factor of primeFactors) {
    if (!primeFactors.includes(factor)) {
      return false;
    }
  }
  // If all prime factors are in the allowed list, return true
  if (primeFactors.every(factor => primeFactors.includes(factor))) {
    return true;
  }
  // If any prime factor is not in the allowed list, return false
  return false;
};

console.log(isUgly(6));  // true
console.log(isUgly(1));  // true
console.log(isUgly(14));  // false
