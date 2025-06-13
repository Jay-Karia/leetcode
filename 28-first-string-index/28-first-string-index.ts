function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
};

console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
