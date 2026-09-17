function lengthOfLongestSubstring(s: string): number {
  let max = 0

  // Find all possible substrings
  for (let i = 0; i < s.length; i++) {
    let substring = ''
    for (let j = i; j < s.length; j++) {
      if (substring.includes(s[j])) {
        break
      }
      substring += s[j]
    }
    max = Math.max(max, substring.length)
  }

  return max
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("au")); // 2
