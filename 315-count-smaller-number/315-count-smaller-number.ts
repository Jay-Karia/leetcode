function countSmaller(nums: number[]): number[] {
  if (!nums.length) return [];

  // Step 1: Discretize the input (map values to ranks)
  const values = [...new Set(nums)].sort((a, b) => a - b);
  const ranks = new Map();
  values.forEach((val, idx) => ranks.set(val, idx + 1));

  const n = nums.length;
  const result = new Array(n).fill(0);
  const bit = new Array(values.length + 1).fill(0);

  // Step 2: Process array from right to left
  for (let i = n - 1; i >= 0; i--) {
    const rank = ranks.get(nums[i]);
    // Count elements smaller than current element
    result[i] = query(bit, rank - 1);
    // Update BIT to include current element
    update(bit, rank);
  }

  return result;
}

// Query sum up to index idx in BIT
function query(bit: number[], idx: number): number {
  let sum = 0;
  while (idx > 0) {
    sum += bit[idx];
    idx -= idx & -idx; // Remove least significant bit
  }
  return sum;
}

// Update BIT at index idx
function update(bit: number[], idx: number): void {
  while (idx < bit.length) {
    bit[idx] += 1;
    idx += idx & -idx; // Add least significant bit
  }
}

console.log(countSmaller([5, 2, 6, 1])); // Output: [2, 1, 1, 0]
console.log(countSmaller([-1, -1])); // Output: [0, 0]
// console.log(countSmaller([0])); // Output: [0]
