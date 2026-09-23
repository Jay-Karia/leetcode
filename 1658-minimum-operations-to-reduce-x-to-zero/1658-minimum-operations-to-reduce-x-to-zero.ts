function minOperations(nums: number[], x: number): number {
  const k = nums.reduce((a, c) => a + c, 0) - x;
    if (k < 0) return -1;

    let best = -1, i = 0, s = 0, n = nums.length;
    for (let j = 0; j < n; j++) {
        s += nums[j];
        while (s > k)
            s -= nums[i++];

        if (s === k)
            best = Math.max(best, j - i + 1);
    }

    return best < 0 ? -1 : n - best;
}

console.log(minOperations([1, 1, 4, 2, 3], 5)); // 2
console.log(minOperations([5, 6, 7, 8, 9], 4)) // -1
console.log(minOperations([3, 2, 20, 1, 1, 3], 10)); // 5
console.log(minOperations([2, 3, 1, 1, 1], 5)); // 2
