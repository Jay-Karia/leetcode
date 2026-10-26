function countIslands(grid: number[][], k: number): number {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  const m = grid.length;
  const n = grid[0].length;

  const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] <= 0 || visited[i][j]) continue;

      let totalValue = 0;
      const stack: [number, number][] = [[i, j]];
      visited[i][j] = true;

      while (stack.length > 0) {
        const [row, column] = stack.pop()!;
        totalValue += grid[row][column];

        const neighbors: [number, number][] = [
          [row - 1, column],
          [row + 1, column],
          [row, column - 1],
          [row, column + 1],
        ];

        for (const [neighborRow, neighborColumn] of neighbors) {
          if (
            neighborRow >= 0 &&
            neighborRow < m &&
            neighborColumn >= 0 &&
            neighborColumn < n &&
            grid[neighborRow][neighborColumn] > 0 &&
            !visited[neighborRow][neighborColumn]
          ) {
            visited[neighborRow][neighborColumn] = true;
            stack.push([neighborRow, neighborColumn]);
          }
        }
      }

      if (totalValue % k === 0) {
        count++;
      }
    }
  }

  return count;
}

console.log(
  countIslands(
    [
      [0, 2, 1, 0, 0],
      [0, 5, 0, 0, 5],
      [0, 0, 1, 0, 0],
      [0, 1, 4, 7, 0],
      [0, 2, 0, 0, 8],
    ],
    5
  )
); //2
console.log(
  countIslands(
    [
      [3, 0, 3, 0],
      [0, 3, 0, 3],
      [3, 0, 3, 0],
    ],
    3
  )
); // 6
