import Node from './node.js';

const removeElements = (head, val) => {
  let newList = null;
  let newListHead = null;
  let current = head;
  while (current) {
    if (current.value !== val) {
      if (newListHead) {
        newList.next = new Node(current.value);
        newList = newList.next;
      } else {
        newList = new Node(current.value);
        newListHead = newList;
      }
    }
    current = current.next;
  }
  return newListHead;
};

export default removeElements;

export const optimizedRemoveElements = (head, val) => {
  let current = head;
  while (current != null && current.value === val) {
    current = current.next;
  }
  let current2 = current;
  while (current2 && current2.next) {
    if (current2.next.value === val) {
      current2.next = current2.next.next;
    } else {
      current2 = current2.next;
    }
  }
  return current;
};
