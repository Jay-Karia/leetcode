function maxDepthAfterSplit(seq: string): number[] {
  let depth = 0;
  return seq.split("").map((value, _) => {
    if (value === "(") {
      ++depth;
      return depth % 2;
    } else {
      let ans = depth % 2;
      --depth;
      return ans;
    }
  });
}

console.log(maxDepthAfterSplit("(()())")); // [0, 1, 1, 1, 1, 0]
console.log(maxDepthAfterSplit("()(())()")); // [0,0,0,1,1,0,1,1]
