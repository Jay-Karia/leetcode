function isUnique(nums: number[]): boolean {
  let arrLength = nums.length;
  let setLength = new Set(nums).size;

  return arrLength === setLength;
}

function minimumOperations(nums: number[]): number {
  if (isUnique(nums) && nums.length <= 3) return 0;
  let counter = 0;

  while(!isUnique(nums)) {
    nums = nums.splice(3)
    counter ++;
  }

  return counter;
};

console.log(minimumOperations([5, 5])) // 1
console.log(minimumOperations([4,5,6,4,4])) // 2
console.log(minimumOperations([6,7,8,9])) // 0
console.log(minimumOperations([4, 6])) // 0
