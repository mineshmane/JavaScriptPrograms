/************************************************************************************************
* Execution : 1. default node cmd> mocha test/FunctionalTesting/HarmonicTest.js 
* 
* @Purpose : Unit testing of the harmonic numbeer seris program
* @file : HarmonicTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/



var assert = require('chai').assert;
const result = require('../../Functional_programs/HarmonicNumber');
console.log(result);


describe('Harmonic number', function () {
    /*****************************************************
       * @description this  test is for output verification 
       * @returns true or false 
       */

    it('out put  should not be zero ', function () {
        var res = result[1];
        console.log(" result ", res);

        assert.isTrue(res != 0, 'output should bnot be zero');
    });
    /*****************************************************
       * @description This test is for result should be greater than zero
       * @returns true or false 
       */

    it('output is greater than one ', function () {
        var res = result[1];
        console.log(" result ", res);
        assert.isFalse(res < 0);
    });
    /*****************************************************
       * @description This TestCse is for Input from user should not zero 
       * @returns true or false 
       */
    it('input should be lessthan 0 ', function () {
        var res = result[0];
        console.log(" result ", res);
        assert.isTrue(res != 0);
    });
});