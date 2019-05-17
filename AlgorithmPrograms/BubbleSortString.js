/************************************************************************************************
* Execution : 1. default node cmd> node BubbleSortString.js 
* 
* Purpose :To Sort Element in array using bubble sort method String values
* 
* @file : BubbleSortString.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 11-05-2019
*    
*************************************************************************************************/
function bubble() {

    var utility = require('./AlgoUtility');
    var read = require('readline-sync');
    var size = read.questionInt(" Enter Size of array ");
    console.log("Enter ", size, " String Elements in array : ");
    var array = [];
    for (var i = 0; i < size; i++) {
        array[i] = read.question();
    }
    utility.bubbleSortForString(array);
    return size;
}
module.exports = bubble();