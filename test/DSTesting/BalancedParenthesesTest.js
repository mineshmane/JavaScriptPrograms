/************************************************************************************************
* Execution : 1. default node cmd> mocha BalancedParenthesesTest.js 
* 
* @Purpose : Unit testing of Balancedparenthes Program
* @file : BalancedParenthesesTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 22-05-2019
*    
**********************************/

const assert = require('chai').assert;
const result = require('../../week2/DataStructure/BalancedParentheses');
describe('balancedaparenthees Tseting cases', function () {
    it('string not empty', function () {
        assert.isNotEmpty(result, 'string is emty it should be not empty');
    });
});