function targetIndices(nums: number[], target: number): number[] {
  let result: number[] = [];
  const len = nums.length;

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    const num = nums[i];

    if (num === target) result.push(i);
  }

  return result;
}

console.log(targetIndices([1, 2, 5, 2, 3], 2)); // [1, 2]
console.log(targetIndices([1, 2, 5, 2, 3], 3)); // [3]
console.log(targetIndices([1, 2, 5, 2, 3], 6)); // []
console.log(
  targetIndices(
    [
      48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62,
      77, 15, 38,
    ],
    6
  )
); // [1]
