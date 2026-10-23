function sortPermutation(nums: number[]): number {
  let result = -1;
  let hasMisplacedValue = false;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === index) continue;

    hasMisplacedValue = true;
    result &= nums[index] & index;
  }

  return hasMisplacedValue ? result : 0;
}

console.log(sortPermutation([0, 3, 2, 1])) // 1
console.log(sortPermutation([0, 1, 3, 2])) // 2
console.log(sortPermutation([3, 2, 1, 0])) // 0
console.log(sortPermutation([0, 1])) // 0
console.log(sortPermutation([0, 2, 3, 1])) // 0
