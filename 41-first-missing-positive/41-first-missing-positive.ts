function firstMissingPositive(nums: number[]): number {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const n = nums.length;

  if (min > 1 || max < 1) return 1;

  const numSet = new Set(nums);
  for (let i = 1; i <= n; i++) {
    if (!numSet.has(i)) {
      return i;
    }
  }

  return n + 1; // If all numbers from 1 to n are present, return n + 1
}

console.log(firstMissingPositive([1, 2, 0])); // Output: 3
console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // Output: 1
console.log(firstMissingPositive([100000, 3, 4000, 2, 15, 1, 99999])); // Output: 4
