function nextPermutation(nums: number[]): void {
  const n = nums.length;
  if (n <= 1) return;

  // Step 1: Find the first decreasing element from the right
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  // Step 2: If such element exists, find the element just larger than it
  if (i >= 0) {
    let j = n - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }

    // Step 3: Swap them
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Step 4: Reverse the subarray after position i
  let left = i + 1;
  let right = n - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

console.log(nextPermutation([1, 2, 3])) // [1, 3, 2]
console.log(nextPermutation([3, 2, 1])) // [1, 2, 3]
console.log(nextPermutation([1, 1, 5])) // [1, 5, 1]
