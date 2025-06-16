function checkPalindrome(s: string): boolean {
  const reversed = s.split('').reverse().join('');
  return s === reversed;
}

function isPalindrome(s: string): boolean {
  const len = s.length;
  if (len === 1) return true;

  return checkPalindrome(s.toLocaleLowerCase().replace(/[^a-z0-9]/g, ''));
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
