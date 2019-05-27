/************************************************************************************************
* Execution : 1. default node cmd> node LeapYear.js 
* 
* Purpose :To check year is leap year or not 
* 
* @file : LeapYear.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 09-05-2019
*
*************************************************************************************************/
function leap() {

    var utility = require('./Utility');
    var read = require('readline-sync');
    var year = read.questionInt(" Enter the year to cheak leap or not: ");
    var result = utility.checkLeapYear(year);

    var len = year.length;
    return [year, len, result];
}
module.exports = leap();