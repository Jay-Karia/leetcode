function checkString(s: string): boolean {
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === 'b') {
      for (let j = i + 1; j < len; j++) {
        if (s[j] === 'a') {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(checkString("aaabbb")); // true
console.log(checkString("abab")); // false
console.log(checkString("bbb")); // true
console.log(checkString("aaa")); // true
console.log(checkString("aabbaa")); // false
