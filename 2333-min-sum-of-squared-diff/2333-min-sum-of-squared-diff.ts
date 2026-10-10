function minSumSquareDiff(nums1: number[], nums2: number[], k1: number, k2: number): number {
  const diff: number[] = [];
  let remaining = k1 + k2;

  for (let i = 0; i < nums1.length; i++) {
    diff.push(Math.abs(nums1[i] - nums2[i]));
  }

  if (diff.length === 0) return 0;

  diff.sort((a, b) => a - b);
  remaining = Math.min(remaining, diff.reduce((sum, value) => sum + value, 0));

  for (let i = diff.length - 1; i > 0; i--) {
    const count = diff.length - i;
    const cost = (diff[i] - diff[i - 1]) * count;

    if (remaining >= cost) {
      remaining -= cost;
      continue;
    }

    const level = diff[i] - Math.floor(remaining / count);
    const extra = remaining % count;
    let result = 0;

    for (let j = 0; j < i; j++) {
      result += diff[j] * diff[j];
    }

    result += (count - extra) * level * level;
    result += extra * (level - 1) * (level - 1);
    return result;
  }

  const level = diff[0] - Math.floor(remaining / diff.length);
  const extra = remaining % diff.length;

  return (diff.length - extra) * level * level + extra * (level - 1) * (level - 1);
}

console.log(minSumSquareDiff([1, 2, 3, 4], [2, 10, 20, 19], 0, 0)); // 579
console.log(minSumSquareDiff([1, 4, 10, 12], [5, 8, 6, 9], 1, 1)) // 43
