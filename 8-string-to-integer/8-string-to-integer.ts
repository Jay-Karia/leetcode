function isDigit(ch: string): boolean {
  if (ch === "1" || ch === "2" || ch === "3" || ch === "4" || ch === "5" || ch === "6" || ch === "7" || ch === "8" || ch === "9" || ch === "0") {
    return true;
  }

  return false;
}

function manualParseInt(s: string, isNegative: boolean): number {
  if (s.startsWith("0")) {
    s = s.slice(1)
  }
  let num = 0;
  let len = s.length;
  let power = len;

  for (let i = 0; i < len; i++) {
    const code = s[i].charCodeAt(0)
    const value = code - 48

    num += value * Math.pow(10, power - 1)

    power--;
  }

  if (isNegative)
    num = -num;

  // Rounding
  if (num < -Math.pow(2, 31)) {
    return -Math.pow(2, 31)
  } else if (num > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  }

  return num;
}

function myAtoi(s: string): number {
  let allDigits = false;
  let n = "";
  let isNegative = false;
  let isPositive = false;

  s = s.trim()

  if (s[0] === "-") isNegative = true;
  if (s[0] === "+") isPositive = true;

  if (!isNegative && !isPositive && !isDigit(s[0])) return 0;

  let len = s.length
  let counter = 0
  for (let i = (isPositive || isNegative) ? 1 : 0; i < len; i++) {
    if (isDigit(s[i])) {
      counter++;
      n += s[i]
    }
    else {
      break;
    }
  }
  if (counter === len) {
    allDigits = true;
  }

  if (isPositive) {
    if (allDigits)
      return manualParseInt(s, false)
    else
      return manualParseInt(n, false)
  } else if (isNegative) {
    if (allDigits)
      return manualParseInt(s, true)
    else
      return manualParseInt(n, true)
  } else {
    if (allDigits)
        return manualParseInt(s, false)
    else
      return manualParseInt(n, false)
  }
};

console.log(myAtoi("42")); // 42
console.log(myAtoi("-042")); // -42
console.log(myAtoi("1337c0d3")); // 1337
console.log(myAtoi("0-1")); // 0
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("     -042")); // 0
console.log(myAtoi("-91283472332")); // 0
