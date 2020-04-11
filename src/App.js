import React from "react";
import "./styles.css";

class Queue {
  constructor() {
    this.first = [];
    this.last = [];
  }
  enqueue(value) {
    const length = this.first.length;
    for (i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }
  dequeue() {
    const length = this.last.length;
    for (i = 0; i < length; i++) {
      this.first.push(this.first.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      console.log(this.last[0]);
      return this.last[0];
    }
    console.log(this.first[this.length - 1]);
    return this.first[this.length - 1];
  }
}

const myQueue = new Queue();

myQueue.enqueue("hello world");
myQueue.enqueue("hello");
myQueue.enqueue("hello weee");
myQueue.enqueue("hello there");
myQueue.dequeue("hello there");
console.log(myQueue);

export default function App() {
  return <div className="App" />;
}
