
function resultArray (nums: number[], k: number): number[] {
    const ans = new Array(k).fill(0);
    let dp = new Array(k).fill(0);

    for (const num of nums) {
        const x = num % k;
        const next = new Array(k).fill(0);
        next[x]++;

        for (let r = 0; r < k; r++) {
            const newR = (r * x) % k;
            next[newR] += dp[r];
        }

        for (let r = 0; r < k; r++) {
            ans[r] += next[r];
        }
        dp = next;
    }
    return ans;
};

console.log(resultArray([1, 2, 3, 4, 5], 3)) // [9, 2, 4]
console.log(resultArray([1, 2, 4, 8, 16, 32], 4)) // [18, 1, 2, 0]
console.log(resultArray([1, 1, 2, 1, 1], 2)) // [9, 6]
console.log(resultArray([78,71,26,24,81,51,46,29,45,77,83,72,79,74,8,34,49,63,69,39,81,61,88,35,59,45,21,72,98,10,48,34,3,11,16,50,53,21,83,96,53,5,94], 5)) // [767,46,33,49,51]
