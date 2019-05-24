class Node {
    constructor(data,next) {
        this.data = data;
        this.next = next;
    }
}
class StackList {

    constructor() {
        this.head = null;
        this.arr = [];
        this.top = 1;
        this.size = 0;
    }
    push(data) {
        // var node = new Node(data);
        // this.arr[this.top] = node;
        // this.top++;

        var node = new Node();//Creating object to node class
        this.size++;
        if (node == null)//Checking wheather the node is empty or not
        {
            System.out.println("Stack overflow");
            return;
        }
        node.data = data;// Storing data
        node.next = this.top;//changing the reference value
        this.top = node;
    }

    pop() {
        if (this.top == null)//Checking wheather the top is null or not
        {
            console.log("Stack underflow");
            return null;
        }
        var dat = this.top.data;
        this.top = (this.top).next;
        return dat;


        // var deelt = this.arr[this.top];
        // this.top--;

        // return deelt;

    }
    isEmpty() {
        return this.top == 0;
    }
    show() {


        console.log(this.top);

        // for (var i = this.size; i < 1; i++) {
        //     console.log(this.arr[d + i] + " ");
        // }

        console.log();

    }
}
module.exports = {
    StackList
}