function isEqual(s: string[], n: string): boolean {
  let equal = false;
  s.forEach(s => {
    if(s === n) {
      equal = true;
    }
  })
  return equal;
}

function getMax(s: number[]): number {
  let max = 0;

  s.forEach(n => {
    if (n > max)
      max = n;
  })

  return max;
}

let subs = new Array<string>();
let lens = new Array<number>();

function lengthOfLongestSubstring(s: string): number {
  const len = s.length;
  if (len === 1 || len === 0) return len;

  for (let i = 0; i < len; i++) {
    const char = s[i];
    subs.push(char);
    for (let j = i + 1; j < len; j++) {
      const char2 = s[j];
      if (!isEqual(subs, char2))
        subs.push(char2)
      else {
        subs = [];
        break;
      }
      lens.push(subs.length);
    }
  }

  if (lens.length === 0) return 1;
  const max = getMax(lens);
  subs = [];
  lens = [];
  return max;
};


console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("au")); // 2
