function minimumTotal(triangle: number[][]): number {
  // Handle edge cases
  if (!triangle.length) return 0;
  if (triangle.length === 1) return triangle[0][0];

  // Create a copy of the triangle to work with
  const dp = triangle.map(row => [...row]);

  // Bottom-up approach - start from second to last row
  for (let row = triangle.length - 2; row >= 0; row--) {
    for (let col = 0; col < triangle[row].length; col++) {
      // At each position, add the minimum of the two possible paths below
      dp[row][col] += Math.min(dp[row + 1][col], dp[row + 1][col + 1]);
    }
  }

  // The top element now contains the minimum path sum
  return dp[0][0];
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); // Output: 11
console.log(minimumTotal([[-10]])); // Output: -10
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]])); // Output: -1
