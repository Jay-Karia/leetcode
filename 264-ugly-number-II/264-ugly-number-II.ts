function nthUglyNumber(n: number): number {
  // Create an array to store the first n ugly numbers
  const ugly: number[] = new Array(n);
  ugly[0] = 1; // First ugly number is 1

  // Pointers for multiplying by 2, 3, and 5
  let p2 = 0, p3 = 0, p5 = 0;

  // Generate remaining ugly numbers
  for (let i = 1; i < n; i++) {
    // Find the next ugly number by taking the minimum of three candidates
    const next2 = ugly[p2] * 2;
    const next3 = ugly[p3] * 3;
    const next5 = ugly[p5] * 5;

    const nextUgly = Math.min(next2, next3, next5);
    ugly[i] = nextUgly;

    // Move the pointers that gave us this ugly number
    // Note: we use if statements (not else-if) because we need to handle duplicates
    if (nextUgly === next2) p2++;
    if (nextUgly === next3) p3++;
    if (nextUgly === next5) p5++;
  }

  return ugly[n - 1];
}

console.log(nthUglyNumber(10)); // 12
console.log(nthUglyNumber(1)); // 1
