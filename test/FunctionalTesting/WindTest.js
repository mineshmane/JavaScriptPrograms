
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


describe('Windchill testing positive ', function () {
    it('Windspeed is valid', function () {
        var w = result[1];
        assert.isTrue(w > 3 && w < 120, ' windspeed is not valis it is should be in geater than 3 and less than 120');
    });
    it('Temperature is valid', function () {
        var temperature = result[0];
        assert.isTrue(temperature < 50 && temperature > -50, ' teperature not valid it should be less than 50 in celcius ');
    });
    it('Windspeed is not valid', function () {
        var w = result[2];
        assert.isTrue(w > 0, ' output is correct');
    });
});

describe('Windchill testing Negative ', function () {
    it('Windspeed is valid', function () {
        var w = result[1];
        assert.isTrue(w < 3 && w > 120, ' windspeed is not valis it is should be in geater than 3 and less than 120');
    });
    it('Temperature Not valid', function () {
        var temperature = result[0];
        assert.isTrue(temperature < 50 && temperature < -50, ' teperature is valid it return -1 when  ');
    });
    it('Windspeed is not valid', function () {
        var w = result[2];
        assert.isTrue(w > 0, ' output is  correct it return -1');
    });
});