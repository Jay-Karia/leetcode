function countServers(n: number, logs: number[][], x: number, queries: number[]): number[] {
	const sortedLogs = [...logs].sort((first, second) => first[1] - second[1]);
	const sortedQueries = queries
		.map((query, index) => [query, index])
		.sort((first, second) => first[0] - second[0]);
	const activeServers = new Map<number, number>();
	const result = Array.from({ length: queries.length }, () => n);
	let left = 0;
	let right = 0;

	for (const [query, index] of sortedQueries) {
		while (right < sortedLogs.length && sortedLogs[right][1] <= query) {
			const serverId = sortedLogs[right][0];
			activeServers.set(serverId, (activeServers.get(serverId) ?? 0) + 1);
			right++;
		}

		while (left < right && sortedLogs[left][1] < query - x) {
			const serverId = sortedLogs[left][0];
			const requestCount = activeServers.get(serverId)! - 1;

			if (requestCount === 0) {
				activeServers.delete(serverId);
			} else {
				activeServers.set(serverId, requestCount);
			}
			left++;
		}

		result[index] = n - activeServers.size;
	}

	return result;
};
