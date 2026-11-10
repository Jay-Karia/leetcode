function climbStairs(n: number, costs: number[]): number {
	const minimumCost = Array<number>(n + 1).fill(Infinity);
	minimumCost[0] = 0;

	for (let destination = 1; destination <= n; destination++) {
		const firstSource = Math.max(0, destination - 3);

		for (let source = firstSource; source < destination; source++) {
			const jumpLength = destination - source;
			const jumpCost = costs[destination - 1] + jumpLength ** 2;
			minimumCost[destination] = Math.min(
				minimumCost[destination],
				minimumCost[source] + jumpCost,
			);
		}
	}

	return minimumCost[n];
};
