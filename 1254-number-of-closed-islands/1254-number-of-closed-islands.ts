function closedIsland(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 0) {
        let isClosed = true;
        const stack: [number, number][] = [[i, j]];

        while (stack.length > 0) {
          const [x, y] = stack.pop()!;
          grid[x][y] = 1; // Mark as visited

          // Check if the island touches the border
          if (x === 0 || x === rows - 1 || y === 0 || y === cols - 1) {
            isClosed = false;
          }

          // Explore neighbors
          const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
          ];

          for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (
              newX >= 0 &&
              newX < rows &&
              newY >= 0 &&
              newY < cols &&
              grid[newX][newY] === 0
            ) {
              stack.push([newX, newY]);
            }
          }
        }

        if (isClosed) {
          return 1 + closedIsland(grid); // Count this closed island and continue searching
        }
      }
    }
  }
  return 0;
}

console.log(
  closedIsland([
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0],
  ])
); // 2
console.log(
  closedIsland([
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
  ])
); // 1
console.log(
  closedIsland([
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ])
); // 2
