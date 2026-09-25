function merge(groups: any[], words: string | unknown[]) {
  let current = groups[groups.length - 1];

  if (current.length === 0) {
    groups[groups.length - 1] = words;
    return;
  }

  let combined = [];

  for (let a of current) {
    for (let b of words) {
      combined.push(a + b);
    }
  }

  groups[groups.length - 1] = combined;
}

function dfs(start: number, end: number, expression: string): string[]{
  let groups = [[]];
  let depth = 0;
  let left = 0;

  for (let i = start; i <= end; i++) {
    if (expression[i] === "{") {
      depth++;

      if (depth === 1) {
        left = i + 1;
      }
    } else if (expression[i] === "}") {
      depth--;

      if (depth === 0) {
        merge(groups, dfs(left, i - 1, expression));
      }
    } else if (expression[i] === "," && depth === 0) {
      groups.push([]);
    } else if (depth === 0) {
      merge(groups, [expression[i]]);
    }
  }

  let result = new Set();

  for (let group of groups) {
    for (let word of group) {
      result.add(word);
    }
  }

  return Array.from(result) as string[];
}

function braceExpansionII(expression: string): string[] {
  return dfs(0, expression.length - 1, expression).sort() as string[];
}

console.log(braceExpansionII("{a,b}{c,{d,e}}"))
