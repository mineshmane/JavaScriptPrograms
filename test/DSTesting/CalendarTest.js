/************************************************************************************************
* Execution : 1. default node cmd> mocha test/DSTesting/CalendarTest.js 
* 
* @Purpose : Unit Testing Of Print Calendar program
* @file : CalendarTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 21-05-2019
*    
**********************************/
const assert = require('chai').assert;
var result = require('../../week2/DataStructure/Calendar');

describe('DayOfWeek Positive testing', function () {

    /****
       * @description This Method Test And retuns true when months is valid input
       * @returns true or false 
       */

    it('Month is valid ', function () {
        var month = result[0];
        assert.isTrue(month > 0 && month < 13, 'Month is Not valid it is should 1 to 12')
    });
    /****
       * @description This Method Test case return true when user input is valid year 
       * @returns true or false 
       */

    it('Year is valid ', function () {
        var year = result[1];
        assert.isTrue(year > 999 && year < 9999, ' year should be 4 digits only ')
    });
    /****
       * @description This Method Test case check start day valid or not of day method
       * @returns true or false 
       */

    it('Day value is valid ', function () {
        var day = result[2];
        assert.isTrue(day >= 0 && day <= 6, ' Day value shold be between 0 to 6 ');
    });
});


describe('DayOfWeek Negative testing', function () {

    /****
       * @description This Method Test Negative it return true when month user input invalid month
       * @returns true or false 
       */

    it('Month is Not valid ', function () {
        var month = result[0];
        assert.isTrue(month < 0 || month > 13, 'Month is valid it is in between 1 to 12')
    });
    /****
       * @description This Method Test return true when usr input invlaid year
       * @returns true or false 
       */

    it('Year is not valid ', function () {
        var year = result[1];
        assert.isTrue(year < 999 || year > 99999, ' year is valid  4 digits  ')
    });

});