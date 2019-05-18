/************************************************************************************************
* Execution : 1. default node cmd> mocha test/algorithm/BinarysearchTest.js 
* 
* @Purpose : Unit Testing of Binarysearch program
* @file : BinarysearchTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/


const assert = require('chai').assert;
const result = require('../../AlgorithmPrograms/BinarySearchInt');

describe('BinarySearch', function () {

    /****
       * @description This Method test Array size is valid
       * @returns true or false 
       */
    it('Array size is valid', function () {
        var format = /[0-9]/;

        var size = result[0];
        assert.isTrue(size > 0, ' array size is not valid its should be greater than zero ');
    });

    /****
       * @description This TesCase is for search element not found it return true  
       * @returns true or false 
       */
    it('search element   found', function () {
        var rsult = result[1];
        assert.notEqual(rsult, -1, 'search Element is not found:');
    });

    /****
       * @description This TestCase search el;emt found then returns true 
       * @returns true or false 
       */
      it('search element not found', function () {
        var rsult = result[1];
        assert.equal(rsult, -1, 'search Element is found :');
    });
});