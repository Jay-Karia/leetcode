function minMoves(nums: number[]): number {
  const len = nums.length;
  const sorted = nums.sort((a, b) => a - b);

  const diffs: number[] = []

  for (let i = 0; i < len - 1; i++) {
    const num = sorted[i];
    diffs.push(sorted[len - 1] - num);
  }

  return diffs.reduce((acc, curr) => acc + curr, 0);
};

console.log(minMoves([2, 1, 3])) // 3
console.log(minMoves([4, 4, 5])) // 2
