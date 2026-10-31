function uniquePaths(grid: number[][]): number {
	const mod = 1_000_000_007;
	const m = grid.length;
	const n = grid[0].length;

	const paths = Array.from({ length: m }, () => Array(n).fill(0));
	paths[0][0] = 1;

	const addPath = (row: number, col: number, rowStep: number, colStep: number, count: number) => {
		while (true) {
			row += rowStep;
			col += colStep;

			if (row < 0 || row >= m || col < 0 || col >= n) return;
			if (row === m - 1 && col === n - 1) {
				paths[row][col] = (paths[row][col] + count) % mod;
				return;
			}
			if (grid[row][col] === 0) {
				paths[row][col] = (paths[row][col] + count) % mod;
				return;
			}

			[rowStep, colStep] = [colStep, rowStep];
		}
	};

	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			if (paths[row][col] === 0 || (row === m - 1 && col === n - 1)) continue;

			addPath(row, col, 0, 1, paths[row][col]);
			addPath(row, col, 1, 0, paths[row][col]);
		}
	}

	return paths[m - 1][n - 1];
};
