function reverse(x: number): number {
  // Convert the number into string
  const str = x.toString();
  // Check if the number is negative
  const isNegative = str[0] === "-";
  // Reverse the string and convert it back to a number
  const reversedStr = isNegative
    ? str.slice(1).split("").reverse().join("")
    : str.split("").reverse().join("");
  const reversedNum = parseInt(reversedStr, 10);
  // If the reversed number is out of the 32-bit signed integer range, return 0
  if (reversedNum < -2147483648 || reversedNum > 2147483647) return 0;
  // Return the reversed number with the correct sign
  return isNegative ? -reversedNum : reversedNum;
}

console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
