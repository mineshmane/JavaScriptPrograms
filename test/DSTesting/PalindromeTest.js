/************************************************************************************************
* Execution : 1. default node cmd> mocha test/DSTesting/PalindromeTest.js 
* 
* @Purpose : Unit testing of Palindrome string using dqueue Program
* @file : PalindromeTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 22-05-2019
*    
**********************************/

const assert = require('chai').assert;
const R = require('../../week2/DataStructure/PalindromeCheck');
console.log(R);

describe('Palindrome Postive Tsetcases', function () {
      /********************************************************
    * @description this tescase for user input validation
    * @returns true or false 
    */
    it(' it is valid input  ', function () {
        var result = R[0];
        assert.isNotEmpty(result, ' it should not be null')
    });
      /********************************************************
    * @description this tescase for string lentgh is validation
    * @returns true or false 
    */
    it('string length is valid ', function () {
        var result = R[1];
        assert.isTrue(result > 2, ' string length should be greater than 2');
    });
      /********************************************************
    * @description this tescase for output verfication tssring palindroime then it is true 
    * @returns true or false 
    */
    it('String is Palindrome ', function () {
        var result = R[2];
        assert.isTrue(result, 'String is not palindrome ');
    });
});
describe('Palindrome Negative  Tsetcases', function () {
      /********************************************************
    * @description this tescase true ehen input is wrong 
    * @returns true or false 
    */
    it(' string is null , not valid input  ', function () {
        var result = R[0];
        console.log(result);

        assert.isEmpty(result, ' string is valiid input it not  null')
    });
      /********************************************************
    * @description this tescase return true when string length is not valid
    * @returns true or false 
    */
    it('string length is not valid ', function () {
        var result = R[1];
        assert.isTrue(result < 2, ' string length is valid');
    });
      /********************************************************
    * @description this tescase true when string is not palindrome
    * @returns true or false 
    */
    it('String is Palindrome ', function () {
        var result = R[2];
        assert.isFalse(result, 'String is not palindrome ');
    });
});