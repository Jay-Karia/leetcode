function createGrid(m: number, n: number): string[] {
  let grid: string[] = Array(m).fill("").map(() => Array(n).fill("#").join(""));

  let row = 0;
  let col = 0;

  while (row < m && col < n) {
    grid[row] = grid[row].substring(0, col) + "." + grid[row].substring(col + 1);
    if (col + 1 < n) {
      col++;
    } else {
      row++;
    }
  }

  return grid;
}


console.log(createGrid(2, 3)); // ["..#","#.."]
console.log(createGrid(3, 3)) // ["..#","#..","##."]
console.log(createGrid(1, 4)) // ["...."]
