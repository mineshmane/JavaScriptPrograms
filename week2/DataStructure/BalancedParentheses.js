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
        var expression = readline.question("Enter Arithmatic Expression to check: ");
        var ss = new stack.Stack();

        var ArithmaticExpression = expression.split("");
        console.log(ArithmaticExpression)
        let ch;
        var count = 0;
        var counter = 0;
        var coun = 0;
        for (let i = 0; i < ArithmaticExpression.length; i++) {
            ch = expression.charAt(i);
            // push in stack if "("
            if ((ch == '(') || ch == '{' || ch == '[') {
                // console.log("arithmetic expression ", ArithmaticExpression[i])


                if (ch == '{') {
                    ss.push(ch);
                    count++;
                }
                if (ch == '[') {
                    ss.push(ch);
                    counter++;
                } else {
                    ss.push(ch);
                    coun++;
                }


            }
            // pop from the stack if ")"
            else if (ch == ')' || ch == '}' || ch == ']') {

                // if stack is empty and ")"
                if (ch == '}') {
                    if (ss.isEmpty()) {
                        ss.push(ch);
                        count++;
                        break;
                    } else {
                        ss.pop();
                        count--;
                    }
                }
                if (ch == ']') {
                    if (ss.isEmpty()) {
                        ss.push(ch);
                        counter++;
                        break;
                    } else {
                        ss.pop();
                        counter--;
                    }
                } else {
                    if (ss.isEmpty()) {
                        ss.push(ch);
                        coun++;
                        break;
                    } else {
                        ss.pop();
                        coun--;
                    }
                }
            }
        }
        console.log(" asne", ss);
        var output = count == 0 && counter == 0 && coun == 0;
        if (count == 0 && counter == 0 && coun == 0) {
            console.log(" expression is balanced");

        } else {
            console.log(" expression not balcned");
        }

        //var ans=ss.isEmpty();

        return [expression, coun, count, counter, output];
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = balancedP();
