function longestMonotonicSubarray(nums: number[]): number {
  const result = [1, 1];
  let increasing = 1;
  let decreasing = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      increasing++;
      decreasing = 1;
    } else if (nums[i] < nums[i - 1]) {
      decreasing++;
      increasing = 1;
    } else {
      increasing = 1;
      decreasing = 1;
    }
    result[0] = Math.max(result[0], increasing);
    result[1] = Math.max(result[1], decreasing);
  }

  return Math.max(...result);
}

// console.log(longestMonotonicSubarray([1, 4, 3, 3, 2])); // 2
// console.log(longestMonotonicSubarray([3, 3, 3, 3])); // 1
// console.log(longestMonotonicSubarray([3, 2, 1])); // 3
console.log(longestMonotonicSubarray([1, 10, 10])); // 2
