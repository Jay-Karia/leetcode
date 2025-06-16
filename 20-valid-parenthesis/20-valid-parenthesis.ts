function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (const char of s) {
    if (pairs[char]) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (pairs[last!] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("([])")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
