function shortestPath(n: number, edges: number[][], labels: string, k: number): number {
  if (k < 1) return -1;

  let graph: [number, number][][] = Array.from({ length: n }, () => []);
  for (let [u, v, weight] of edges) {
    graph[u].push([v, weight]);
  }

  type State = [number, number, string, number];
  let queue: State[] = [[0, 0, labels[0], 1]];
  let distances: Map<string, number> = new Map([[`0-${labels[0]}-1`, 0]]);

  const push = (state: State): void => {
    queue.push(state);
    let index = queue.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (queue[parent][0] <= queue[index][0]) break;
      [queue[parent], queue[index]] = [queue[index], queue[parent]];
      index = parent;
    }
  };

  const pop = (): State => {
    let result = queue[0];
    let last = queue.pop()!;
    if (queue.length > 0) {
      queue[0] = last;
      let index = 0;
      while (true) {
        let left = index * 2 + 1;
        let right = left + 1;
        let smallest = index;
        if (left < queue.length && queue[left][0] < queue[smallest][0]) smallest = left;
        if (right < queue.length && queue[right][0] < queue[smallest][0]) smallest = right;
        if (smallest === index) break;
        [queue[index], queue[smallest]] = [queue[smallest], queue[index]];
        index = smallest;
      }
    }
    return result;
  };

  while (queue.length > 0) {
    let [distance, node, char, count] = pop();
    let stateKey = `${node}-${char}-${count}`;
    if (distance !== distances.get(stateKey)) continue;
    if (node === n - 1) return distance;

    for (let [neighbor, weight] of graph[node]) {
      let neighborChar = labels[neighbor];
      let newCount = neighborChar === char ? count + 1 : 1;
      if (newCount > k) continue;

      let newDistance = distance + weight;
      let neighborKey = `${neighbor}-${neighborChar}-${newCount}`;
      if (newDistance < (distances.get(neighborKey) ?? Infinity)) {
        distances.set(neighborKey, newDistance);
        push([newDistance, neighbor, neighborChar, newCount]);
      }
    }
  }

  return -1;
};

console.log(shortestPath(3, [[0,1,1],[1,2,1],[0,2,3]], "aab", 1)) // 3
