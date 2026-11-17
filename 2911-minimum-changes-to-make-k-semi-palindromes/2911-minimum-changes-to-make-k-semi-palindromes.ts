function minimumChanges(s: string, k: number): number {
	const n = s.length;
	const changes = Array.from({ length: n }, () => Array(n).fill(Infinity));

	for (let start = 0; start < n; start++) {
		for (let length = 2; start + length <= n; length++) {
			let best = Infinity;

			for (let divisor = 1; divisor < length; divisor++) {
				if (length % divisor !== 0) {
					continue;
				}

				let mismatches = 0;
				for (let offset = 0; offset < divisor; offset++) {
					let left = offset;
					let right = offset + Math.floor((length - 1 - offset) / divisor) * divisor;

					while (left < right) {
						if (s[start + left] !== s[start + right]) {
							mismatches++;
						}
						left += divisor;
						right -= divisor;
					}
				}

				best = Math.min(best, mismatches);
			}

			changes[start][start + length - 1] = best;
		}
	}

	const dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(Infinity));
	dp[0][0] = 0;

	for (let parts = 1; parts <= k; parts++) {
		for (let end = 2 * parts; end <= n; end++) {
			for (let start = 2 * (parts - 1); start <= end - 2; start++) {
				dp[parts][end] = Math.min(
					dp[parts][end],
					dp[parts - 1][start] + changes[start][end - 1],
				);
			}
		}
	}

	return dp[k][n];
};

console.log(minimumChanges("abcac", 2));
