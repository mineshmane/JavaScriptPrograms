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
const result = require('../../AlgorithmPrograms/InsertionSortInt');

describe('InsertionSort Testcases', function () {

    /****
       * @description This Method Test Array size is valid or not 
       * @returns true or false 
       */
    it('Array size is valid ', function () {
        assert.isTrue(result > 1, ' array size should be gretaer than 1');
    });

    /****
       * @description This Method Test Array size is valid or not 
       * @returns true or false 
       */
    it('Array size not valid ', function () {
        assert.isTrue(result < 1, ' array size is valid it is more than  1');
    });
});