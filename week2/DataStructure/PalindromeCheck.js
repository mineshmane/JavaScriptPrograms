function palin() {
    try {
        let deque = require("../DSUtil/dequeue");
        let readline = require("readline-sync");
        let input = readline.question("Enter String to check ");
        var len = input.length;


        if (input.length < 2) {
            console.log(" please Enter valid string");
        } 
            let dq = new deque.deque();
            let split = input.split("");
            let palindrome = true;
            // add character in queue
            for (let i = 0; i < input.length; i++) {
                dq.addrear(split[i]);
            }
            // check front and rear for palindrome
            while (!dq.isEmpty() && dq.rear != dq.front) {
                if (dq.removeFront() == dq.removeRear()) {
                    palindrome = true;
                }
                else {
                    palindrome = false;
                    break;
                }
            }
            if (palindrome) {
                console.log("String is palindrome");
            }
            else {
                console.log("String is Not palindrome");
            }
            return [input, len, palindrome];
        
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = palin();