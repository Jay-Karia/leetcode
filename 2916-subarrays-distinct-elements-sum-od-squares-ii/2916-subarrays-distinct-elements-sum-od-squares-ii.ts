function sumCounts(nums: number[]): number {
  const mod = 1_000_000_007;
  const length = nums.length;
  const sum = new Array<number>(length * 4).fill(0);
  const squares = new Array<number>(length * 4).fill(0);
  const lazy = new Array<number>(length * 4).fill(0);

  const apply = (node: number, left: number, right: number, increment: number) => {
    const segmentLength = right - left + 1;
    squares[node] =
      (squares[node] +
        2 * increment * sum[node] +
        increment * increment * segmentLength) %
      mod;
    sum[node] += increment * segmentLength;
    lazy[node] += increment;
  };

  const update = (
    node: number,
    left: number,
    right: number,
    queryLeft: number,
    queryRight: number,
  ) => {
    if (queryLeft <= left && right <= queryRight) {
      apply(node, left, right, 1);
      return;
    }

    const middle = Math.floor((left + right) / 2);
    if (lazy[node] !== 0) {
      apply(node * 2, left, middle, lazy[node]);
      apply(node * 2 + 1, middle + 1, right, lazy[node]);
      lazy[node] = 0;
    }

    if (queryLeft <= middle) {
      update(node * 2, left, middle, queryLeft, queryRight);
    }
    if (queryRight > middle) {
      update(node * 2 + 1, middle + 1, right, queryLeft, queryRight);
    }

    sum[node] = sum[node * 2] + sum[node * 2 + 1];
    squares[node] = (squares[node * 2] + squares[node * 2 + 1]) % mod;
  };

  const previousIndex = new Map<number, number>();
  let result = 0;

  for (let right = 0; right < length; right++) {
    const previous = previousIndex.get(nums[right]) ?? -1;
    update(1, 0, length - 1, previous + 1, right);
    previousIndex.set(nums[right], right);
    result = (result + squares[1]) % mod;
  }

  return result;
}
