class QNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const temp = new QNode(value);
    if (this.rear === null) {
      this.front = this.rear = temp;
      return;
    }

    this.rear.next = temp;
    this.rear = temp;
  }

  dequeue() {
    if (this.front === null) {
      return null;
    }

    const temp = this.front;
    this.front = this.front.next;

    if (this.front === null) {
      this.rear = null;
    }

    return temp.value;
  }

  peek() {
    if (this.front === null) {
      return null;
    }
    return this.front.value;
  }
}
