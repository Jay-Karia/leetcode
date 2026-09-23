function generate(numRows: number): number[][] {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  let triangle = [[1], [1, 1]]

  for (let i = 3 ; i <= numRows; i++) {
    let innerValues = []
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i-1)
        innerValues.push(1)
      else {
        let num = triangle[i-2][j-1] +  triangle[i-2][j];
        innerValues.push(num)

      }

    }

    triangle.push(innerValues)
  }

  // console.log(triangle)

  return triangle;
}

console.log(generate(5));
// console.log(generate(1));
