const MOD: bigint = BigInt(1e9 + 7);
const MX: number = 100000;

const fact: bigint[] = new Array(MX).fill(0n);
const invFact: bigint[] = new Array(MX).fill(0n);
let built: boolean = false;

function qpow(x: number | bigint, n: number | bigint): bigint {
    x = BigInt(x);
    n = BigInt(n);
    let res = 1n;
    while (n > 0n) {
        if (n & 1n) {
            res = (res * x) % MOD;
        }
        x = (x * x) % MOD;
        n >>= 1n;
    }
    return res;
}

function init(): void {
    if (fact[0] != 0n) {
        return;
    }
    fact[0] = 1n;
    for (let i = 1; i < MX; i++) {
        fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
    }

    invFact[MX - 1] = qpow(fact[MX - 1], MOD - 2n);
    for (let i = MX - 2; i >= 0; i--) {
        invFact[i] = (invFact[i + 1] * BigInt(i + 1)) % MOD;
    }
}

function comb(n: number, m: number): bigint {
    if (m < 0 || m > n) {
        return 0n;
    }
    return (((fact[n] * invFact[m]) % MOD) * invFact[n - m]) % MOD;
}

function countGoodArrays(n: number, m: number, k: number): number {
    init();
    let res = comb(n - 1, k);
    res = (res * BigInt(m)) % MOD;
    res = (res * qpow(m - 1, n - k - 1)) % MOD;
    return Number(res);
}

console.log(countGoodArrays(3, 3, 1)); // Output: 4
console.log(countGoodArrays(4, 2, 2)); // Output: 6
console.log(countGoodArrays(5, 2, 0)); // Output: 2
