
/************************************************************************************************
* Execution : 1. default node cmd> node WindChill.js 
* 
* Purpose :To Calculate Windchill using temperautr and windspeed Program 
* 
* @file : WindChill.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 09-05-2019
*
*************************************************************************************************/
var read = require('readline-sync');
var utility = require('../Functional_programs/Utility');



function wind() {


    var temp = read.question("Enter temprature");

    var windspeed = read.question(" Enter windSpeed ");

    if (temp <= 50 && windspeed <= 120 || windspeed > 3) {

        var convert = Math.floor((temp * 9 / 5) + 32);

        var Wind = utility.windChill(convert, windspeed);
        console.log("temperature in  Fahrenheit: " + convert);
        console.log("wind speed in miles per hour: " + windspeed);
        console.log("windchill :" + Wind);

    } else {
        console.log("u cant  calucalte..since the formula is not valid if t is larger than 50 in \n"
            + "	 * absolute value or if v is larger than 120 or less than 3  ");
    }
    return [temp, windspeed, Wind];

}
module.exports = wind();