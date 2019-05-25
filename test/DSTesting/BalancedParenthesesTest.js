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
    /********************************************************
      * @description this tsetcase is for String should not be empty
      * @returns true or false 
      */
    it('string not empty', function () {
        assert.isNotEmpty(result[0], 'user input Expression String hould noit Empty');
    });
    /********************************************************
      * @description this tests expression is balanced then it return truee 
      * @returns true or false 
      */
    it('expression is  Balanced ', function () {
        assert.isTrue(result[4] == true, ' MathMatical Expression is nOt balanced ');
    })
    /********************************************************
      * @description this mehtod tests mathmatical Expression is not balanced it return false
      * @returns true or false 
      */
    it('expression is Not  Balanced ', function () {
        assert.isFalse(result[4] == true, ' your Expression is balanced ');
    })
});
