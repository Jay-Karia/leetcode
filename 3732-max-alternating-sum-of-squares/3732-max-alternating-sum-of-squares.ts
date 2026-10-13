function maxAlternatingSum(nums: number[]): number {
  const squaredValues = nums.map((value) => value * value);
  squaredValues.sort((first, second) => second - first);

  const positiveTerms = Math.ceil(nums.length / 2);
  return squaredValues.reduce(
    (score, value, index) => score + (index < positiveTerms ? value : -value),
    0,
  );
};

console.log(maxAlternatingSum([1, 2, 3])) // 12
console.log(maxAlternatingSum([1, -1, 2, -2, 3, -3])) // 16
