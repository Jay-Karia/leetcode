function convert(s: string, numRows: number): string {
  if (numRows === 1 || numRows >= s.length) return s;

  const rows: string[] = new Array(Math.min(numRows, s.length)).fill("");
  let curRow = 0;
  let goingDown = false;

  for (const char of s) {
    rows[curRow] += char;
    if (curRow === 0) goingDown = true;
    else if (curRow === numRows - 1) goingDown = false;
    curRow += goingDown ? 1 : -1;
  }

  return rows.join("");
};

console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
console.log(convert("A", 1)); // "A"
