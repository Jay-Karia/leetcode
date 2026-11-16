function digitSum(s: string, k: number): string {
  while (s.length > k) {
    const groupSums: string[] = [];

    for (let i = 0; i < s.length; i += k) {
      const group = s.slice(i, i + k);
      const sum = group
        .split("")
        .reduce((total, digit) => total + Number(digit), 0);
      groupSums.push(sum.toString());
    }

    s = groupSums.join("");
  }

  return s;
}

console.log(digitSum("11111222223", 3)); // "135"
// console.log(digitSum("00000000", 3)); // "000"
