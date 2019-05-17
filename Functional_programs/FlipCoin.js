/************************************************************************************************
* Execution : 1. default node cmd> node FlipCoin.js 
* 
* Purpose :to calculate percentage of heads ad Tails
* 
* @file : FlipCoin.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 10-05-2019
*
*************************************************************************************************/
function flip(){
var utility=require('./Utility')
var read=require('readline-sync');
var numberOfFlip=read.question("Enter number to flip the coin number of times\n");
var result =utility.coinPercentage(numberOfFlip);
console.log(" result: ",result)
return result
}
module.exports=flip();