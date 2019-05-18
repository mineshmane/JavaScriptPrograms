/************************************************************************************************
* Execution : 1. default node cmd> node SumOfThree.js 
* 
* Purpose :A program with cubic running time. Read in N integers and counts the   number of triples that sum to exactly 0.
* 
* @file : SunOfThree.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 10-05-2019
*
*************************************************************************************************/
function sumof() {
    var utility = require('./Utility');
    var read = require('readline-sync');
    var size = read.questionInt("Enter size of array");
    var array = [];

    for (var i = 0; i < size; i++) {
        array[i] = read.questionInt("enter array element");
    }
    console.log(array);
    var result = utility.findTriplets(array);
    return [size, result];
}
module.exports = sumof(); 