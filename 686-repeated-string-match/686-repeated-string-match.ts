function repeatedStringMatch(a: string, b: string): number {
  // Edge cases
  if (a.length === b.length && a === b) return 1;
  if (a.length === 0 || b.length === 0) return -1;
  if (a.length > b.length && a.includes(b)) return 1;

  // Create a string that is twice the length of b
  let repeatedA = a;
  let count = 1;

  if (a.length >= b.length) {
    repeatedA += a;
    count++;

    // Check if b is a substring of repeatedA
    if (repeatedA.includes(b)) {
      return count;
    }
  } else {
    repeatedA = a;
    while (repeatedA.length <= b.length * 2) {
      repeatedA += a;
      count++;

      // Check if b is a substring of repeatedA
      if (repeatedA.includes(b)) {
        return count;
      }
    }
  }
  return -1;
}

console.log(repeatedStringMatch("abcd", "cdabcdab")); // Output: 3
console.log(repeatedStringMatch("a", "aa")); // Output: 2
console.log(repeatedStringMatch("aaaaaaaaaaaaaaaaaaaaaab", "ba")); // Output: 2
