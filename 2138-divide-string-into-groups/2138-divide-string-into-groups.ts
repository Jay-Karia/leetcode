function divideString(s: string, k: number, fill: string): string[] {
  if (s.length === 1 && k === 1) return [s];
  if (s.length < k) {
    const result = s.padEnd(k, fill);
    return [result];
  }

  const result: string[] = [];
  for (let i = 0; i < s.length; i += k) {
    const segment = s.slice(i, i + k);
    if (segment.length < k) {
      result.push(segment.padEnd(k, fill));
    } else {
      result.push(segment);
    }
  }
  if (result.length > 0 && result[result.length - 1].length < k) {
    result[result.length - 1] = result[result.length - 1].padEnd(k, fill);
  }
  if (result.length > 0) return result;
  return [];
};

console.log(divideString("abcdefghi", 3, "x")); // ["abc", "def", "ghi"]
console.log(divideString("abcdefghij", 3, "x")); // ["abc", "def", "ghi", "jxx"]
console.log(divideString("a", 1, "x"));
console.log(divideString("j", 4, "x"));
