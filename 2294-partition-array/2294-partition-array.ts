function partitionArray(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let count = 0;
  let i = 0;

  while (i < nums.length) {
    count++;
    const start = nums[i];
    while (i < nums.length && nums[i] - start <= k) {
      i++;
    }
  }

  return count;
}

console.log(partitionArray([3, 6, 1, 2, 5], 2)); // Output: 2
console.log(partitionArray([1, 2, 3], 1)); // Output: 2
console.log(partitionArray([2, 2, 4, 5], 0)); // Output: 3
