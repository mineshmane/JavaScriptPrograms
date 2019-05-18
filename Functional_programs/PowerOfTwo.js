/************************************************************************************************
* Execution : 1. default node cmd> node PowerOfTwo.js 
* 
* Purpose :To Print Tbale of 2th power
* 
* @file : PowerOfTwo.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 09-05-2019
*
**********************************************************************************************/

function powerofTwo() {
    var read = require('readline-sync');
    var utility = require('./Utility');
    var power = read.questionInt("Enter Number : ");
    var table =utility.PowerofTwo(power);
    return [power,table];
}
module.exports = powerofTwo();