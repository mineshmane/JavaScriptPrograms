/************************************************************************************************
* Execution : 1. default node cmd> mocha test/algorithm/PrimeNumberTest.js 
* 
* @Purpose : Unit Testing of 1 to 1000 prime Number 
* @file : PrimeNumberTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/
const assert = require('chai').assert;
const result = require('../../AlgorithmPrograms/PrimeNumbers');

describe('PrimeNumberTestcase:', function () {
    /****
       * @description This Test is for to print prime number starting number are valid or not  
       * @returns true or false 
       */

    it(' Start and End number are valid ', function () {

        var low = result[0];
        var high = result[1];
        assert.isTrue(high != low, ' you are Entered same inputs start and end number');
    });
    /****
       * @description This Test is for valid principal  
       * @returns true or false 
       */
    it(' start number is less than Enmdingg number raange  ', function () {
        var low = result[0];
        var high = result[1];
        assert.isTrue(high > low,' start  should be less than End .');
    });
});