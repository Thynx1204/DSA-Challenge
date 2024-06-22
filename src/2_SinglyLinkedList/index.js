class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
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
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
  }

  removeLast() {
    if (!this.head) return null;

    if (this.length === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode.val;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    const removedNode = this.tail;
    this.tail = current;
    this.tail.next = null;
    this.length--;
    return removedNode.val;
  }

  removeFirst() {
    if (!this.head) return null;

    const removedNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removedNode.val;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.removeFirst();
    if (index === this.length - 1) return this.removeLast();

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    const removedNode = prev.next;
    prev.next = removedNode.next;
    this.length--;
    return removedNode.val;
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
