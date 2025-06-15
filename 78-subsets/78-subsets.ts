function subsets(nums: number[]): number[][] {
  if (nums.length === 0) return [[]];
  if (nums.length === 1) return [[], [nums[0]]];

  const result: number[][] = [];

  const backtrack = (start: number, current: number[]) => {
    result.push([...current]); // Add the current subset to the result

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]); // Include nums[i] in the current subset
      backtrack(i + 1, current); // Recur with the next index
      current.pop(); // Exclude nums[i] from the current subset
    }
  }
  backtrack(0, []); // Start backtracking from index 0 with an empty current subset
  return result;
};

console.log(subsets([1, 2, 3])); // [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
console.log(subsets([0])); // [[], [0]]
