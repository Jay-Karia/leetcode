function minOperations(nums: number[]): number {
  const len = nums.length;

  if (len <= 1)
    return 0;

  let isSortedRotation = true;
  let isReversedRotation = true;
  const firstValue = nums[0];

  for (let index = 0; index < len; index++) {
    if (nums[index] !== (firstValue + index) % len)
      isSortedRotation = false;

    if (nums[index] !== (firstValue - index + len) % len)
      isReversedRotation = false;
  }

  if (isSortedRotation) {
    if (firstValue === 0)
      return 0;

    return Math.min(len - firstValue, firstValue + 2);
  }

  if (isReversedRotation) {
    const sortedRotationOffset = (firstValue + 1) % len;

    return 1 + Math.min(
      sortedRotationOffset,
      len - sortedRotationOffset,
    );
  }

  return -1;
}

console.log(minOperations([1, 0, 2])); // 2
console.log(minOperations([0, 2, 3, 1])); // -1
console.log(minOperations([0, 1])); // 0
console.log(minOperations([1, 0])); // 1
console.log(minOperations([1, 2, 0])); // 2
console.log(minOperations([2, 0, 1 ])); // 1
console.log(minOperations([1, 2, 3, 0 ])); // 3
