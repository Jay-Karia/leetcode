function smallestUniqueSubarray(nums: number[]): number {
	const states: {
		length: number;
		link: number;
		next: Map<number, number>;
		occurrences: number;
	}[] = [{ length: 0, link: -1, next: new Map(), occurrences: 0 }];
	let last = 0;

	for (const value of nums) {
		const current = states.length;
		states.push({
			length: states[last].length + 1,
			link: 0,
			next: new Map(),
			occurrences: 1,
		});

		let previous = last;
		while (previous >= 0 && !states[previous].next.has(value)) {
			states[previous].next.set(value, current);
			previous = states[previous].link;
		}

		if (previous < 0) {
			states[current].link = 0;
		} else {
			const target = states[previous].next.get(value)!;
			if (states[previous].length + 1 === states[target].length) {
				states[current].link = target;
			} else {
				const clone = states.length;
				states.push({
					length: states[previous].length + 1,
					link: states[target].link,
					next: new Map(states[target].next),
					occurrences: 0,
				});

				while (
					previous >= 0 &&
					states[previous].next.get(value) === target
				) {
					states[previous].next.set(value, clone);
					previous = states[previous].link;
				}

				states[target].link = clone;
				states[current].link = clone;
			}
		}

		last = current;
	}

	const lengthCounts = new Array(nums.length + 1).fill(0);
	for (const state of states) lengthCounts[state.length]++;
	for (let length = 1; length <= nums.length; length++) {
		lengthCounts[length] += lengthCounts[length - 1];
	}

	const order = new Array(states.length);
	for (let state = states.length - 1; state >= 0; state--) {
		order[--lengthCounts[states[state].length]] = state;
	}

	for (let index = order.length - 1; index > 0; index--) {
		const state = states[order[index]];
		states[state.link].occurrences += state.occurrences;
	}

	let answer = nums.length + 1;
	for (let state = 1; state < states.length; state++) {
		if (states[state].occurrences === 1) {
			answer = Math.min(answer, states[states[state].link].length + 1);
		}
	}

	return answer;
};
