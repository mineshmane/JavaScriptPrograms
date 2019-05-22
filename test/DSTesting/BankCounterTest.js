/************************************************************************************************
* Execution : 1. default node cmd> mocha test/BankCounterTest.js 
* 
* @Purpose : Unit testing of bankCashCounter using Queue Program
* @file : BankCounterTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 22-05-2019
*    
**********************************/

const assert = require('chai').assert;
const result = require('../../week2/DataStructure/BankCounter');
describe('BankCounter Test cases', function () {
    it(' valid queue Size', function () {
        assert.isTrue(result > 0, 'queue size is not valid ');
    })
})