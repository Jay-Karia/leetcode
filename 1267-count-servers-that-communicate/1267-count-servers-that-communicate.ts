function countServers(grid: number[][]): number {
  const rowCounts = new Array(grid.length).fill(0)
  const columnCounts = new Array(grid[0].length).fill(0)

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === 1) {
        rowCounts[row]++
        columnCounts[column]++
      }
    }
  }

  let communicatingServers = 0
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === 1 && (rowCounts[row] > 1 || columnCounts[column] > 1)) {
        communicatingServers++
      }
    }
  }

  return communicatingServers
};
