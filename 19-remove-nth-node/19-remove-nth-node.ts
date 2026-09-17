class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next;
  }

  let previous = dummy;
  for (let i = 0; i < length - n; i++) {
    previous = previous.next!;
  }

  previous.next = previous.next!.next;
  return dummy.next;
}

// console.log(
//   removeNthFromEnd(
//     new ListNode(
//       1,
//       new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
//     ),
//     2
//   )
// );

// console.log(removeNthFromEnd(new ListNode(1), 1));

console.log(removeNthFromEnd(new ListNode(1, new ListNode(2)), 1));
