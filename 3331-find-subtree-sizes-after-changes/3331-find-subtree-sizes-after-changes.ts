function findSubtreeSizes(parent: number[], s: string): number[] {
    const n = parent.length;

    const originalChildren: number[][] = Array.from({ length: n }, () => []);
    for (let node = 1; node < n; node++) {
        originalChildren[parent[node]].push(node);
    }

    const finalParent = parent.slice();
    const closestAncestor = new Map<string, number>();

    // Traverse the original tree so that simultaneous changes are based only
    // on ancestors in the original tree, not in the tree being rewritten.
    const traversal: [number, boolean, number | undefined][] = [[0, false, undefined]];

    while (traversal.length > 0) {
        const [node, isExit, previous] = traversal.pop()!;

        if (isExit) {
            if (previous === undefined) {
                closestAncestor.delete(s[node]);
            } else {
                closestAncestor.set(s[node], previous);
            }
            continue;
        }

        const char = s[node];
        const matchingAncestor = closestAncestor.get(char);
        if (node !== 0 && matchingAncestor !== undefined) {
            finalParent[node] = matchingAncestor;
        }

        const previousForChar = matchingAncestor;
        closestAncestor.set(char, node);
        traversal.push([node, true, previousForChar]);

        for (let i = originalChildren[node].length - 1; i >= 0; i--) {
            traversal.push([originalChildren[node][i], false, undefined]);
        }
    }

    const finalChildren: number[][] = Array.from({ length: n }, () => []);
    for (let node = 1; node < n; node++) {
        finalChildren[finalParent[node]].push(node);
    }

    const answer = new Array<number>(n).fill(1);
    const subtreeTraversal: [number, boolean][] = [[0, false]];

    while (subtreeTraversal.length > 0) {
        const [node, isExit] = subtreeTraversal.pop()!;

        if (isExit) {
            for (const child of finalChildren[node]) {
                answer[node] += answer[child];
            }
            continue;
        }

        subtreeTraversal.push([node, true]);
        for (let i = finalChildren[node].length - 1; i >= 0; i--) {
            subtreeTraversal.push([finalChildren[node][i], false]);
        }
    }

    return answer;
};
