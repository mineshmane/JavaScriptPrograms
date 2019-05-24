var read = require('readline-sync');
var util = require('../DSUtil/StackUsingList');

var ll = new util.StackList;
var size = read.questionInt(" enter size of quelist: ");
console.log(" Enter ", size, "numbers in qlist: ");
for (var i = 0; i < size; i++) {
    var number = read.question();
    ll.push(number)
}

console.log(" quelist: ");



ll.show();
ll.pop();
console.log(" after deletion : ");

ll.show();