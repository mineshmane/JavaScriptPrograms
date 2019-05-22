/************************************************************************************************
* Execution : 1. default node cmd> mocha test/DSTesting/PrimeNumTest.js 
* 
* @Purpose : Unit testing of print 2D format primeNumbers  Program
* @file : PrimeNumTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 22-05-2019
*    
**********************************/
const assert = require('chai').assert;
const Result = require('../../week2/DataStructure/PrimeNum');

describe('PrimeNumber Positive Testcases', function () {
    it('input is valid number', function () {
        var res = Result[0];
        assert.equal(res, 1, ' result is true if condtion true');
    })

    it('input is valid number', function () {
        var res = Result[1];
        assert.isTrue(res === 100, ' result is true if condtion true');
    })
})