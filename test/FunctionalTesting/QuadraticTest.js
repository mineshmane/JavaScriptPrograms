/************************************************************************************************
* Execution : 1. default node cmd> mocha test/FunctionalTesting/QuadraticTest.js 
* 
* @Purpose : Unit testing of  quadratic equation 

* @file : QuadraticTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/
const assert = require('chai').assert;
const result = require('../../Functional_programs/Quadratic');


describe('Quadratic testing positive ', function () {
    // it('a is valid', function () {
    //     var a = result[0];
    //     assert.isNumber(a ,' a is number');
    // });
    // it('b is valid', function () {
    //     var temperature = result[1];
    //     assert.isTrue(temperature, 'Number ');
    // });
    // it('c is not valid', function () {
    //     var w = result[2];
    //     assert.isTrue(w, 'Number');
    // });

    it('delta is greater than zero', function () {
        var w = result[3];
        assert.isTrue(w > 0, ' output is correct ');
    });

    it('delta is equal to  zero', function () {
        var w = result[3];
        assert.isTrue(w == 0, ' output is correct');
    });
    it('delta is less  than zero', function () {
        var w = result[3];
        assert.isTrue(w < 0, ' output is correct');
    });
});