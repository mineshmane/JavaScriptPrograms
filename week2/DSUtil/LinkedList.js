class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {

        let node = new Node();
        node.data = data;


        if (this.head == null) {
            this.head = node;
            this.size++;
            return;
        } else {

            let curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
            this.size++;
            curr.next = node;
        }
    }

    insertAtFirst(data) {
        let insertNode = new Node(data);
        if (this.head == null) {
            this.head = insertNode;
            this.size++;
            return;
        }
        else {
            insertNode.next = this.head;
            this.head = insertNode;
            this.size++;
            return;
        }
    }
    insertAtMiddle(data) {

        
        var newNode=new Node();
		newNode.data=data;
		this.size++;
		 // if list is empty 
        if (this.head == null) 
        this.head = newNode;
  
        else { 
            // get a new node 
            //Node newNode = New Node(); 
  
            // assign values to the slow  
            // and fast pointers 
            var slow = this.head; 
            var fast = this.head.next; 
  
            while (fast != null && fast.next!= null)  
            { 
                // move slow pointer to next node 
                slow = slow.next; 
  
                // move fast pointer two nodes  
                // at a time 
                fast = fast.next.next; 
            } 
  
            // insert the 'newNode' and adjust  
            // the required links 
            newNode.next = slow.next; 
            slow.next = newNode; 
        } 
		

    }

    insertAtPosition(index, data) {
        // if (index == 1) {
        //     this.insertFirst(data);
        //     return;
        // }
        // if (this.head == null) {
        //     return;
        // }
        if (this.head != null && index == 0) {
            this.insertFirst(data);
            return;
        }
        if (this.head == null && index != 0) {
            console.log("List is empty");
            return;
        }

        var temp = new Node(data);
        var count = 0, pre = this.head, current = this.head;
        while (current) {
            if (count == index - 1) {
                pre.next = temp;
                temp.next = current;
                this.size++;
                return;
            }
            count++;
            pre = current;
            current = current.next;
        }
        return false;
    }
    size() {
        return this.size;
    }

    deleteFirst() {
        if (this.head == null) {

            this.isEmpty();
            return;
        }
        var temp = this.head.data;
        this.head = this.head.next;
        this.size--;
        return temp;
    }

    pop() {
        if (this.head == null) {
            this.isEmpty();
            return;
        }
        if (this.head.next == null) {
            this.head = null;
            return;
        }
        var curr = this.head;
        var pre = this.head;
        while (curr.next != null) {
            pre = curr;
            curr = curr.next;
        }
        pre.next = null;
        this.size--;
        return curr.data;

    }

    popIndex(index) {
        if (index < 0) {
            this.isEmpty();

            return false;
        }
        else if (index == 1) {
            this.deleteFirst();
            return;
        }
        var curr = this.head, pre = curr, c = 0;
        while (curr) {
            if (c == index - 1) {
                pre.next = curr.next;
                this.size--;
                return curr.data;

            }
            c++;
            pre = curr;
            curr = curr.next;
        }
        return null;
    }


    remove(data) {

        var curr = this.head;
        if (curr.data == data) {
            this.deleteFirst();
            return;
        }
        var pre = curr;
        while (curr) {
            if (curr.data == data) {
                pre.next = curr.next;
                this.size--;
                return curr.data;

            }

            pre = curr;
            curr = curr.next;
        }
        return false;
    }

    search(item) {
        if (this.head == null) {
            return false;
        }
        var curr = this.head;
        while (curr) {
            if (curr.data == item) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    isEmpty() {
        if (this.size == 0) {
            console.log("List is empty");
            return true;
        }

        return false;
    }

    sizeOfList() {
        return this.size;
    }

    displayQueue() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str = str + curr.data + " ";
            if (curr.next != null) {
                str = str + " ";
            }
            curr = curr.next;
        }
        return str;
    }

    show() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str = str + curr.data + " ";
            if (curr.next != null) {
                str = str + "  ";
            }
            curr = curr.next;
        }
        console.log(str);
        return str;



    }
    getData() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str = str + curr.data;
            if (curr.next != null) {
                str = str + " ";
            }
            curr = curr.next;
        }
        return str;
    }
    insertionSort(data) {
        let temp1 = 0;
        for (let i = 1; i < data.length; i++) {
            for (let j = i - 1; j < i && j >= 0; j--) {
                if (parseInt(data[j]) > parseInt(data[j + 1])) {
                    temp1 = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp1;
                }
            }
        }
    }


}

module.exports = {
    LinkedList
}
