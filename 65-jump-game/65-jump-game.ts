function canJump(nums: number[]): boolean {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    // If current position is beyond our reach, we can't proceed
    if (i > maxReach) return false;

    // Update the furthest we can reach
    maxReach = Math.max(maxReach, i + nums[i]);

    // If we can reach the end, return true early
    if (maxReach >= nums.length - 1) return true;
  }

  return true; // This line is reached if nums.length === 0
}

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([2, 0, 0])); // true
console.log(canJump([2, 5, 0, 0])); // true
console.log(canJump([3, 0, 8, 2, 0, 0, 1])); // true
