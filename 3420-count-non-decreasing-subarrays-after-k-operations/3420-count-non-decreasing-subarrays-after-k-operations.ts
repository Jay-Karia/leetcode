function countNonDecreasingSubarrays(nums: number[], k: number): number {
	const n = nums.length;
	const prefixSums = new Array<number>(n + 1).fill(0);

	for (let index = 0; index < n; index++) {
		prefixSums[index + 1] = prefixSums[index] + nums[index];
	}

	const nextGreater = new Array<number>(n).fill(n);
	const stack: number[] = [];

	for (let index = n - 1; index >= 0; index--) {
		while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[index]) {
			stack.pop();
		}

		if (stack.length > 0) {
			nextGreater[index] = stack[stack.length - 1];
		}

		stack.push(index);
	}

	const levels = Math.ceil(Math.log2(n + 1));
	const jumps: number[][] = [nextGreater];
	const jumpCosts: number[][] = [
		nextGreater.map((nextIndex, index) => nums[index] * (nextIndex - index)),
	];

	for (let level = 1; level < levels; level++) {
		const previousJumps = jumps[level - 1];
		const previousCosts = jumpCosts[level - 1];
		const currentJumps = new Array<number>(n);
		const currentCosts = new Array<number>(n);

		for (let index = 0; index < n; index++) {
			const middle = previousJumps[index];

			if (middle === n) {
				currentJumps[index] = n;
				currentCosts[index] = previousCosts[index];
			} else {
				currentJumps[index] = previousJumps[middle];
				currentCosts[index] = previousCosts[index] + previousCosts[middle];
			}
		}

		jumps.push(currentJumps);
		jumpCosts.push(currentCosts);
	}

	const requiredOperations = (left: number, right: number): number => {
		let current = left;
		let raisedSum = 0;

		for (let level = levels - 1; level >= 0; level--) {
			const next = jumps[level][current];

			if (next <= right) {
				raisedSum += jumpCosts[level][current];
				current = next;
			}
		}

		raisedSum += nums[current] * (right - current + 1);
		return raisedSum - (prefixSums[right + 1] - prefixSums[left]);
	};

	let answer = 0;

	for (let left = 0; left < n; left++) {
		let low = left;
		let high = n - 1;

		while (low <= high) {
			const middle = Math.floor((low + high) / 2);

			if (requiredOperations(left, middle) <= k) {
				low = middle + 1;
			} else {
				high = middle - 1;
			}
		}

		answer += high - left + 1;
	}

	return answer;
};
