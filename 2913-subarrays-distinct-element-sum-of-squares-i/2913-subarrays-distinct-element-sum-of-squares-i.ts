function getDistinctCount(arr: number[]): number {
  const distinctSet = new Set(arr);
  return distinctSet.size;
}

function sumCounts(nums: number[]): number {
  let result = 0;
  const len = nums.length;

  // Get all subarrays
  let subarrays: number[][] = [];
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      subarrays.push(nums.slice(i, j + 1));
    }
  }

  // Get distinct counts from all subarrays
  for (const subarray of subarrays) {
    const distinctCount = getDistinctCount(subarray);
    result += distinctCount * distinctCount; // Add the square of the distinct count to the result
  }

  return result;
};

console.log(sumCounts([1, 2, 1])) // 15
console.log(sumCounts([1, 1])) // 3
