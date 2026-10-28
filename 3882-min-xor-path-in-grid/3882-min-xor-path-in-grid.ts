function minCost(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const dp: Set<number>[][] = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => new Set<number>())
  );

  dp[0][0].add(grid[0][0]);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;

      if (i > 0) {
        for (const xor of dp[i - 1][j]) {
          dp[i][j].add(xor ^ grid[i][j]);
        }
      }
      if (j > 0) {
        for (const xor of dp[i][j - 1]) {
          dp[i][j].add(xor ^ grid[i][j]);
        }
      }
    }
  }

  return Math.min(...dp[m - 1][n - 1]);
}

console.log(
  minCost([
    [1, 2],
    [3, 4],
  ])
); // 7, 6
console.log(minCost([[2, 7, 5]])); // 0
console.log(
  minCost([
    [6, 7],
    [5, 8],
  ])
); // 9
console.log(
  minCost([
    [7, 4],
    [7, 2],
  ])
); // 1
console.log(minCost([[26,24,3],[2,22,17]])) // 5
