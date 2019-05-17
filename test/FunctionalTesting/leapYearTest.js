/************************************************************************************************
* Execution : 1. default node cmd> mocha test/FunctionalTesting/LeapYearTest.js 
* 
* @Purpose : Unit testing of Leap Year checking Program
* @file : LeapYearTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/


var assert = require('chai').assert;
var result = require('../../Functional_programs/LeapYear');
console.log(result[0], "length of digits", result[1]);

describe('LeapYear', function () {
    /*****************************************************
       * @description This Test is for User Entered value Year shiould be above 3 digits
       * @returns true or false 
       */
    it('year is valid it is greater than 3 digits ', function () {

        assert.isAbove(result[1], 3, ' year is not valid years should be 4 digits ');
    });
    /*****************************************************
       * @description This test is user Entered Year numbewr shoul be less than  digit
       * @returns true or false 
       */
    it('year is below 5 digit', function () {
        let count_year = result[1];
        assert.isBelow(count_year, 5, 'year is not valid it should be below 5 digits');
    });
    /*****************************************************
       * @description This Testcase check year is exacly 4 digits
       * @returns true or false 
       */
    it('year is  4 digit', function () {
        let count_year = result[1];
        assert.equal(count_year, 4, ' year not valid it should be 4 digitd only');
    });
    /*****************************************************
       * @description  This TestCase for it Contains only Decimal Number
       * @returns true or false 
       */
    it('its Conatins Only Decimal digits', function () {
        let count_year = result[0];
        assert.isTrue(count_year > 999 && count_year < 9999,' year is not valisd it should conatins only digits ');
    });

    /*****************************************************
       * @description This Test is For year is leap year output
       * @returns true or false 
       */
    it('year is Leap year ', function () {
        let count_year = result[2];
        assert.equal(count_year, 1, ' year is Not leap Year');
    });
    /*****************************************************
       * @description This test case is for uyear is not lep year oiut[put]
       * @returns true or false 
       */
    it('year is Not Leap year ', function () {
        let count_year = result[2];
        assert.notEqual(count_year, 1, ' year is  leap Year');
    });

});

