function canPartition(nums: number[]): boolean {
  // Calculate the total sum
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  // If the total sum is odd, it cannot be divided into two equal parts
  if (totalSum % 2 !== 0) return false;

  const target = totalSum / 2;

  // DP array where dp[i] = true if we can form a sum of i using any subset
  const dp = new Array(target + 1).fill(false);
  dp[0] = true; // Base case: we can always form a sum of 0 by taking no elements

  // For each number, update the possible sums we can create
  for (const num of nums) {
    // Go backward to avoid counting the same element multiple times
    for (let j = target; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }

  return dp[target];
}


console.log(canPartition([1, 5, 11, 5])); // true
console.log(canPartition([1, 2, 3, 5])); // false
