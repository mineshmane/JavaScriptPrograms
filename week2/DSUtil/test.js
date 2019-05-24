var read = require('readline-sync');
var util = require('./QueueUsingLinkedlist');

var ll = new util.QueueList;
var size = read.questionInt(" enter size of quelist: ");
console.log(" Enter ", size, "numbers in qlist: ");
for (var i = 0; i < size; i++) {
    var number = read.question();
    ll.enqueue(number)
}

console.log(" quelist: ");


ll.enqueue(38);
ll.enqueue(55);
ll.show();

ll.deque();
console.log(" after deletion : ");
ll.sizeOfQue();
ll.isEmpty();
ll.show();