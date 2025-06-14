// Remaps the digits to get the max number
function getMaxNumber(num: number): number {
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

// Remaps the digits to get the min number
function getMinNumber(num: number): number {
  const digits = num.toString().split("");

  // Find the first non-zero digit
  let digitToReplace = digits[0];
  if (digitToReplace === "0") {
    for (const digit of digits) {
      if (digit !== "0") {
        digitToReplace = digit;
        break;
      }
    }
  }

  // Replace all occurrences with '0'
  const remappedDigits = digits.map(digit =>
    digit === digitToReplace ? "0" : digit
  );

  return parseInt(remappedDigits.join(""), 10);
}

function minMaxDifference(num: number): number {
  const maxNumber = getMaxNumber(num);
  const minNumber = getMinNumber(num);

  // console.log(`Max Number: ${maxNumber}, Min Number: ${minNumber}`);

  return maxNumber - minNumber;
}

console.log(minMaxDifference(11891)); // 99009
console.log(minMaxDifference(90)); // 99
console.log(minMaxDifference(199)); // 900
console.log(minMaxDifference(867)); // 900
