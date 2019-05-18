/************************************************************************************************
* Execution : 1. default node cmd> mocha test/algorithm/MonthlyPayTest.js 
* 
* @Purpose : Unit Testing of MonthlyPayment Program
* @file : MonthlyPayTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/
const assert = require('chai').assert;
const result = require('../../AlgorithmPrograms/MonthlyPayment');

describe('MonthlyPayment', function () {
    /****
       * @description This Test is for valid principal  
       * @returns true or false 
       */
    it('principle is valid', function () {
        var p = result[0];
        assert.isTrue(p > 0, 'p is not valid it is solud be not be negative ');
    });
    /****
       * @description This Test is for Valid rate of user entered
       * @returns true or false 
       */
    it('rate is valid its posituve ', function () {
        var rate = result[1];
        assert.isTrue(rate >= 0, ' rate of intrest is not valid it is should not be negative');
    });
    /****
       * @description This Test is for checking valid years number
       * @returns true or false
       */
    it('Years Number is valid ist is positive  ', function () {
        var t = result[2];
        assert.isTrue(t > 0, ' year should be positive number ');
    });
    /****
       * @description This Test is for output of program shoiuld be positive number
       * @returns true or false 
       */
    it('payment should not be negetive or Null', function () {
        var payment = result[3];
        assert.isTrue(payment >= 0, ' ouput of Program should be positive number ');
    });
});