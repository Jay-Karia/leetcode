function sumOfSquares(nums: number[]): number {
  let result = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const num = nums[i]
    if (n % (i + 1) === 0)
      result += Math.pow(num, 2)
  }

  return result;
};

console.log(sumOfSquares([1,2,3,4])) // 21
console.log(sumOfSquares([2,7,1,19,18,3])) // 63
