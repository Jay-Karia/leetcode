function numOfSubarrays(arr: number[]): number {
	const modulo = 10 ** 9 + 7;
	let evenPrefixCount = 1;
	let oddPrefixCount = 0;
	let prefixParity = 0;
	let result = 0;

	for (const value of arr) {
		prefixParity = (prefixParity + value) % 2;

		if (prefixParity === 0) {
			result = (result + oddPrefixCount) % modulo;
			evenPrefixCount++;
		} else {
			result = (result + evenPrefixCount) % modulo;
			oddPrefixCount++;
		}
	}

	return result;
};
