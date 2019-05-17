/************************************************************************************************
* Execution : 1. default node cmd> node TempConvertor.js 
* 
* Purpose :Temperature Convertor 
* 
* @file : TempConvertor.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 10-05-2019
*
*************************************************************************************************/
function tempConvert() {


    var utility = require('./AlgoUtility');
    var read = require('readline-sync');
    var temp = read.question(" Enter which you want to convert c or f : ");

    var tem = utility.convertTemperature(temp);
    return [temp,tem];
}
module.exports = tempConvert();