function calendarFun() {

    try {
        let util = require('../DataStructure/DataStructureUtility');
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

        util.calender(month, year);
        var arr = [];
        arr.push(month);
        arr.push(year);
        return arr;

    }
    catch (err) {
        console.log(err)
    }
}
module.exports = calendarFun();