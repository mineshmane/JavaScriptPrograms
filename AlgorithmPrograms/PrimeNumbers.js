/************************************************************************************************
* Execution : 1. default node cmd> node PrimeNumbers.js 
* 
* Purpose :To print PrimeNumbers from 1 to 1000 range  
* 
* @file : PrimeNumber.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 10-05-2019
*
*************************************************************************************************/
function primeNumbers() {
    var read = require('readline-sync');
    var utility = require('./AlgoUtility');
    var lowest = read.questionInt("Enter number from you start range");

    var highest = read.questionInt("enter number ");
    utility.printPrimeNumbers(lowest, highest);
    return [lowest, highest];
}
module.exports = primeNumbers();