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
const result = require('../../week2/DataStructure/primeAna');
console.log(result, " valid");

describe(' PrimeAnagram Test caeses', function () {
    /********************************************************
  * @description this tescase true when input is prime number
  * @returns true or false 
  */
    it('valid oput it should be prime numbers', function () {
        assert.isTrue(result % 2 !== 0, ' it not prime number ');
    });
    /********************************************************
  * @description this tescase true when string is not primenumbber
  * @returns true or false 
  */
    it('valid oput it should be prime numbers', function () {
        assert.isTrue(result % 2 == 0, ' it not prime number ');
    });
});