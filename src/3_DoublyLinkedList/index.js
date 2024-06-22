class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.length) return;

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let prevNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next;
    }
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
  }

  removeLast() {
    if (!this.tail) return null;

    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return removedNode.val;
  }

  removeFirst() {
    if (!this.head) return null;

    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return removedNode.val;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.removeFirst();
    if (index === this.length - 1) return this.removeLast();

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    const prevNode = currentNode.prev;
    const nextNode = currentNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    return currentNode.val;
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.val === value) return current.val; // Retourner la valeur plutôt que le nœud
      current = current.next;
    }
    return null;
  }

  getFirst() {
    return this.head ? this.head.val : null;
  }

  getLast() {
    return this.tail ? this.tail.val : null;
  }

  getAt(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current ? current.val : null;
  }
}
