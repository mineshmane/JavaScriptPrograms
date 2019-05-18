
/************************************************************************************************
* Execution : 1. default node cmd> mocha test/FunctionalTesting/WindTest.js 
* 
* @Purpose : Unit testing of Windchill program
* @file : WindTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/


const assert = require('chai').assert;
const result = require('../../Functional_programs/WindChill');


describe('Windchill positive testing  ', function () {
    /********************************************************
      * @description this mehtod test wind speed is valid or not
      * @returns true or false 
      */
    it('Windspeed is valid', function () {
        var w = result[1];
        assert.isTrue(w > 3 && w < 120, ' windspeed is not valis it is should be in geater than 3 and less than 120');
    });
    /********************************************************
      * @description this mehtod test temperature is valid or not
      * @returns true or false 
      */
    it('Temperature is valid', function () {
        var temperature = result[0];
        assert.isTrue(temperature < 50 && temperature > -50, ' teperature not valid it should be less than 50 in celcius ');
    });
    /********************************************************
      * @description this mehtod test the output of program 
      * @returns true or false 
      */
    it('output is valid', function () {
        var w = result[2];
        assert.isTrue(w > 0 && w <= 143.72549466976793, ' output is correct');
    });
});

describe('Windchill Negative testing  ', function () {
    /********************************************************
      * @description this mehtod test user input parameter are valid or not 
      * @returns true or false 
      */
    it('Windspeed is not  valid', function () {
        var w = result[1];
        assert.isTrue(w < 3 || w > 120, ' windspeed is valid it is  greater than 3 and less than 120');
    });
    /********************************************************
      * @description this mehtod test user input parameter are valid or not 
      * @returns true or false 
      */
    it('Temperature Not valid', function () {
        var temperature = result[0];
        assert.isTrue(temperature > 50, ' teperature is valid it return -1 when  ');
    });
    /********************************************************
      * @description this mehtod test user input parameter are valid or not 
      * @returns true or false 
      */
    it('Windspeed is not valid', function () {
        var w = result[2];
        assert.isTrue(w > 143.72549466976793, ' output is  correct it');
    });
});