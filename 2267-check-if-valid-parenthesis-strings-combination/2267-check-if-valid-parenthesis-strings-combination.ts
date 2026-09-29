// function hasValidPath(grid: string[][]): boolean {
//     let valid = false;
//     const m = grid.length;
//     const n = grid[0].length;

//     for (let i = 0; i < m; i++) {
//       let line = "";
//       for (let j = 0; j < n; j++) {
//         line+= grid[i][j] + " "
//       }
//       console.log(line)
//     }

//     return valid;
// };

function hasValidPath(grid: string[][]): boolean {
    const n = grid.length;
    const m = grid[0].length;
    const pathLength = n + m - 1;

    if (pathLength % 2 === 1) {
        return false;
    }
    if (grid[0][0] !== "(" || grid[n - 1][m - 1] !== ")") {
        return false;
    }

    const dp = Array.from({ length: n }, () => new Array(m).fill(0n));

    dp[0][0] = 1n << 1n;

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            const change = grid[i][j] === "(" ? 1 : -1;

            if (i > 0) {
                if (change === 1) {
                    dp[i][j] |= dp[i - 1][j] << 1n;
                } else {
                    dp[i][j] |= dp[i - 1][j] >> 1n;
                }
            }

            if (j > 0) {
                if (change === 1) {
                    dp[i][j] |= dp[i][j - 1] << 1n;
                } else {
                    dp[i][j] |= dp[i][j - 1] >> 1n;
                }
            }
        }
    }

    return (dp[n - 1][m - 1] & 1n) !== 0n;
};

console.log(hasValidPath([["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]])) // true
// console.log(hasValidPath([[")",")"],["(","("]])) // false
