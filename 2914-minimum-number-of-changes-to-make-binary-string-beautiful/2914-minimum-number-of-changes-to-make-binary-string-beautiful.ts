function minChanges(s: string): number {
  let changes = 0;

  for (let index = 0; index < s.length; index += 2)
    if (s[index] !== s[index + 1]) changes++;

  return changes;
}

console.log(minChanges("1001")); // 2
