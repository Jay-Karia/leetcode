function maxSelectedElements(nums: number[]): number {
	nums.sort((a, b) => a - b);

	const longestEndingAt = new Map<number, number>();
	let answer = 0;

	for (const value of nums) {
		const currentLength = longestEndingAt.get(value) ?? 0;
		const endingAtValue = (longestEndingAt.get(value - 1) ?? 0) + 1;
		const endingAtIncrementedValue = currentLength + 1;

		longestEndingAt.set(
			value,
			Math.max(currentLength, endingAtValue)
		);
		longestEndingAt.set(
			value + 1,
			Math.max(longestEndingAt.get(value + 1) ?? 0, endingAtIncrementedValue)
		);

		answer = Math.max(
			answer,
			longestEndingAt.get(value) ?? 0,
			longestEndingAt.get(value + 1) ?? 0
		);
	}

	return answer;
}
