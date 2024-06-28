export default class Node {
  constructor(val, nextNode = null) {
    this.value = val;
    this.next = nextNode;
  }
}
