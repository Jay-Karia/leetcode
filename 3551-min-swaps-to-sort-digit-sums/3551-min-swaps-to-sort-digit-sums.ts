function minSwaps(nums: number[]): number {
  const items = nums.map((value, index) => {
    let digitSum = 0;
    let remaining = value;

    while (remaining > 0) {
      digitSum += remaining % 10;
      remaining = Math.floor(remaining / 10);
    }

    return { digitSum, index, value };
  });

  const sortedItems = [...items].sort(
    (first, second) =>
      first.digitSum - second.digitSum || first.value - second.value,
  );
  const visited = new Array(nums.length).fill(false);
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) {
      continue;
    }

    let cycleSize = 0;
    let j = i;

    while (!visited[j]) {
      visited[j] = true;
      j = sortedItems[j].index;
      cycleSize++;
    }

    if (cycleSize > 1) {
      result += cycleSize - 1;
    }
  }

  return result;
}

console.log(minSwaps([37, 100])); // 1
console.log(minSwaps([22, 14, 33, 7])); // 0
console.log(minSwaps([18, 43, 34, 16])); // 2
