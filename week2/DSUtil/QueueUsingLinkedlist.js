class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class QueueList {

    constructor() {
        this.head = null;
        this.arr = [];
        this.rear = 1;
        this.front = 1;

        this.size = 0;
    }

    enqueue(data) {
        var node = new Node(data);
        this.arr[this.rear] = data;
        this.rear++;
        this.size++;


        // ;// Creating object to node inner class

        // this.size++;
        // if (this.rear == null) {
        //     this.front = node;// Making node as front
        //     this.rear = node; // Making node as rear
        // }

        // this.rear = node;
        // this.rear.next = node.next;// Changing reference value
    }
    deque() {
        var deletedData = this.arr[this.front];
        delete this.arr[this.front];
        this.front++;
        this.size--;
        console.log(deletedData, " deleted ");

        return deletedData;

    }
    show() {
        for (var i = 0; i < this.size; i++) {
            console.log(this.arr[this.front + i] + " ");
        }

        console.log();

    }
    sizeOfQue() {
        console.log(" size of queue is: ", this.size);

    }

    isEmpty() {
        if (this.size == 0) {
            console.log(" queue is empty");

        }
        else {
            console.log(" not empty queue");

        }
        // return size == 0;
    }


} module.exports = {
    QueueList
}
