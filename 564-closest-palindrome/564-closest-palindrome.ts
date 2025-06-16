function nearestPalindromic(n: string): string {
  const num = BigInt(n);
  const len = n.length;

  // Edge cases
  if (len === 1) {
    return (num - 1n).toString();
  }

  // Generate candidates
  const candidates: bigint[] = [];

  // Candidate 1: 10...01 (one more digit)
  candidates.push(10n ** BigInt(len) + 1n);

  // Candidate 2: 99...99 (one fewer digit)
  candidates.push(10n ** BigInt(len - 1) - 1n);

  // Candidate 3, 4, 5: Mirror the first half (and +1, -1 to middle digit if needed)
  const halfLen = Math.floor(len / 2);
  const prefix = n.substring(0, len - halfLen);
  const prefixNum = BigInt(prefix);

  for (const adjustedPrefix of [prefixNum - 1n, prefixNum, prefixNum + 1n]) {
    let palindromeStr = adjustedPrefix.toString();

    // Fix for odd-length numbers
    if (len % 2 === 0) {
      // Even-length: mirror the entire prefix
      palindromeStr += [...palindromeStr].reverse().join("");
    } else {
      // Odd-length: mirror all but the middle digit
      palindromeStr += [...palindromeStr.slice(0, -1)].reverse().join("");
    }

    candidates.push(BigInt(palindromeStr));
  }

  // Find the closest candidate
  let closest = 0n;
  let minDiff = BigInt(Number.MAX_SAFE_INTEGER);

  for (const candidate of candidates) {
    // Skip if candidate is the same as original number
    if (candidate === num) continue;

    const diff = candidate > num ? candidate - num : num - candidate;
    // In case of a tie, select the smaller palindrome
    if (diff < minDiff || (diff === minDiff && candidate < closest)) {
      closest = candidate;
      minDiff = diff;
    }
  }

  return closest.toString();
}

console.log(nearestPalindromic("123")); // Expected output: "121"
console.log(nearestPalindromic("1")); // Expected output: "0"
console.log(nearestPalindromic("9")); // Expected output: "8"
console.log(nearestPalindromic("10")); // Expected output: "9"
console.log(nearestPalindromic("11")); // Expected output: "9"
console.log(nearestPalindromic("1213"));
console.log(nearestPalindromic("807045053224792883"));
