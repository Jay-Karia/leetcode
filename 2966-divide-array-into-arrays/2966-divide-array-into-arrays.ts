function divideArray(nums: number[], k: number): number[][] {
  // Check if the array length is divisible by 3
  if (nums.length % 3 !== 0) {
    return [];
  }

  // Sort the array
  nums.sort((a, b) => a - b);

  const result: number[][] = [];

  // Group elements by 3
  for (let i = 0; i < nums.length; i += 3) {
    // Get the current subarray of 3 elements
    const subarray = nums.slice(i, i + 3);

    // Check if the difference between max and min is at most k
    if (subarray[2] - subarray[0] > k) {
      return [];
    }

    result.push(subarray);
  }

  return result;
}


console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2)); // [[1,1,3],[3,4,5],[7,8,9]]
console.log(divideArray([2, 4, 2, 2, 5, 2], 2)); // [[]]
console.log(
  divideArray([4, 2, 9, 8, 2, 12, 7, 12, 10, 5, 8, 5, 5, 7, 9, 2, 5, 11], 14)
); // [[2,2,12],[4,8,5],[5,9,7],[7,8,5],[5,9,10],[11,12,2]]
