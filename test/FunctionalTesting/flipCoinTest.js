/************************************************************************************************
* Execution : 1. default node cmd> mocha test/FunctionalTesting/FlipCoinTest.js 
* 
* @Purpose : Unit testing of the Flipcoin calculate tails and heads percentage Program
* @file : FlipCoinTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/

var assert = require('chai').assert;
var result = require('../../Functional_programs/FlipCoin');
console.log(" result 2:", result);


describe('FlipCoin', function () {


    /********************************************************
       * @description this mehtod test user input parameter are valid or not 
       * @returns true or false 
       */

    it('Input should be integer value ', function () {
        var res = result[2];

        assert.isNotNumber(res, 'Number');
    });

    /*****************************************************
      * @description this mehtod test user input should not be zero
      * @returns true or false 
      */

    it('User input should not be zero', function () {
        var res = result[2];


        assert.isTrue(res != 0);
    });


    /*****************************************************
       * @description this mehtod test user input x and y should not be zero
       * @returns true or false 
       */
    it('Output percentage  should not  zero or less than zero ', function () {
        var res = result[1];


        assert.isFalse(res < 0);
    });

    /*****************************************************
       * @description this mehtod test  validation of output
       * @returns true or false 
       */
    it('Result should be tails + head percent =100  ', function () {
        var res1 = result[1];
        var res2 = result[0];

        var res3 = res1 + res2;


        assert.isFalse(res3 != 100,' total percent should be 100%');
    });

    /*****************************************************
       * @description this mehtod test output should not be negative
       * @returns true or false 
       */

    it('Out[put should not be negative  ', function () {
        ;
        var res1 = result[1];
        var res2 = result[0];

        var res3 = res1 + res2;

        assert.equal(res3, 100);
    });

});