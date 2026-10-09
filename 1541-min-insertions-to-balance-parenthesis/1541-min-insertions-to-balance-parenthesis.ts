function minInsertions(s: string): number {
  let open = 0;
  let insertions = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      open++;
      continue;
    }

    if (s[i + 1] === ")") {
      i++;
    } else {
      insertions++;
    }

    if (open > 0) {
      open--;
    } else {
      insertions++;
    }
  }

  return insertions + open * 2;
}

console.log(minInsertions("(()))")); // 1
console.log(minInsertions("())")); // 0
console.log(minInsertions("))())(")); // 3
console.log(minInsertions(")))))))")); // 5
