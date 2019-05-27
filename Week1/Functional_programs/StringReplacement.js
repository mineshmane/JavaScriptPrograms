/************************************************************************************************
* Execution : 1. default node cmd> node StringReplacement.js 
* 
* Purpose :To replace word from Existing String using replace method 
* 
* @file : StringReplacement.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 10-05-2019
*
*************************************************************************************************/
function replace(){

var utility = require('./Utility');

var read = require('readline-sync');
var string = "Hello <<UserName>>, How are you?";
console.log("before replacement string : ", string);
var result=utility.replaceString(string);
return result;

}
module.exports=replace();




