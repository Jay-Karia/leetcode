function palindromePath(n: number, edges: number[][], s: string, queries: string[]): boolean[] {
	const graph: number[][] = Array.from({ length: n }, () => []);
	for (const [from, to] of edges) {
		graph[from].push(to);
		graph[to].push(from);
	}

	const parent = Array(n).fill(-1);
	const depth = Array(n).fill(0);
	const order: number[] = [0];

	for (let index = 0; index < order.length; index++) {
		const node = order[index];
		for (const neighbor of graph[node]) {
			if (neighbor === parent[node]) continue;
			parent[neighbor] = node;
			depth[neighbor] = depth[node] + 1;
			order.push(neighbor);
		}
	}

	const subtreeSize = Array(n).fill(1);
	const heavyChild = Array(n).fill(-1);
	for (let index = n - 1; index > 0; index--) {
		const node = order[index];
		subtreeSize[parent[node]] += subtreeSize[node];
		if (
			heavyChild[parent[node]] === -1 ||
			subtreeSize[node] > subtreeSize[heavyChild[parent[node]]]
		) {
			heavyChild[parent[node]] = node;
		}
	}

	const head = Array(n).fill(0);
	const position = Array(n).fill(0);
	let currentPosition = 0;
	const chains: [number, number][] = [[0, 0]];

	while (chains.length > 0) {
		const [chainStart, chainHead] = chains.pop()!;
		let node = chainStart;
		while (node !== -1) {
			head[node] = chainHead;
			position[node] = currentPosition++;

			for (const neighbor of graph[node]) {
				if (parent[neighbor] === node && neighbor !== heavyChild[node]) {
					chains.push([neighbor, neighbor]);
				}
			}
			node = heavyChild[node];
		}
	}

	const size = 1 << Math.ceil(Math.log2(Math.max(1, n)));
	const tree = Array(size * 2).fill(0);
	const bit = (character: string) => 1 << (character.charCodeAt(0) - 97);

	for (let node = 0; node < n; node++) tree[size + position[node]] = bit(s[node]);
	for (let index = size - 1; index > 0; index--) {
		tree[index] = tree[index * 2] ^ tree[index * 2 + 1];
	}

	const update = (index: number, value: number) => {
		let treeIndex = size + index;
		tree[treeIndex] = value;
		while (treeIndex > 1) {
			treeIndex >>= 1;
			tree[treeIndex] = tree[treeIndex * 2] ^ tree[treeIndex * 2 + 1];
		}
	};

	const rangeXor = (left: number, right: number) => {
		let result = 0;
		let start = left + size;
		let end = right + size + 1;
		while (start < end) {
			if (start & 1) result ^= tree[start++];
			if (end & 1) result ^= tree[--end];
			start >>= 1;
			end >>= 1;
		}
		return result;
	};

	const pathXor = (from: number, to: number) => {
		let result = 0;
		let first = from;
		let second = to;

		while (head[first] !== head[second]) {
			if (depth[head[first]] < depth[head[second]]) [first, second] = [second, first];
			result ^= rangeXor(position[head[first]], position[first]);
			first = parent[head[first]];
		}

		const left = Math.min(position[first], position[second]);
		const right = Math.max(position[first], position[second]);
		return result ^ rangeXor(left, right);
	};

	const answers: boolean[] = [];
	for (const query of queries) {
		const [operation, firstValue, secondValue] = query.split(" ");
		const firstNode = Number(firstValue);

		if (operation === "update") {
			update(position[firstNode], bit(secondValue));
		} else {
			const mask = pathXor(firstNode, Number(secondValue));
			answers.push((mask & (mask - 1)) === 0);
		}
	}

	return answers;

};
