/************************************************************************************************
* Execution : 1. default node cmd> mocha test/algorithm/VendingMachineTest.js 
* 
* @Purpose : Unit testing of Vending Machine program
* @file : VendingMachineTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/

const assert = require('chai').assert;
const result = require('../../AlgorithmPrograms/VendingMachine');


describe('VendingMachine Testing', function () {



    /****
       * @description this method test user Entered Amount is valid or not it should be greater than zero
       * @param Int Amount
       * @returns true or false 
       */
    it('amount is valid', function () {

        var input = result[1];
        assert.isTrue(input > 0, ' Amount should not be negative ');
    });


    /****
           * @description this method test output of program 
           * @param Int Amount
           * @returns true or false 
           */
    it('program output is  expected output', function () {

        var input = result[0];
        assert.isTrue(input >= 0, ' output is not expected ');
    });


});
describe('negative test ', function () {
    /****
       * @description this method test user Entered Amount is valid or not it should be greater than zero
       * @param Int Amount
       * @returns true or false 
       */
    it('amount is not valid', function () {

        var input = result[1];
        assert.isTrue(input < 0, ' Amount is valid it is positive number  ');
    });


    /****
           * @description this method test output of program 
           * @param Int Amount
           * @returns true or false 
           */
    it('program output is Not expected output', function () {

        var input = result[0];
        assert.isTrue(input <= 0, ' output is expected ');
    });
});