/************************************************************************************************
* Execution : 1. default node cmd> node VendingMachine.js 
* 
* Purpose :To Sort Element in array using insertionSort method String values
* 
* @file : VendingMachine.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 13-05-2019
*    
*************************************************************************************************/
function changeNoteConvertor() {

    var read = require('readline-sync');
    var utility = require('./AlgoUtility');

    var value = read.questionInt(" Enter Amount: ");
    var util = utility.changeConverter(value);
    console.log("notes: =",util);
    return [util, value];
}
module.exports = changeNoteConvertor();