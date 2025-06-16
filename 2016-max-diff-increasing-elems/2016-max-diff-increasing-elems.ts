function maximumDifference(nums: number[]): number {
  let diffs: number[] = [];

  // Get the differences between all pairs of elements
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        diffs.push(nums[j] - nums[i]);
      }
    }
  }

  return Math.max(...diffs, -1);
}

console.log(maximumDifference([1, 2, 3, 4, 5])); // 4
console.log(maximumDifference([7, 1, 5, 4])); // 4
console.log(maximumDifference([9, 4, 3, 2])); // -1
console.log(maximumDifference([1, 5, 2, 10])); // 9
console.log(maximumDifference([87, 68, 91, 86, 58, 63, 43, 98, 6, 40])); // 55
