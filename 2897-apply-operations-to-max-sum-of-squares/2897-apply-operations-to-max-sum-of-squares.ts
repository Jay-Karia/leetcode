function maxSum(nums: number[], k: number): number {
    const MOD = 1000000007;
    const cnt: number[] = new Array(30).fill(0);

    for (const num of nums) {
        for (let i = 0; i < 30; i++) {
            if (num & (1 << i)) {
                cnt[i]++;
            }
        }
    }

    let res = 0;
    for (let i = 0; i < k; i++) {
        let cur = 0;
        for (let j = 29; j >= 0; j--) {
            if (cnt[j] > 0) {
                cur += Math.pow(2, j);
                cnt[j]--;
            }
        }

        const curBigInt = BigInt(cur);
        res = Number((BigInt(res) + curBigInt * curBigInt) % BigInt(MOD));
    }

    return res;
}

console.log(maxSum([2, 6, 5, 8], 2)); // 261
console.log(maxSum([4, 5, 4, 7], 3)); // 90
