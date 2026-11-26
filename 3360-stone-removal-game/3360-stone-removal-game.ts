function canAliceWin(n: number): boolean {
  let remaining = n;
  let required = 10;
  let turn: "alice" | "bob" = "alice";

  while (required > 0) {
    if (remaining < required) return turn === "bob";

    remaining -= required;
    required--;
    turn = turn === "alice" ? "bob" : "alice";
  }

  return turn === "bob";
}

console.log(canAliceWin(12)); // true
console.log(canAliceWin(1)); // false
console.log(canAliceWin(19)); // false
