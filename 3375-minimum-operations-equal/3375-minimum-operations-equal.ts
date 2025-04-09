function minOperations(nums: number[], k: number): number {
  // If any element is less than k, it's impossible (we can only decrease values)
  for (const num of nums) {
    if (num < k) return -1;
  }

  // Count operations needed to make all elements equal to k
  let operations = 0;
  let done = false;

  // Create a copy to work with
  const arr = [...nums];

  // Continue until all elements equal k
  while (!done) {
    // Check if we're done
    if (arr.every(num => num === k)) {
      done = true;
      continue;
    }

    // Find the largest value greater than k
    const max = Math.max(...arr.filter(num => num > k));

    // Select h as the second largest value, or k if there isn't one
    let h = k;
    const secondLargest = Math.max(...arr.filter(num => num < max && num >= k), 0);
    if (secondLargest > 0) {
      h = secondLargest;
    }

    // Apply the operation
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > h) {
        arr[i] = h;
      }
    }

    operations++;
  }

  return operations;
}
