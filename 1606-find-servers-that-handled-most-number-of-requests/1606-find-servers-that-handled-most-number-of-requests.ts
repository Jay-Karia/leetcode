function busiestServers(k: number, arrival: number[], load: number): number[] {
	const size = 1 << Math.ceil(Math.log2(k));
	const available = new Array(size * 2).fill(k);

	for (let server = 0; server < k; server++) {
		available[size + server] = server;
	}
	for (let node = size - 1; node > 0; node--) {
		available[node] = Math.min(available[node * 2], available[node * 2 + 1]);
	}

	const updateAvailability = (server: number, isAvailable: boolean) => {
		let node = size + server;
		available[node] = isAvailable ? server : k;
		node >>= 1;

		while (node > 0) {
			available[node] = Math.min(available[node * 2], available[node * 2 + 1]);
			node >>= 1;
		}
	};

	const findAvailable = (start: number): number => {
		const findInRange = (left: number, right: number): number => {
			let nodeLeft = left + size;
			let nodeRight = right + size;
			let result = k;

			while (nodeLeft <= nodeRight) {
				if (nodeLeft % 2 === 1) result = Math.min(result, available[nodeLeft++]);
				if (nodeRight % 2 === 0) result = Math.min(result, available[nodeRight--]);
				nodeLeft >>= 1;
				nodeRight >>= 1;
			}

			return result;
		};

		const server = findInRange(start, k - 1);
		return server === k ? findInRange(0, start - 1) : server;
	};

	const busy: [number, number][] = [];

	const pushBusy = (finishTime: number, server: number) => {
		busy.push([finishTime, server]);
		let index = busy.length - 1;

		while (index > 0) {
			const parent = (index - 1) >> 1;
			if (busy[parent][0] <= finishTime) break;
			busy[index] = busy[parent];
			index = parent;
		}

		busy[index] = [finishTime, server];
	};

	const popBusy = (): [number, number] => {
		const first = busy[0];
		const last = busy.pop()!;

		if (busy.length > 0) {
			let index = 0;
			while (index * 2 + 1 < busy.length) {
				let child = index * 2 + 1;
				if (child + 1 < busy.length && busy[child + 1][0] < busy[child][0]) {
					child++;
				}
				if (busy[child][0] >= last[0]) break;
				busy[index] = busy[child];
				index = child;
			}
			busy[index] = last;
		}

		return first;
	};

	const handled = new Array(k).fill(0);

	for (let request = 0; request < arrival.length; request++) {
		while (busy.length > 0 && busy[0][0] <= arrival[request]) {
			const [, server] = popBusy();
			updateAvailability(server, true);
		}

		const server = findAvailable(request % k);
		if (server === k) continue;

		updateAvailability(server, false);
		handled[server]++;
		pushBusy(arrival[request] + load[request], server);
	}

	const busiest = Math.max(...handled);
	return handled.reduce<number[]>((servers, count, server) => {
		if (count === busiest) servers.push(server);
		return servers;
	}, []);
}

export { busiestServers };
