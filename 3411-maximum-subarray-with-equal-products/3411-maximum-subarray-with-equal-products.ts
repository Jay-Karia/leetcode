function maxLength(nums: number[]): number {
    if (nums.length === 0) return 0;

    const primeFactors = (value: number): number[] => {
        const factors: number[] = [];

        if (value % 2 === 0) {
            factors.push(2);
            while (value % 2 === 0) value /= 2;
        }

        for (let divisor = 3; divisor * divisor <= value; divisor += 2) {
            if (value % divisor === 0) {
                factors.push(divisor);
                while (value % divisor === 0) value /= divisor;
            }
        }

        if (value > 1) factors.push(value);
        return factors;
    };

    const factorCache = new Map<number, number[]>();
    const getFactors = (value: number): number[] => {
        let factors = factorCache.get(value);
        if (!factors) {
            factors = primeFactors(value);
            factorCache.set(value, factors);
        }
        return factors;
    };

    const counts = new Map<number, number>();
    const repeatedOnce = new Set<number>();
    const repeatedTwice = new Set<number>();
    let left = 0;
    let answer = 1;

    for (let right = 0; right < nums.length; right++) {
        for (const prime of getFactors(nums[right])) {
            const count = (counts.get(prime) ?? 0) + 1;
            counts.set(prime, count);
            if (count > 1) repeatedOnce.add(prime);
            if (count > 2) repeatedTwice.add(prime);
        }

        while (
            repeatedTwice.size > 0 ||
            (right - left + 1 > 2 && repeatedOnce.size > 0)
        ) {
            for (const prime of getFactors(nums[left])) {
                const count = (counts.get(prime) ?? 1) - 1;
                if (count === 0) {
                    counts.delete(prime);
                    repeatedOnce.delete(prime);
                    repeatedTwice.delete(prime);
                } else {
                    counts.set(prime, count);
                    if (count <= 1) repeatedOnce.delete(prime);
                    if (count <= 2) repeatedTwice.delete(prime);
                }
            }
            left++;
        }

        answer = Math.max(answer, right - left + 1);
    }

    return answer;
};
