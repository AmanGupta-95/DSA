const linkedListMiddleValue = (head) => {
  let current = head;
  let len = 0;
  while (current) {
    current = current.next;
    len++;
  }
  current = head;
  let i = 0;
  const midIndex = Math.floor(len / 2);
  while (i < midIndex) {
    current = current.next;
    i++;
  }

  return current.value;
};

export default linkedListMiddleValue;
