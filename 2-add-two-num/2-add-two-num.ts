class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers( l1: ListNode | null, l2: ListNode | null ): ListNode | null {
  let num1: string = "";
  let num2: string = "";

  while (l1 !== null) {
    num1 = l1.val + num1;
    l1 = l1.next;
  }
  while (l2 !== null) {
    num2 = l2.val + num2;
    l2 = l2.next;
  }
  const sum: string[] = (BigInt(num1) + BigInt(num2)).toString().split("").reverse().join("").split("");

  // Create a new ListNode to return the result
  let current: ListNode | null = null;
  for (let i = sum.length - 1; i >= 0; i--) {
    current = new ListNode(Number(sum[i]), current);
  }
  return current;
}

console.log(addTwoNumbers(
  new ListNode(2, new ListNode(4, new ListNode(3))),
  new ListNode(5, new ListNode(6, new ListNode(4))))
)
