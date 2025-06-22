function maxProduct(nums: number[]): number {
  const len = nums.length;
  if (len === 1) return nums[0];

  let maxProduct = nums[0];

  for (let i = 0, currentProduct = 1; i < len; i++) {
    currentProduct *= nums[i];
    maxProduct = Math.max(maxProduct, currentProduct);

    if (currentProduct === 0) {
      currentProduct = 1; // Reset current product if it becomes zero
    }
  }
  for (let i = len - 1, currentProduct = 1; i >= 0; i--) {
    currentProduct *= nums[i];
    maxProduct = Math.max(maxProduct, currentProduct);

    if (currentProduct === 0) {
      currentProduct = 1; // Reset current product if it becomes zero
    }
  }
  return maxProduct;
};

console.log(maxProduct([2, 3, -2, 4])); // Output: 6
console.log(maxProduct([-2, 0, -1])); // Output: 0
