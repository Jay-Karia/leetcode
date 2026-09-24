function getSumOfDigits(num: number): number {
  let sum = 0;
  let temp = num;

  while(num > 0) {
    temp = num % 10;
    num = Math.floor(num / 10);
    sum += temp
  }

  return sum
}

function smallestIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (getSumOfDigits(nums[i]) === i) return i
  }
  return -1;
};

console.log(smallestIndex([1, 3, 2])) // 2
console.log(smallestIndex([1, 10, 11])) // 1
console.log(smallestIndex([1, 2, 3])) // -1
