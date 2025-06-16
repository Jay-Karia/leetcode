function singleNumber(nums: number[]): number {
  const n = nums.length;
  if (n === 1) return nums[0];

  const uniqueElements = [...new Set(nums)];
  const frequency = new Array<number>(uniqueElements.length).fill(0);

  for (let i = 0; i < uniqueElements.length; i++) {
    for (let j = 0; j < n; j++) {
      if (uniqueElements[i] === nums[j]) frequency[i]++;
    }
  }

  for (let i = 0 ; i < frequency.length; i++ ) {
    if (frequency[i] === 1)
      return uniqueElements[i]
  }

  return -1;
}

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
