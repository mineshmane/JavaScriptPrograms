/************************************************************************************************
* Execution : 1. default node cmd> mocha test/FunctionalTesting/TwoDArrayTest.js 
* 
* @Purpose : Unit testing of Two diemensional Array Program
* @file : TwoDArrayTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/

var assert = require('chai').assert;
var result = require('../../Functional_programs/TwoDarray');
console.log(result);
describe('TwoDArray', function () {

    /*****************************************************
   * @description This Test is for 2d array row is valid or not
   * @returns true or false 
   */
    it(' row of 2D array is valid', function () {
        var res = result[0];
        assert.isTrue(res > 0, 'minimum 1 row is require for 2D array ');
    });
    /*****************************************************
   * @description This Test is for Colum should be valid number 
   * @returns true or false 
   */

    it('2D array column is valid size ', function () {
        let result2 = result[1];
        assert.isTrue(result2 > 0, ' 2D array cloum size should be minimum 1 ');
    });

});