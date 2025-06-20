function maxDistance(s: string, k: number): number {
  let latitude = 0,
      longitude = 0,
      ans = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
      switch (s[i]) {
          case "N":
              latitude++;
              break;
          case "S":
              latitude--;
              break;
          case "E":
              longitude++;
              break;
          case "W":
              longitude--;
              break;
      }
      ans = Math.max(
          ans,
          Math.min(Math.abs(latitude) + Math.abs(longitude) + k * 2, i + 1),
      );
  }
  return ans;
}

console.log(maxDistance("NWSE", 1)); // 3
console.log(maxDistance("NSWWEW", 3)); // 6
