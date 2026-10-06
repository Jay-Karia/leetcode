function minAddToMakeValid(s: string): number {
  const len = s.length;
  let counter = 0;
  let open = 0;

  for (let i = 0; i < len; i++) {
    const char = s[i];
    if (char === "(") {
      open++;
    }
    else if (char === ")") {
      if (open === 0)
        counter++;
      else
        open--;
    }
  }

  return open + counter;
};

console.log(minAddToMakeValid("())")) // 1
console.log(minAddToMakeValid("(((")) // 3
console.log(minAddToMakeValid("()))((")) // 4
