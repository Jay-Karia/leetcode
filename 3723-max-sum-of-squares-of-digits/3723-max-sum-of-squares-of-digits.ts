function maxSumOfSquares(num: number, sum: number): string {
  if (num <= 0 || sum < 0 || sum > num * 9) {
    return "";
  }

  let result = "";
  let remaining = sum;

  while (remaining >= 9 && result.length < num) {
    result += "9";
    remaining -= 9;
  }

  if (remaining > 0) {
    result += remaining.toString();
  }

  return result.padEnd(num, "0");
};

console.log(maxSumOfSquares(2, 3)) // 30
console.log(maxSumOfSquares(2, 17)) // 98
console.log(maxSumOfSquares(1, 10)) // ""
