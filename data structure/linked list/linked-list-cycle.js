// my solution
export default hasCycle = (head) => {
  const set = new Set();
  let current = head;
  while (current) {
    if (set.has(current)) {
      return true;
    } else {
      set.add(current);
    }
    current = current.parent;
  }
  return false;
};

// Floyds cycle algorithm
const hasCycle2 = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    while (slow === fast) {
      return true;
    }
  }
  return false;
};
