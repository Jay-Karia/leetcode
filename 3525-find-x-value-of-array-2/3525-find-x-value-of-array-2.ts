function resultArray(nums: number[], k: number, queries: number[][]): number[] {
    const n = nums.length;
    const treeProd = new Int32Array(4 * n);
    const treeFreq: Int32Array[] = Array.from({ length: 4 * n }, () => new Int32Array(k));

    function build(v: number, tl: number, tr: number): void {
        if (tl === tr) {
            treeProd[v] = nums[tl] % k;
            treeFreq[v][treeProd[v]] = 1;
            return;
        }
        const tm = (tl + tr) >> 1;
        build(v << 1, tl, tm);
        build(v << 1 | 1, tm + 1, tr);

        const pL = treeProd[v << 1], fL = treeFreq[v << 1];
        const pR = treeProd[v << 1 | 1], fR = treeFreq[v << 1 | 1];
        treeProd[v] = (pL * pR) % k;
        const fRes = treeFreq[v];
        fRes.fill(0);
        for (let i = 0; i < k; i++) fRes[i] = fL[i];
        for (let r = 0; r < k; r++) {
            if (fR[r]) {
                const nr = (pL * r) % k;
                fRes[nr] += fR[r];
            }
        }
    }

    function update(v: number, tl: number, tr: number, pos: number, val: number): void {
        if (tl === tr) {
            treeProd[v] = val % k;
            treeFreq[v].fill(0);
            treeFreq[v][treeProd[v]] = 1;
            return;
        }
        const tm = (tl + tr) >> 1;
        if (pos <= tm) update(v << 1, tl, tm, pos, val);
        else update(v << 1 | 1, tm + 1, tr, pos, val);

        const pL = treeProd[v << 1], fL = treeFreq[v << 1];
        const pR = treeProd[v << 1 | 1], fR = treeFreq[v << 1 | 1];
        treeProd[v] = (pL * pR) % k;
        const fRes = treeFreq[v];
        fRes.fill(0);
        for (let i = 0; i < k; i++) fRes[i] = fL[i];
        for (let r = 0; r < k; r++) {
            if (fR[r]) {
                const nr = (pL * r) % k;
                fRes[nr] += fR[r];
            }
        }
    }

    function query(v: number, tl: number, tr: number, l: number, r: number, outFreq: Int32Array, outProd: Int32Array): void {
        if (l > r) {
            outProd[0] = 1;
            outFreq.fill(0);
            return;
        }
        if (l === tl && r === tr) {
            outProd[0] = treeProd[v];
            outFreq.set(treeFreq[v]);
            return;
        }
        const tm = (tl + tr) >> 1;
        const leftFreq = new Int32Array(k);
        const rightFreq = new Int32Array(k);
        const leftProd = new Int32Array(1);
        const rightProd = new Int32Array(1);

        query(v << 1, tl, tm, l, Math.min(r, tm), leftFreq, leftProd);
        query(v << 1 | 1, tm + 1, tr, Math.max(l, tm + 1), r, rightFreq, rightProd);

        outProd[0] = (leftProd[0] * rightProd[0]) % k;
        outFreq.fill(0);
        for (let i = 0; i < k; i++) outFreq[i] = leftFreq[i];
        for (let rr = 0; rr < k; rr++) {
            if (rightFreq[rr]) {
                const nr = (leftProd[0] * rr) % k;
                outFreq[nr] += rightFreq[rr];
            }
        }
    }

    build(1, 0, n - 1);

    const ans: number[] = new Array(queries.length);
    const tempFreq = new Int32Array(k);
    const tempProd = new Int32Array(1);

    for (let i = 0; i < queries.length; i++) {
        const [idx, val, start, x] = queries[i];
        update(1, 0, n - 1, idx, val);
        query(1, 0, n - 1, start, n - 1, tempFreq, tempProd);
        ans[i] = tempFreq[x];
    }
    return ans;
}

console.log(resultArray([1,2,3,4,5], 3, [[2,2,0,2],[3,3,3,0],[0,1,0,1]])) // 2
