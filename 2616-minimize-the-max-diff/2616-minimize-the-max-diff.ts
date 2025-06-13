function minimizeMax(nums: number[], p: number): number {
  // If no pairs needed or empty array, return 0
  if (p === 0 || nums.length <= 1) return 0;

  // Sort the array to make adjacent elements have smaller differences
  nums.sort((a, b) => a - b);

  // Binary search for the minimum possible maximum difference
  let left = 0;
  let right = nums[nums.length - 1] - nums[0]; // Maximum possible difference

  // Binary search
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // Check if we can form at least p pairs with max difference <= mid
    if (canFormPairs(nums, mid, p)) {
      // We can form p pairs, try to minimize further
      right = mid;
    } else {
      // Cannot form p pairs, need to increase the threshold
      left = mid + 1;
    }
  }

  return left;
}

// Helper function to check if we can form at least p pairs
// with maximum difference <= maxDiff
function canFormPairs(nums: number[], maxDiff: number, p: number): boolean {
  let count = 0;
  let i = 0;

  // Greedily form pairs with adjacent elements
  while (i < nums.length - 1) {
    if (nums[i + 1] - nums[i] <= maxDiff) {
      // Form a pair and skip both elements
      count++;
      i += 2;
    } else {
      // Cannot form a pair with current element
      i++;
    }

    // Early termination if we've found enough pairs
    if (count >= p) return true;
  }

  return count >= p;
}
