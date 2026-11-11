function minimumCost(
	cost1: number,
	cost2: number,
	costBoth: number,
	need1: number,
	need2: number,
): number {
	const minimumBoth = Math.min(need1, need2);
	const maximumBoth = Math.max(need1, need2);

	const costWithBoth = (bothItems: number): number =>
		bothItems * costBoth +
		Math.max(0, need1 - bothItems) * cost1 +
		Math.max(0, need2 - bothItems) * cost2;

	return Math.min(
		costWithBoth(0),
		costWithBoth(minimumBoth),
		costWithBoth(maximumBoth),
	);
}
