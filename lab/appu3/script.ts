// bookRequests.ts

class Queue<T> {
    private items: T[] = [];
  
    enqueue(item: T): void {
      this.items.push(item);
    }
  
    dequeue(): T | undefined {
      return this.items.shift();
    }
  
    peek(): T | undefined {
      return this.items[0];
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    size(): number {
      return this.items.length;
    }
  
    printQueue(): void {
      console.log(this.items);
    }
  }
  
  function manageBookRequests(): void {
    const bookQueue = new Queue<string>();
  
    bookQueue.enqueue("Student A");
    bookQueue.enqueue("Student B");
    bookQueue.enqueue("Student C");
    bookQueue.enqueue("Student D");
  
    console.log("Current Book Request Queue:");
    bookQueue.printQueue();
  
    console.log("Assigning Book to:", bookQueue.dequeue());
    console.log("Assigning Book to:", bookQueue.dequeue());
  
    console.log("Remaining Book Request Queue:");
    bookQueue.printQueue();
  }
  
  manageBookRequests();