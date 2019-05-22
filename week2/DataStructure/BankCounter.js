var read = require('readline-sync');
var Que = require('../DSUtil/Queue');


var amount = 10000;
var chocie;
console.log("Enter How many People are in Queue");
var people = read.questionInt();

var queue = new Que.Queue(people);// crate object of queue assigned size to queue
console.log("enter " + people + " name in list");
for (var i = 1; i <= people; i++) {

    console.log("Enter person " + i + " name");
    var CustNAME = read.question();
    queue.enqueue(CustNAME);// calling enQueue method to add name of person to q object

}
console.log("Queue is ");
queue.show();
for (var counter = 0; counter < people; counter++) {
    console.log("Welcome To Bank");
    console.log("Person " + counter + " in queue");
    console.log("Enter 1.to Width draw amount");
    console.log("Enter 2.to Deposit Money");
    chocie = read.questionInt();
    switch (chocie) {
        case 1:
            console.log("Enter amount TO WithDraw");
            var withdraw_Amount = read.questionInt();

            if (withdraw_Amount > 0 && withdraw_Amount <= amount) {

                amount = amount - withdraw_Amount;
                console.log("ThankYou .. .>");

                if (amount == 0) {
                    console.log("Out OF cash...!");
                    return;
                }
                console.log("  Updated amount is = " + amount);

            } else {
                console.log("Enter Valid amount");
            }

            break;

        case 2:
            console.log("Enter Amount you want to Deposit");
            var DRAW_AMOUNT = read.questionInt();// calling scanint method to take deposit amount from
            // user
            if (DRAW_AMOUNT > 0) {
                amount = amount + DRAW_AMOUNT;// updating bank amount
                console.log(" updated amount = " + amount);

                break;
            } else {
                console.log("please Enter valid amount");
                return;
            }
        default:
            console.log("Enter valid Input");
            break;
    }

    queue.dequeue(); // calling deQueue method to remove the person from queue after their operation
    console.log("removed from ");
    console.log("current queue is ");
    queue.show();
}
