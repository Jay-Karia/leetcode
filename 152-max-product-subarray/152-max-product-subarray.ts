function maxProduct(nums: number[]): number {
  const len = nums.length;
  if (len === 1) return nums[0];

  let maxProduct = nums[0];
  let currentProduct = nums[0];
  let subArrayLength = len - 1;

  return 1;
};

console.log(maxProduct([2, 3, -2, 4])); // Output: 6
console.log(maxProduct([-2, 0, -1])); // Output: 0
