function minSumOfLengths(arr: number[], target: number): number {
  const bestUpTo = new Array<number>(arr.length).fill(Infinity);
  let left = 0;
  let sum = 0;
  let minTotalLength = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > target) {
      sum -= arr[left];
      left++;
    }

    if (sum === target) {
      const currentLength = right - left + 1;

      // A window ending before `left` cannot overlap the current one.
      if (left > 0) {
        minTotalLength = Math.min(
          minTotalLength,
          currentLength + bestUpTo[left - 1],
        );
      }

      bestUpTo[right] = currentLength;
    }

    if (right > 0) {
      bestUpTo[right] = Math.min(bestUpTo[right], bestUpTo[right - 1]);
    }
  }

  return minTotalLength === Infinity ? -1 : minTotalLength;
}

console.log(minSumOfLengths([3, 2, 2, 4, 3], 3), 'expect 2');
console.log(minSumOfLengths([7, 3, 4, 7], 7), 'expect 2');
console.log(minSumOfLengths([4, 3, 2, 6, 2, 3, 4], 6), 'expect -1');
