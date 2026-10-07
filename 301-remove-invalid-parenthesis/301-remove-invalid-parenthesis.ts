function generateAllCombinations(
  i: number,
  balance: number,
  leftRem: number,
  rightRem: number,
  path: string,
  valid: Set<string>,
  len: number,
  s: string,
): void {
  if (balance < 0) return; // a ")" came before its "("

  if (i === len) {
    if (leftRem === 0 && rightRem === 0 && balance === 0) {
      valid.add(path);
    }
    return;
  }

  const char = s[i];

  if (char === "(" && leftRem > 0) {
    generateAllCombinations(i + 1, balance, leftRem - 1, rightRem, path, valid, len, s);
  }
  if (char === ")" && rightRem > 0) {
    generateAllCombinations(i + 1, balance, leftRem, rightRem - 1, path, valid, len, s);
  }

  if (char === "(") {
    generateAllCombinations(i + 1, balance + 1, leftRem, rightRem, path + char, valid, len, s);
  } else if (char === ")") {
    generateAllCombinations(i + 1, balance - 1, leftRem, rightRem, path + char, valid, len, s);
  } else {
    generateAllCombinations(i + 1, balance, leftRem, rightRem, path + char, valid, len, s);
  }
}

function removeInvalidParentheses(s: string): string[] {
  const valid = new Set<string>();
  const len = s.length;
  let open = 0;
  let counter = 0;
  let invalidIndexes = [];
  let openIndexes = [];

  for (let i = 0; i < len; i++) {
    const char = s[i];
    if (char === "(") {
      open++;
      openIndexes.push(i);
    } else if (char === ")") {
      if (open === 0) {
        counter++;
        invalidIndexes.push(i);
      } else {
        open--;
        openIndexes.pop();
      }
    }
  }

  const totalInvalidParenthesis = open + counter;

  if (totalInvalidParenthesis === len) return [""];

  invalidIndexes = [...new Set([...invalidIndexes, ...openIndexes])];

  generateAllCombinations(0, 0, open, counter, "", valid, len, s);

  return Array.from(valid);
}

console.log(removeInvalidParentheses("()())()")); // ["(())()","()()()"]
console.log(removeInvalidParentheses("(a)())()")) // ["(a())()","(a)()()"]
console.log(removeInvalidParentheses(")(")) // [""]
