// bookRequests.ts
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    Queue.prototype.peek = function () {
        return this.items[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.size = function () {
        return this.items.length;
    };
    Queue.prototype.printQueue = function () {
        console.log(this.items);
    };
    return Queue;
}());
function manageBookRequests() {
    var bookQueue = new Queue();
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
