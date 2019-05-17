/************************************************************************************************
* Execution : 1. default node cmd> node DayOfWeek.js 
* 
* Purpose :To findout the Day of week input fom user  date , month and year 
* 
* @file : DayOfWeek.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 10-05-2019
*
*************************************************************************************************/


function dayofWeek() {

    var utility = require('./AlgoUtility');
    var read = require('readline-sync');

    var d = read.questionInt(" Enter date");
    var m = read.questionInt("Enter Month");
    var y = read.questionInt("Enter year");
    var result = utility.dayOfWeek(d, m, y);
    console.log(result);
    if (result == 0) {
        console.log("sunday");
    } else if (result == 1) {
        console.log("Monday");

    } else if (result == 2) {
        console.log("tuesday");
    } else if (result == 3) {
        console.log("wednesday");
    } else if (result == 4) {
        console.log("thurstday");
    } else if (result == 5) {
        console.log("friday");
    } else {
        console.log(" saturday");
    }
    return [d, m, y, result];
}
module.exports = dayofWeek();