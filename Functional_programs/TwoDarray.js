
/************************************************************************************************
* Execution : 1. default node cmd> node TwoDarray.js 
* 
* Purpose :Take size of array and elements of array  from user and print in 2D format
* 
* @file : TwoDarray.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 10-05-2019
*
*************************************************************************************************/
function arrayD() {

    var utility = require('./Utility');

    var read = require('readline-sync');
    var row = read.questionInt('enter the size of row =');
    var column = read.questionInt('enter the size of column =');
    utility.twoDarray(row, column);

    return [row, column];
}
module.exports = arrayD();