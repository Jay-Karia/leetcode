function largestNumber(nums: number[]): string {
  // Convert all numbers to strings
  const numStrs = nums.map(num => num.toString());

  // Sort strings in custom order
  numStrs.sort((a, b) => {
    // Compare concatenations both ways: a+b vs b+a
    return (b + a).localeCompare(a + b);
  });

  // Edge case: if the largest number is 0, return "0" instead of multiple zeros
  if (numStrs[0] === '0') {
    return '0';
  }

  // Join the sorted strings to form the final result
  return numStrs.join('');
}

console.log(largestNumber([10, 2])); // 210
console.log(largestNumber([3, 30, 34, 5, 9])); // 9534330
