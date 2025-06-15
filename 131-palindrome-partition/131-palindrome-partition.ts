function partition(s: string): string[][] {
  const result: string[][] = [];
  const currentPartition: string[] = [];

  // Helper function to check if a string is a palindrome
  function isPalindrome(str: string, start: number, end: number): boolean {
      while (start < end) {
          if (str[start] !== str[end]) return false;
          start++;
          end--;
      }
      return true;
  }

  // Backtracking function
  function backtrack(start: number): void {
      // If we've reached the end of the string, we've found a valid partition
      if (start === s.length) {
          result.push([...currentPartition]);
          return;
      }

      // Try all possible substrings starting from current position
      for (let end = start; end < s.length; end++) {
          // If current substring is a palindrome
          if (isPalindrome(s, start, end)) {
              // Add it to our current partition
              currentPartition.push(s.substring(start, end + 1));
              // Continue partitioning the rest of the string
              backtrack(end + 1);
              // Backtrack (remove the substring) to try other possibilities
              currentPartition.pop();
          }
      }
  }

  backtrack(0);
  return result;
}

console.log(partition("aab")); // [["a","a","b"],["aa","b"]]
console.log(partition("a")); // [["a"]]
console.log(partition("abbab")); // [["a","b","b","a","b"],["a","b","bab"],["a","bb","a","b"],["abba","b"]]
console.log(partition("cbbbcc")); // [["c","b","b","b","c","c"],["c","b","b","b","cc"],["c","b","bb","c","c"],["c","b","bb","cc"],["c","bb","b","c","c"],["c","bb","b","cc"],["c","bbb","c","c"],["c","bbb","cc"],["cbbbc","c"]]
