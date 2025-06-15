function getMax(num: number): number {
  const digits = num.toString().split("");

  // Find the first non-nine digit
  let digitToReplace = digits[0];
  if (digitToReplace === "9") {
    for (const digit of digits) {
      if (digit !== "9") {
        digitToReplace = digit;
        break;
      }
    }
  }

  // Replace all occurrences with '9'
  const remappedDigits = digits.map(digit =>
    digit === digitToReplace ? "9" : digit
  );

  return parseInt(remappedDigits.join(""), 10);
}

function getMin(num: number): number {
  const digits = num.toString().split("");

  // For minimum, we need to be careful about the first digit
  // Case 1: If first digit is not '1', replace it with '1'
  if (digits[0] !== '1') {
    const digitToReplace = digits[0];
    const remappedDigits = digits.map(digit =>
      digit === digitToReplace ? '1' : digit
    );
    return parseInt(remappedDigits.join(""), 10);
  }

  // Case 2: If first digit is '1', find the first digit that is not '0' or '1'
  // and replace it with '0'
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] !== '0' && digits[i] !== '1') {
      const digitToReplace = digits[i];
      const remappedDigits = digits.map(digit =>
        digit === digitToReplace ? '0' : digit
      );
      return parseInt(remappedDigits.join(""), 10);
    }
  }

  // If no suitable digit found, return original number
  return num;
}

function maxDiff(num: number): number {
  const min = getMin(num);
  const max = getMax(num);
  return max - min;
}

console.log(maxDiff(555)) // Output: 888
console.log(maxDiff(9)) // Output: 8
console.log(maxDiff(123456)) // Output: 820000
console.log(maxDiff(9288)); // Output: 8700
console.log(maxDiff(1101057)); // Output: 8808050
