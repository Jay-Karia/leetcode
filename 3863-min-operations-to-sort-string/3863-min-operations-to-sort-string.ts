function minOperations(s: string): number {
  const len = s.length;

  // Sort the string in ascending order
  let sorted = s.split("").sort().join("")

  if (s === sorted)
    return 0;

  if (len === 2)
    return -1;


  let smallest = "z"
  let largest = "a"

  let smallCounter = 0;
  let largeCounter = 0;

  for (let i = 0; i < len; i++) {
    const char = s[i]
    if (char >= largest)
      largest = char;
    if (char <= smallest)
      smallest = char
  }

  // Check how many times the smallest and largest characters appear in the string
  for (let i = 0; i < len; i++) {
    const char = s[i]
    if (char === smallest)
      smallCounter++;
    if (char === largest)
      largeCounter++;
  }

  if (s[0] === smallest || s[len-1] === largest)
    return 1

  if (s[0] === largest && s[len-1] === smallest && smallCounter === 1 && largeCounter === 1)
    return 3

  return 2;
};

console.log(minOperations("dog")) // 1
console.log(minOperations("card")) // 2
console.log(minOperations("edc")) // 3
console.log(minOperations("jgg")) // 2
console.log(minOperations("lx")) // 0
