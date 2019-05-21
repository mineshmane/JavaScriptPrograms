class Stack {
    //create a new constructor to create object of item.

    constructor(capacity) {

        this.arr = [capacity];
        this.capacity;
        this.top = -1;
        this.size;

    }
    //push elements into the stack.
    push(element) {
        //Overflow
        if (this.top == (this.capacity - 1)) {
            console.log("Stack overflow");

        }
        else {
            this.arr[this.top++] = element;
            this.size++;
            console.log(" pushing ", element);
        }
    }
    //pop elements from the stack.
    pop() {
        //Underflow
        if (this.top == - 1) {
            return "Underflow";
        }
        var element1 = this.arr[this.top--];
        console.log(" poping elemtn", element1);
        this.size--;
        return element1;
    }
    peek() {
        //Peek top of stack
        console.log(" size", this.size());

        return this.arr[this.capacity - 1];
    }
    isEmpty() {
        //checks if stack is empty are not
        console.log(this.arr.length);
        // return console.log(this.top == null);
        if (this.size == 0) {
            console.log(" empty");

            return true;
        } else {
            return false;
        }
        // return console.log(" emty = ",this.arr.length==0);
    }
    size() {

        return this.size;
    }
    printStack() {
        //print stack 
        var str = "";
        for (var i = 0; i < this.arr.length; i++) {
            str += this.arr[i] + "";
        }
        return str;
    }
}

module.exports = {
    Stack
}

