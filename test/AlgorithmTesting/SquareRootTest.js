/************************************************************************************************
* Execution : 1. default node cmd> mocha test/algorithm/SquareRootTest.js 
* 
* @Purpose : Unit Testing Of SqaureRoot calculate program
* @file : SquareRootTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/

const assert = require('chai').assert;
const result = require('../../AlgorithmPrograms/SquareRoot');

describe('SqaureRoot Testing', function () {
    /****
       * @description This Test user input is number or not  
       * @returns true or false 
       */
    it('Input should be Number ', function () {
        var num = result[0];
        assert.isNumber(num, 'Number');
    });
    /****
       * @description This Test is for valid principal  
       * @returns true or false 
       */

    chai.Assertion.addMethod('stringOrNumber', function () {
        //Check if it is a string or a number here
        var num = result;
        expect(num).to.be.stringOrNumber();
    });
});