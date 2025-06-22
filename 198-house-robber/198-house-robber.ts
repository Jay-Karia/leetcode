function sumArray(nums: number[]): number {
  return nums.reduce((acc, num) => acc + num, 0);
}

function rob(nums: number[]): number {
  const len = nums.length;
  if (len === 1) return nums[0];
  if (len === 2) return Math.max(nums[0], nums[1]);

  // Get all the possible sub arrays of alternating houses
  const dp: number[] = new Array(len).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[len - 1];
};

console.log(rob([1, 2, 3, 1])); // Output: 4
console.log(rob([2, 7, 9, 3, 1])); // Output: 12
