function findTheDistanceValue(
  arr1: number[],
  arr2: number[],
  d: number
): number {
  return arr1.filter((value) =>
    arr2.every((otherValue) => Math.abs(value - otherValue) > d)
  ).length;
}

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)); // 2
console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)); // 2
