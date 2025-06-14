function multiply(num1: string, num2: string): string {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  return n1*n2 + '';
}

console.log(multiply("2", "3")); // "6"
console.log(multiply("123", "456")); // "56088"
