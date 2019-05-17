/************************************************************************************************
* Execution : 1. default node cmd> node BubbleSortInt.js 
* 
* Purpose :To sort Element of array using bubble sort method Integer values
* 
* @file : BubbleSortInt.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 11-05-2019
*    
*************************************************************************************************/

var utility = require('./AlgoUtility');
var read = require('readline-sync');

var size = read.question("Enter size of Array :");
console.log("Enter ", size, " Elements of Array: ");
var array = [];
for (var i = 0; i < size; i++) {
    array[i] = read.question();
}
console.log(array.join(" "));
var sorted = utility.bubbleSortForInt(array);
console.log(" Sorted Array :");
for (var i = 0; i < sorted.length; i++) {
    console.log(sorted[i]);
}
