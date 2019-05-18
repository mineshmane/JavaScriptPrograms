/************************************************************************************************
* Execution : 1. default node cmd> node FindGuessNumber.js 
* 
* Purpose :asks you to think of a number between 0 and N-1, where N = 2^n, and always guesses the answer with n questions.
* @file : FindGuessNumber.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 13-05-2019
*    
*************************************************************************************************/



function guess() {

    var read = require('readline-sync');
    var utility = require('./AlgoUtility');

    console.log("guess a no between 0 to 127 ");
    var number = read.question(" Enter guessed number :");
    if (number > 0 && number <= 127) {
        var powerNumber = Math.pow(2, number);
        var guessedNumber = utility.find(powerNumber);
    } else {
        console.log(" Please enter 0 to 127 number ");

    }
    return [number, guessedNumber];
}
module.exports = guess();