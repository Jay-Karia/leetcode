function rob(nums: number[]): number {
  const len = nums.length;
  if (len === 1) return nums[0];
  if (len === 2) return Math.max(nums[0], nums[1]);
  if (len === 3) return Math.max(nums[0], nums[1], nums[2]);

  const robLinear = (arr: number[]): number => {
    let prev1 = 0, prev2 = 0;
    for (let num of arr) {
      const temp = Math.max(prev1, prev2 + num);
      prev2 = prev1;
      prev1 = temp;
    }
    return prev1;
  };
  // Rob houses excluding the first house
  const rob1 = robLinear(nums.slice(1));
  // Rob houses excluding the last house
  const rob2 = robLinear(nums.slice(0, len - 1));
  // Return the maximum of both scenarios
  return Math.max(rob1, rob2);
};

console.log(rob([2, 3, 2])); // Expected output: 3
console.log(rob([1, 2, 3, 1])); // Expected output: 4
console.log(rob([1, 2, 3])); // Expected output: 3
