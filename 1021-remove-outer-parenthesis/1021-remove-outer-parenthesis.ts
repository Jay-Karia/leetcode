function removeCharactersAtIndexes(str: string, indexesToRemove: Set<number>): string {

  return str
    .split('')
    .filter((_, index) => !indexesToRemove.has(index))
    .join('');
}

function removeOuterParentheses(s: string): string {
  let result = "";
  const len = s.length;
  let counter = 0;
  let open = []

  let removingIndexes: Set<number> = new Set()

  for (let i = 0; i < len; i++) {
    const char = s[i];
    if (char === "(") {
      counter++;
      open.push(i)
    } else if (char === ")") {
      if (counter === 1) {
        removingIndexes.add(i);
        removingIndexes.add(open[0])
      }
      open.pop()
      counter--;
    }
  }

  return removeCharactersAtIndexes(s, removingIndexes);
};

console.log(removeOuterParentheses("(()())(())")) // ()()() 5, 9  -- 0, 6
console.log(removeOuterParentheses("(()())(())(()(()))")) // ()()()()(()) 5, 9, 17  --  0, 6, 10
console.log(removeOuterParentheses("()()")) // "" 1, 3 -- 0, 2
