function minimumSumSubarray(
	nums: number[],
	l: number,
	r: number,
): number {
	const prefixSums = new Array(nums.length + 1).fill(0);

	for (let i = 0; i < nums.length; i++) {
		prefixSums[i + 1] = prefixSums[i] + nums[i];
	}

	let minimum = Infinity;

	for (let start = 0; start < nums.length; start++) {
		for (
			let end = start + l;
			end <= Math.min(start + r, nums.length);
			end++
		) {
			const sum = prefixSums[end] - prefixSums[start];
			if (sum > 0) {
				minimum = Math.min(minimum, sum);
			}
		}
	}

	return minimum === Infinity ? -1 : minimum;
}
