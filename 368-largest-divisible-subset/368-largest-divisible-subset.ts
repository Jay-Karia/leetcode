function largestDivisibleSubset(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  if (nums.length === 2) return nums[1] % nums[0] === 0 ? nums : [nums[0]];

  nums.sort((a, b) => a - b);
  const dp: number[] = new Array(nums.length).fill(1);
  const prev: number[] = new Array(nums.length).fill(-1);

  let maxSize = 0;
  let maxIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] === 1) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        prev[i] = j;
        continue;
      }
      else if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[i] > maxSize) {
      maxSize = dp[i];
      maxIndex = i;
    }
  }

  const result: number[] = [];
  while (maxIndex !== -1) {
    result.unshift(nums[maxIndex]);
    maxIndex = prev[maxIndex];
  }

  return result;
}

console.log(largestDivisibleSubset([1, 2, 3])); // [1, 2]
console.log(largestDivisibleSubset([1, 2, 4, 8])); // [1, 2, 4, 8]
