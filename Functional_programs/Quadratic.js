/************************************************************************************************
* Execution : 1. default node cmd> node Quadratic.js 
* 
* Purpose :To Find roots of Quadratic Equation
* 
* @file : Quadratic.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 12-05-2019
*
*************************************************************************************************/
var read = require('readline-sync');
var utility = require('./Utility');



function quadratic() {

    var a = read.questionInt(" Enter value of a");
    var b = read.questionInt("Enter value of b");
    var c = read.questionInt(" value of c");
    var delta = utility.findRoot(a, b, c);

    return [a, b, c, delta];
} module.exports = quadratic();