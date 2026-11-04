class FenwickTree {
  private readonly tree: number[];

  constructor(size: number) {
    this.tree = Array(size + 1).fill(0);
  }

  add(index: number, value: number): void {
    for (let current = index; current < this.tree.length; current += current & -current) {
      this.tree[current] += value;
    }
  }

  sum(index: number): number {
    let result = 0;
    for (let current = index; current > 0; current -= current & -current) {
      result += this.tree[current];
    }
    return result;
  }

  kth(k: number): number {
    let index = 0;
    let step = 1;

    while (step * 2 < this.tree.length) step *= 2;

    for (; step > 0; step >>= 1) {
      const next = index + step;
      if (next < this.tree.length && this.tree[next] < k) {
        index = next;
        k -= this.tree[next];
      }
    }

    return index + 1;
  }
}

function minOperations(nums: number[], x: number, k: number): number {
  const n = nums.length;
  const sortedValues = [...new Set(nums)].sort((a, b) => a - b);
  const ranks = new Map<number, number>();

  sortedValues.forEach((value, index) => ranks.set(value, index + 1));

  const counts = new FenwickTree(sortedValues.length);
  const sums = new FenwickTree(sortedValues.length);
  const windowCosts: number[] = [];

  const addToWindow = (index: number, multiplier: number): void => {
    const rank = ranks.get(nums[index])!;
    counts.add(rank, multiplier);
    sums.add(rank, nums[index] * multiplier);
  };

  const getWindowCost = (): number => {
    const medianRank = counts.kth(Math.floor((x + 1) / 2));
    const median = sortedValues[medianRank - 1];
    const leftCount = counts.sum(medianRank - 1);
    const leftSum = sums.sum(medianRank - 1);
    const countThroughMedian = counts.sum(medianRank);
    const sumThroughMedian = sums.sum(medianRank);
    const rightCount = x - countThroughMedian;
    const rightSum = sums.sum(sortedValues.length) - sumThroughMedian;

    return median * leftCount - leftSum + rightSum - median * rightCount;
  };

  for (let index = 0; index < x; index++) addToWindow(index, 1);
  windowCosts.push(getWindowCost());

  for (let start = 1; start <= n - x; start++) {
    addToWindow(start - 1, -1);
    addToWindow(start + x - 1, 1);
    windowCosts.push(getWindowCost());
  }

  const infinity = Number.MAX_SAFE_INTEGER;
  let previous = Array(n + 1).fill(0);

  for (let groups = 1; groups <= k; groups++) {
    const current = Array(n + 1).fill(infinity);

    for (let end = groups * x; end <= n; end++) {
      current[end] = Math.min(
        current[end - 1],
        previous[end - x] + windowCosts[end - x],
      );
    }

    previous = current;
  }

  return previous[n];
}

console.log(minOperations([5, -2, 1, 3, 7, 3, 6, 4, -1], 3, 2)); // 8
// console.log(minOperations([9, -2, -2, -2, 1, 5], 2, 2)); // 3
