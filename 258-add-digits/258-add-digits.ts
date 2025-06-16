function addDigits(num: number): number {
  let len = num.toString().length;
  if (len === 1) return num;

  let sum = 0;
  let number = num;
  while (len !== 1) {
    const digits = number.toString().split("");
    sum = digits.reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    number = sum;
    len = number.toString().length;
  }

  return sum;
};

console.log(addDigits(38)); // Output: 2
console.log(addDigits(0));  // Output: 0
