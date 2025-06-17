function convertToRoman(num: number): string {
  const romanNumerals: { [key: number]: string } = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  };

  let result = "";

  for (const value of Object.keys(romanNumerals).map(Number).reverse()) {
    while (num >= value) {
      result += romanNumerals[value];
      num -= value;
    }
  }

  return result;
}

function intToRoman(num: number): string {
  const len = num.toString().length;
  const s = num.toString();

  let result = "";

  for (let i = 0; i < len; i++) {
    const digit = parseInt(s[i], 10);
    const placeValue = Math.pow(10, len - i - 1);
    result += convertToRoman(digit * placeValue);
  }

  return result;
}

console.log(intToRoman(3)); // "III"
console.log(intToRoman(4)); // "IV"
console.log(intToRoman(3749)); // "MMMDCCXLIX"
console.log(intToRoman(58)); // "LVIII"
