function balancedP() {
    try {

        var stack = require("./Stack");
        var readline = require("readline-sync");
        var expression = readline.question("Enter Arithmatic Expression to check");
        var ss = new stack.Stack();
        var ArithmaticExpression = expression.split("");
        console.log(ArithmaticExpression)
        for (let i = 0; i < ArithmaticExpression.length; i++) {
            // push in stack if "("
            if ((ArithmaticExpression[i] == '(') || (ArithmaticExpression[i] == '{') || (ArithmaticExpression[i] == '[000')) {
                //console.log(ArithmaticExpression[i])
                ss.push('(');
                ss.push('{');
                ss.push('[');
            }
            // pop from the stack if ")"
            else if (ArithmaticExpression[i] == ')') {
                // if stack is empty and ")"
                if (ss.isEmpty()) {
                    ss.push(')');
                    break;
                }
                ss.pop();
            }
        }
        if (ss.isEmpty()) {
            console.log("Arithmatic Expression is Balanced");
        }
        else {
            console.log("Arithmatic Expression is Not balanced");
        }
        return expression;
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = balancedP();
