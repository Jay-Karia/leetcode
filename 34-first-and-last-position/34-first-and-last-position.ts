function searchRange(nums: number[], target: number): number[] {
  const len = nums.length;

  if (len === 0) return [-1, -1];
  let left = 0;
  let right = len - 1;
  let first = -1;
  let last = -1;
  // Find the first occurrence of target
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      first = mid;
      right = mid - 1; // Continue searching in the left half
    }
  }
  left = 0;
  right = len - 1;
  // Find the last occurrence of target
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      last = mid;
      left = mid + 1; // Continue searching in the right half
    }
  }
  // If we found the first and last positions, return them
  if (first !== -1 && last !== -1) {
    return [first, last];
  }

  return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
console.log(searchRange([], 0)); // Output: [-1, -1]
