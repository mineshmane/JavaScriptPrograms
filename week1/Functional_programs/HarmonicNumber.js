
/************************************************************************************************
* Execution : 1. default node cmd> node HarmonicNumber.js 
* 
* Purpose :To print Nth Harmonic Number 
* 
* @file : HarmoniNumber.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 09-05-2019
*
*************************************************************************************************/
function harmonic() {
    var read = require('readline-sync');
    var utility = require('./Utility');
    var number = read.questionInt("Enter number:\n");
    var harmonic = utility.printHarmonicNumbers(number);
    console.log(harmonic);
    return [number, harmonic];
}
module.exports = harmonic();