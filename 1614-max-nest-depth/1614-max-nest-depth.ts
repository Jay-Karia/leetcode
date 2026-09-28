function maxDepth(s: string): number {
  let depth = 0;
  const len = s.length;

  let counter = 0;

  for (let i = 0; i < len; i++) {
    const char = s[i];
    if (char === "(")
      counter++;
    if (char === ")") {
      if (counter > depth)
        depth = counter;
      counter --;
    }
  }

  return depth;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1")) // 3
console.log(maxDepth("()(())((()()))")) // 3
