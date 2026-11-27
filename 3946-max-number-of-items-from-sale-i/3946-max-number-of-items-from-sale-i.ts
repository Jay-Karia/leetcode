function maximumSaleItems(items: number[][], budget: number): number {
	let dp = Array(budget + 1).fill(Number.NEGATIVE_INFINITY);
	dp[0] = 0;

	for (let i = 0; i < items.length; i++) {
		const [factor, price] = items[i];
		let freeCopies = 0;

		for (let j = 0; j < items.length; j++) {
			if (i !== j && items[j][0] % factor === 0) freeCopies++;
		}

		const next = dp.slice();

		for (let remainder = 0; remainder < price && remainder <= budget; remainder++) {
			let best = Number.NEGATIVE_INFINITY;

			for (let spent = remainder; spent <= budget; spent += price) {
				const copies = (spent - remainder) / price;

				if (copies > 0 && dp[spent - price] !== Number.NEGATIVE_INFINITY) {
					best = Math.max(best, dp[spent - price] - (copies - 1));
				}

				if (best !== Number.NEGATIVE_INFINITY) {
					next[spent] = Math.max(next[spent], copies + freeCopies + best);
				}
			}
		}

		dp = next;
	}

	return Math.max(...dp);
}
