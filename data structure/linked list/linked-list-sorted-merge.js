export default mergeSortedList = (head1, head2) => {
  if (!head1 && !head2) return null;
  const mergeList = new ListNode();
  let prev = mergeList;
  let current1 = head1;
  let current2 = head2;
  while (current1 && current2) {
    if (current1.val <= current2.val) {
      prev.next = current1;
      prev = prev.next;
      current1 = current1.next;
    } else {
      prev.next = current2;
      prev = prev.next;
      current2 = current2.next;
    }
  }

  if (current1) prev.next = current1;
  if (current2) prev.next = current2;

  return mergeList.next;
};
