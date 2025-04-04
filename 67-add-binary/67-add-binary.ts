function addBinary(a: string, b: string): string {
    let carry = 0;
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        const sum = (parseInt(a[i] || '0') + parseInt(b[j] || '0') + carry);
        result = (sum % 2).toString() + result;
        carry = Math.floor(sum / 2);
        i--;
        j--;
    }

    return result;
};

console.log(addBinary("11", "1")); // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"
