/************************************************************************************************
* Execution : 1. default node cmd> mocha test/DSTesting/Calendar.js 
* 
* @Purpose : To print Calandar in 2D format 
* @file : Calendar.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 21-05-2019
*    
**********************************/

function calendarFun() {

    try {
        let util = require('../DSUtil/DataStructureUtility');
        // take month
        var read = require('readline-sync');
        let month = read.question("Enter the month");
        if (isNaN(month)) {
            throw "Enter valid month"
        }

        // take year
        let year = read.question("Enter the year");
        if (isNaN(year)) {
            throw "Enter valid year"
        }

        var day = util.calender(month, year);
        var arr = [];
        arr.push(month);
        arr.push(year);
        arr.push(day);
        return arr;
        //return [month,year]
    }
    catch (err) {
        console.log(err)
    }

}
module.exports = calendarFun();