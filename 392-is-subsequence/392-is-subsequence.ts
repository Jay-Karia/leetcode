function isSubsequence(s: string, t: string): boolean {
  const len = s.length;
  const mainStringLength = t.length;

  let i = 0;
  let j = 0;

  while (i < len && j < mainStringLength) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === len;
};

console.log(isSubsequence("abc", "ahbgdc")) // true
console.log(isSubsequence("axc", "ahbgdc")) // false
console.log(isSubsequence("acb", "ahbgdc")) // false
console.log(isSubsequence("bb", "ahbgdc")) // false
console.log(isSubsequence("aza", "abzba")) // true
