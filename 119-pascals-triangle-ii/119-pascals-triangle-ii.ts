function getRow(rowIndex: number): number[] {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  rowIndex++

  let triangle = [[1], [1, 1]]

  for (let i = 3 ; i <= rowIndex; i++) {
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

  return triangle[rowIndex - 1];
};

console.log(getRow(3))
