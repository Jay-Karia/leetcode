class ProductOfNumbers {
    private prefix: number[];

    constructor() {
        // 1 is the product of an empty prefix.
        this.prefix = [1];
    }

    add(num: number): void {
        if (num === 0) {
            // Ignore all numbers before the zero.
            this.prefix = [1];
        } else {
            this.prefix.push(this.prefix[this.prefix.length - 1] * num);
        }
    }

    getProduct(k: number): number {
        if (k >= this.prefix.length) {
            return 0;
        }

        const lastIndex = this.prefix.length - 1;
        return this.prefix[lastIndex] / this.prefix[lastIndex - k];
    }
}

