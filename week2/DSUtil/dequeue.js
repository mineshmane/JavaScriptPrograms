/**
      * @description  : Node function.
      * @param {*} element  : data in node
      */
     function Node(element) {

        this.value = element;
        this.next = null;
    
    }
    /**
      * @description  : Double ended queue function.
      */
    function deque() {
        this.front = null;
        this.rear = null;
    }
    
    /**
          * @description  : Add element in dequeue from front.
          * @param {*} element  : data to add.
          */
    deque.prototype.addFront = function (element) {
        // make new node.
        let node = new Node(element);
        // if dequeue is initially empty.
        if (this.front == null) {
            this.front = node;
            this.rear = node;
        }
        else {
            // add from node in front.
            this.front.next = node;
            this.front = node;
        }
    }
    /**
          * @description  : add element in dequeue from rear.
          * @param {*} N  :number
          */
    deque.prototype.addrear = function (element) {
        // make new node.
        let node = new Node(element);
        // if dequeue is initially empty.
        if (this.front == null) {
            this.front = node;
            this.rear = node;
            // console.log(element + " added");
        }
        else {
            // console.log(element + " added rear");
            node.next = this.rear;
            this.rear = node;
        }
    }
    /**
          * @description  : Remove from rear.
          */
    deque.prototype.removeRear = function () {
        // if dequeue is empty.
        if (this.rear == null) {
            return false;
        }
        // if last element in dequeue is to removed.
        if (this.rear == this.front) {
            let data = this.rear.value;
            this.rear = null;
            this.front = null;
            console.log(data);
            return data;
        }
        // remove from rear.
        else {
            let data = this.rear.value;
            this.rear = this.rear.next;
            //console.log("removed");
            return data;
        }
    }
    /**
          * @description  : Remove from front.
          */
    deque.prototype.removeFront = function () {
        // dequeue is initially empty.
        if (this.front == null) {
            return false;
        }
        // if last element in dequeue is to remove.
        if (this.rear == this.front) {
            let data = this.rear.value;
            this.rear = null;
            this.front = null;
            //console.log(data);
            return data;
        }
        else {
            let data = this.front.value;
            let temp = this.rear;
            while (temp.next != this.front) {
                temp = temp.next;
            }
            this.front = temp;
            this.front.next = null;
           // console.log("removed");
            return data;
        }
    }
    /**
          * @description  : Check if dequeue is empty.
          * @param {*} N  :number
          */
    deque.prototype.isEmpty = function () {
        // if front and rear are null dequeue is empty
        if (this.front == this.rear == null) {
            return true;
        }
        return false;
    }
    /**
          * @description  : print deque.
          */
    deque.prototype.print = function () {
        let temp = this.rear;
        while (temp != null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
    module.exports={
        deque
    }
    