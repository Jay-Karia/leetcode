function repeatedSubstringPattern(s: string): boolean {
  const n = s.length;

  // Only need to check lengths up to half of the string
  for (let len = 1; len <= Math.floor(n / 2); len++) {
    // Only consider substring lengths that divide the string length evenly
    if (n % len === 0) {
      // Extract the potential repeating substring
      const pattern = s.substring(0, len);
      let isValid = true;

      // Check if this pattern repeats throughout the string
      for (let i = len; i < n; i += len) {
        if (s.substring(i, i + len) !== pattern) {
          isValid = false;
          break;
        }
      }

      if (isValid) return true;
    }
  }

  return false;
}

console.log(repeatedSubstringPattern("abab")); // true
console.log(repeatedSubstringPattern("aba")); // false
console.log(repeatedSubstringPattern("abcabcabcabc")); // true
