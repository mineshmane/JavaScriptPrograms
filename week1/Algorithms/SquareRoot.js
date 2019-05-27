/************************************************************************************************
* Execution : 1. default node cmd> node SquareRoot.js 
* 
* Purpose :To Calculate square root of given number
* 
* @file : SquareRoot.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 10-05-2019
*
*************************************************************************************************/


function square() {


    var utility = require('./AlgoUtility');
    var read = require('readline-sync');

    var number = read.question("Enter number ");
    if (number > 0) {
        var sqrt = utility.sqrt(number);
        console.log(sqrt, " is the square root of number :", number);
    } else {
        console.log("please insert positive number and Integer values only ");
    }
    return [number, sqrt];
}
module.exports = square();