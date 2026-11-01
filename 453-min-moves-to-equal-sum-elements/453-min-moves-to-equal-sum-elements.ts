function minMoves(nums: number[]): number {
  const len = nums.length;
  let diffs: number[] = [];
  const minNumber = Math.min(...nums);
  const minNumberIndex = nums.indexOf(minNumber);

  for (let i = 0; i < len; i++) diffs.push(Math.abs(nums[minNumberIndex] - nums[i]));

  return diffs.reduce((acc, curr) => acc + curr, 0);
}

console.log(minMoves([1, 2, 3])); // 3
