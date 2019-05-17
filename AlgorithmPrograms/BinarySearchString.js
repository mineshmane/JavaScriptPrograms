/************************************************************************************************
* Execution : 1. default node cmd> node BinarySearchString.js 
* 
* Purpose :To Search Element in array using binary seach method String values
* 
* @file : BinarySearchString.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 11-05-2019
*    
*************************************************************************************************/



var read = require('readline-sync');
var utility = require('./AlgoUtility');
var size = read.question("Enter size of Arrray : ");
var array = [size];

for (var i = 0; i < size; i++) {
    array[i] = read.question(" Enter elment : ");
}
array.sort();

console.log(array);

var key = read.question("Enter elment for searhning: ");


var result = utility.binarySearchForString(array, key);


if (result !== -1) {
    console.log(key, " is found in array at index ", result);
} else {
    console.log(" elemt no found ");
}
