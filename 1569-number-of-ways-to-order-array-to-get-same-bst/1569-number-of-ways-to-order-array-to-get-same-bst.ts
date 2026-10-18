const mod = 1000000007n;

function modPow(base: bigint, exponent: bigint): bigint {
	let result = 1n;

	while (exponent > 0n) {
		if (exponent & 1n) {
			result = (result * base) % mod;
		}
		base = (base * base) % mod;
		exponent >>= 1n;
	}

	return result;
}

function numOfWays(nums: number[]): number {
	const factorial: bigint[] = new Array(nums.length + 1).fill(1n);
	const inverseFactorial: bigint[] = new Array(nums.length + 1).fill(1n);

	for (let i = 1; i <= nums.length; i++) {
		factorial[i] = (factorial[i - 1] * BigInt(i)) % mod;
	}

	inverseFactorial[nums.length] = modPow(factorial[nums.length], mod - 2n);
	for (let i = nums.length; i > 0; i--) {
		inverseFactorial[i - 1] = (inverseFactorial[i] * BigInt(i)) % mod;
	}

	function combinations(n: number, k: number): bigint {
		return (((factorial[n] * inverseFactorial[k]) % mod) * inverseFactorial[n - k]) % mod;
	}

	function countOrders(values: number[]): [number, bigint] {
		if (values.length <= 2) {
			return [values.length, 1n];
		}

		const root = values[0];
		const left: number[] = [];
		const right: number[] = [];

		for (let i = 1; i < values.length; i++) {
			if (values[i] < root) {
				left.push(values[i]);
			} else {
				right.push(values[i]);
			}
		}

		const [leftSize, leftOrders] = countOrders(left);
		const [rightSize, rightOrders] = countOrders(right);
		const orders = combinations(leftSize + rightSize, leftSize);
		const ways = (((orders * leftOrders) % mod) * rightOrders) % mod;

		return [leftSize + rightSize + 1, ways];
	}

	const [, ways] = countOrders(nums);
	return Number((ways - 1n + mod) % mod);
}
