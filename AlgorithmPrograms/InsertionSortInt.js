/************************************************************************************************
* Execution : 1. default node cmd> node InsertionSortInt.js 
* 
* Purpose :To Sort Element in array using insertionSort method String values
* 
* @file : InsertionSortInt.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 13-05-2019
*    
*************************************************************************************************/
function insertion() {

    var utility = require('./AlgoUtility');
    var read = require("readline-sync");
    var size = read.questionInt("Enter size of array: ");
    console.log("Enter ", size, " Elements ");
    var array = [];
    for (var i = 0; i < size; i++) {
        array[i] = read.question();
    }
    var sorted = utility.insertionSortForInt(array);

    console.log("Sorted Array :", sorted.join(" "));
    return size;
}
module.exports = insertion();