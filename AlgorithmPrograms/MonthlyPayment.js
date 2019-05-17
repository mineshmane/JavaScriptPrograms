
/************************************************************************************************
* Execution : 1. default node cmd> node MonthlyPayment.js 
* 
* Purpose :To Calculate Montjhly payment using principal rate and months in year 
* 
* @file : MonthlyPayment.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 10-05-2019
*
*************************************************************************************************/
function monthlyPay() {

    var utility = require('./AlgoUtility');
    var read = require('readline-sync');

    var p = read.question("Enter principle");
    var r = read.question(" Enter Rate of Intest");
    var y = read.question("Enter the year Times");
    var payment = utility.Payment(p, y, r);
    console.log(payment);
    return [p,r,y,payment]
}
module.exports = monthlyPay();