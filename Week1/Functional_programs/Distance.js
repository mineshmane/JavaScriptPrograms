
/************************************************************************************************
* Execution : 1. default node cmd> node Distance.js 
* 
* Purpose :to calculate the Euclidean Distance x and y
* 
* @file : distance.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 10-05-2019
*
*************************************************************************************************/
function distance(){
var utility = require('./Utility');
var read = require('readline-sync');
var x = read.questionInt("Enter x");
var y = read.questionInt("Enter y");
var reslt =utility.findDistance(x, y);

return [reslt,x,y];
}
module.exports=distance();