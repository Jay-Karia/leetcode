let counter = 0;

function plusOne(digits: number[]): number[] {
  let sum = digits;
  // console.log(sum);

  // Check if the last digit is < 9
  if (digits[digits.length - 1] < 9) {
    sum[digits.length - 1]++;
    // Add counter number of digits
    for (let i = 0; i < counter; i++) sum.push(0);
    counter = 0;
    return sum;
  }

  if (sum.length === 1) {
    // console.log(sum);
    sum = [1, 0];
    for (let i = 0; i < counter; i++) sum.push(0);
    counter = 0;
    return sum;
  }

  sum[digits.length - 1] = 0;
  counter++;

  sum.pop();

  return plusOne(sum);
}
