function sortableIntegers(nums: number[]): number {
	const length = nums.length;
	const sorted = [...nums].sort((first, second) => first - second);
	const bases = [911_382_323, 972_663_749];
	const powers = bases.map(() => new Uint32Array(length + 1));
	const originalHashes = bases.map(() => new Uint32Array(length + 1));
	const sortedHashes = bases.map(() => new Uint32Array(length + 1));

	for (const power of powers) {
		power[0] = 1;
	}

	for (let index = 1; index <= length; index++) {
		for (let hash = 0; hash < bases.length; hash++) {
			powers[hash][index] = Math.imul(powers[hash][index - 1], bases[hash]);
			originalHashes[hash][index] =
				Math.imul(originalHashes[hash][index - 1], bases[hash]) +
				(nums[index - 1] + 1);
			sortedHashes[hash][index] =
				Math.imul(sortedHashes[hash][index - 1], bases[hash]) +
				(sorted[index - 1] + 1);
		}
	}

	const rangeHash = (
		hashes: Uint32Array,
		left: number,
		right: number,
		hash: number,
	) =>
		(hashes[right] - Math.imul(hashes[left], powers[hash][right - left])) >>> 0;

	const descents = new Array<number>(length + 1).fill(0);
	const nextDescent = new Array<number>(length + 1).fill(length);
	for (let index = 1; index < length; index++) {
		descents[index + 1] = descents[index] + (nums[index - 1] > nums[index] ? 1 : 0);
	}
	for (let index = length - 1; index >= 1; index--) {
		nextDescent[index] = nums[index - 1] > nums[index] ? index : nextDescent[index + 1];
	}

	const canSortWithBlockSize = (blockSize: number): boolean => {
		for (let left = 0; left < length; left += blockSize) {
			const right = left + blockSize;
			const descent = nextDescent[left + 1];
			if (descents[right] - descents[left + 1] > 1) {
				return false;
			}

			const rotationStart = descent < right ? descent : right;
			const secondLength = rotationStart - left;

			for (let hash = 0; hash < bases.length; hash++) {
				const firstPart = rangeHash(originalHashes[hash], rotationStart, right, hash);
				const secondPart = rangeHash(originalHashes[hash], left, rotationStart, hash);
				const rotatedHash =
					(Math.imul(firstPart, powers[hash][secondLength]) + secondPart) >>> 0;
				if (rotatedHash !== rangeHash(sortedHashes[hash], left, right, hash)) {
					return false;
				}
			}
		}
		return true;
	};

	let result = 0;
	for (let divisor = 1; divisor * divisor <= length; divisor++) {
		if (length % divisor !== 0) {
			continue;
		}
		if (canSortWithBlockSize(divisor)) {
			result += divisor;
		}
		const pairedDivisor = length / divisor;
		if (pairedDivisor !== divisor && canSortWithBlockSize(pairedDivisor)) {
			result += pairedDivisor;
		}
	}

	return result;
};

console.log(sortableIntegers([3, 1, 2])) // 3
