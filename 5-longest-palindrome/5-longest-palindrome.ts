let substrings = new Array<string>();
let lengths = new Array<number>();
let pals = new Array<string>();

function longestPalindrome(s: string): string {
  if (s.length <= 1) return s;

  let start = 0, maxLength = 1;

  // Helper function to expand around center
  const expandAroundCenter = (left: number, right: number): void => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        start = left;
      }
      left--;
      right++;
    }
  };

  // Check each position as potential center
  for (let i = 0; i < s.length; i++) {
    // Expand for odd length palindromes (single character center)
    expandAroundCenter(i, i);

    // Expand for even length palindromes (between two characters)
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLength);
}

console.log(longestPalindrome("babad")); // bab
console.log(longestPalindrome("cbbd")); // bb
