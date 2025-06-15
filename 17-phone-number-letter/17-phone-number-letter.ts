const phoneLetterMap = {
  0: [""],
  1: [""],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
}

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  if (digits.length === 1) return phoneLetterMap[digits[0]];

  const totalDigits = digits.length;
  const result: string[] = [];

  function backtrack(index: number, currentCombination: string) {
    if (index === totalDigits) {
      result.push(currentCombination);
      return;
    }

    const digit = digits[index];
    const letters = phoneLetterMap[digit];

    for (const letter of letters) {
      backtrack(index + 1, currentCombination + letter);
    }
  }

  backtrack(0, "");
  return result;
};

console.log(letterCombinations("23")); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letterCombinations("")); // []
console.log(letterCombinations("2")); // ["a", "b", "c"]
