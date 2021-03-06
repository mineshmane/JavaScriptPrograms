/************************************************************************************************
* Execution : 1. default node cmd> mocha test/algorithm/GuessnumberTest.js 
* 
* @Purpose : Unit Testing of guessNumber program
* @file : GuessNumberTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/
const assert = require('chai').assert;
const result = require('../../AlgorithmPrograms/FindGuessNumber');
// const R=require('../../AlgorithmPrograms/AlgoUtility');

// describe(' method calling ',function(){

//     let result=R;
//     assert.isNumber(result.find(),' it should be number');

// });

describe('FindguessNumber Test', function () {


    /****
       * @description this method test UserEntered String contains Alphabets only 
       * @returns true or false 
       */
    it('user Enterd is Number  ', function () {

        //  var str = t;
        str = parseInt(result[0]);
        console.log(str);
        str1 = str;
        //  var str2=result[3];
        assert.isNumber(str1);
        //  assert.isString(str2,'not sting');
    });

    /****
       * @description This TestCase is for UserEntred number is between 0 to 127
       * @returns true or false 
       */

    it('number is valid Positive test', function () {
        assert.isTrue(result[0] <= 127 && result[0] > 0, ' number is not  valid ,it is should be between 0 to 127 ');
    })

    /****
       * @description This TestCase is for UserEntred number is between 0 to 127
       * @returns true or false 
       */

    it('number is not  valid Negative test', function () {
        assert.isTrue(result[0] > 127 || result[0] < 0, ' number is valid it is between 0 to 127 ');
    });
    /****
       * @description This TestCase is for userInput and output of program is same or not 
       * @returns true or false 
       */

    it('UserInput and Program Output same  ', function () {
        assert.isTrue(result[0] == result[1], ' Guessed Number of user  and Output of program is  different');
    });
    /****
       * @description This TestCase is for userinput is diffrent from output of program
       * @returns true or false 
       */

    it('UserInput and Program Output are Different  ', function () {
        assert.isTrue(result[0] !== result[1], ' Guessed Number is found you executed program correctly');
    });
});