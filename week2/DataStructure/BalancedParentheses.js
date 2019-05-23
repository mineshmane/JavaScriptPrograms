/************************************************************************************************
* Execution : 1. default node cmd> mocha BalancedParenthesesTest.js 
* 
* @Purpose : To check given expression is Balnced or not  of Balancedparenthes Program suing stack
* @file : BalancedParenthesesTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 22-05-2019
*    
**********************************/

function balancedP() {
    try {

        var stack = require('../DSUtil/Stack');
        var readline = require("readline-sync");
        var expression = readline.question("Enter Arithmatic Expression to check");
        var ss = new stack.Stack();

        var ArithmaticExpression = expression.split("");
        console.log(ArithmaticExpression)
        let ch;
        for (let i = 0; i < ArithmaticExpression.length; i++) {
            ch = expression.charAt(i);
            // push in stack if "("
            if ((ch == '(') || ch == '{' || ch == '[') {
                // console.log("arithmetic expression ", ArithmaticExpression[i])
                ss.push(ch);

            }
            // pop from the stack if ")"
            else if (ch == ')' || ch == '}' || ch == ']') {
                // if stack is empty and ")"
                if (ss.isEmpty()) {
                    ss.push(ch);
                    break;
                } else {
                    ss.pop();
                }
            }
        }
        console.log(" asne", ss);

        if (ss.isEmpty()) {
            console.log("Arithmatic Expression is Balanced");
        }
        else {
            console.log("Arithmatic Expression is Not balanced");
        }
        // var ans=ss.isEmpty();

        return expression;
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = balancedP();
