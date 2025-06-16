function majorityElement(nums: number[]): number {
  const n = nums.length;
  if (n === 1) return nums[0];

  const minFrequency = Math.round(n / 2);
  const uniqueElements = [... new Set(nums)]
  const frequency = new Array<number>(uniqueElements.length).fill(0);

  for (let i = 0; i < uniqueElements.length; i++) {
    for (let j = 0; j < n; j++) {
      if (uniqueElements[i] === nums[j])
        frequency[i]++;
    }
  }

  for (let i = 0 ; i < frequency.length; i++ ) {
    if (frequency[i] >= minFrequency)
      return uniqueElements[i]
  }

  return -1;
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
