/************************************************************************************************
* Execution : 1. default node cmd> node MergeSort.js 
* 
* Purpose :To Sort Element in array using insertionSort method String values
* 
* @file : MergeSort.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 13-05-2019
*    
*************************************************************************************************/

function merge() {

    var read = require('readline-sync');
    var utility = require('./AlgoUtility');


    var size = read.questionInt("Enter Size of Array: ")

    console.log(" Enter ", size, " Array Elemnts: ");
    var arr = [];
    for (var i = 0; i < size; i++) {
        arr[i] = read.question();
    }
    var len = arr.length - 1;
    console.log("Array length : ", len);
    var no = 0;
    var array = utility.sort(arr, no, len);

    console.log("Sorted array of string: ");
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    return [size]
}
module.exports = merge();