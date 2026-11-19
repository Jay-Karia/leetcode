function minimizeSum(nums: number[]): number {
	const sorted = [...nums].sort((a, b) => a - b);

	return Math.min(
		sorted[sorted.length - 1] - sorted[2],
		sorted[sorted.length - 2] - sorted[1],
		sorted[sorted.length - 3] - sorted[0],
	);
};
