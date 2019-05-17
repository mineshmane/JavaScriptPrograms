/************************************************************************************************
* Execution : 1. default node cmd> mocha test/algorithm/MergeSortTest.js 
* 
* @Purpose : Unit Testing Of Mergesort 
* @file : MergeSortTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/


const assert = require('chai').assert;
const result = require('../../AlgorithmPrograms/MergeSort');


describe('MergeSortTestCase', function () {
    /****
       * @description This Method Test Array size is valid or not 
       * @returns true or false 
       */

    it('Array Size is Valid ', function () {
        assert.isTrue(result > 2, 'Array size is not vaid it is should be greater than 2');
    });
    /****
      * @description This Method Test Array size is valid or not 
      * @returns true or false 
      */

    it('Array Size not Valid ', function () {
        assert.isTrue(result < 2, 'Array size is valid it is more than 2');
    });

});