/************************************************************************************************
* Execution : 1. default node cmd> mocha test/FunctionalTesting/powerTest.js 
* 
* @Purpose : Unit testing of 2's power print table  Program
* @file : powerTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/

const assert = require('chai').assert;
const result = require('../../Functional_programs/PowerOfTwo');
console.log(result);


describe('PowerOfTwo', function () {

  /*****************************************************
    * @description This Test for input is number 
    * @returns true or false 
    */
  it('user input should be a number ', function () {

    assert.isNumber(result[0], 'Number');
  });
  /*****************************************************
    * @description This Test is for input number should be between 0 to 32 
    * @returns true or false 
    */
  it('number is valid  it is between 0 to 31 ', function () {
    let number = result[0];
    assert.isTrue(number > 0 && number < 31, ' Number is not valid it is not between 1 to 31 ');
  });

  /*****************************************************
    * @description This Test is
    * @returns true or false 
    */
  it('number is not valid  ', function () {
    let number = result[0];
    assert.isTrue(number < 0 || number > 31,'Number is valid it is between 0 to 31');
  });
  /*****************************************************
    * @description This Test is
    * @returns true or false 
    */
  it('Output is valid  ', function () {
    let number = result[0];
    console.log(" table =", result[1]);

    assert.isTrue(result[1] == number, ' table does not cointasin valid numbers of power 2');
  });
});