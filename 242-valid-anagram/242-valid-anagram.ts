function isAnagram(s: string, t: string): boolean {
  const sLen = s.length;
  if (sLen !== t.length) return false;
  if (sLen === 1 && t.length === 1) return s === t;

  const charCount: Record<string, number> = {};
  for (let i = 0; i < sLen; i++) {
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    charCount[t[i]] = (charCount[t[i]] || 0) - 1;
  }
  return Object.values(charCount).toString().replaceAll('0,', '').length === 1;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
