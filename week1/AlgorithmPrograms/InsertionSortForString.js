/************************************************************************************************
* Execution : 1. default node cmd> node InsertionSortForString.js 
* 
* Purpose :To Sort Element in array using insertionSort method String values
* 
* @file : InsertionSortForString.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 11-05-2019
*    
*************************************************************************************************/

var read = require('readline-sync');
var utility = require('./AlgoUtility');
var size = read.questionInt("Enter Size of Array : ");
var array = [];
console.log(" Enter ", size, " elements in Array : ");

for (var i = 0; i < size; i++) {
    array[i] = read.question();
}
utility.insertionSortForString(array);