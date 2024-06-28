export default reverseLinkedList = (head) => {
  let next = null;
  let prev = null;
  let current = head;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
