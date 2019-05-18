/************************************************************************************************
* Execution : 1. default node cmd> mocha test/FunctionalTesting/QuadraticTest.js 
* 
* @Purpose : Unit testing of  quadratic equation 

* @file : QuadraticTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
*****************************/
const assert = require('chai').assert;
const result = require('../../Functional_programs/Quadratic');


describe('Quadratic testing positive ', function () {
    /********************************************************
     * @description this mehtod test user imput is valid or not
     * @returns true or false 
     */
    it('a is valid', function () {
        var a = result[0];
        assert.isNumber(a, ' a is number');
    });
    /********************************************************
     * @description this mehtod test second mber b of quadratic equationis valid or not 
     * @returns true or false 
     */
    it('b is valid', function () {
        var temperature = result[1];
        assert.isNumber(temperature, 'Number ');
    });
    /********************************
     * @description this mehtod test uwerinput valid or not
     * @returns true or false 
     */
    it('c is  valid', function () {
        var w = result[2];
        assert.isNumber(w, 'Number');
    });
    /********************************************************
     * @description this mehtod test output of program= delta  is greater than zero then case passes
     * @returns true or false 
     */

    it('delta is greater than zero', function () {
        var delta = result[3];
        assert.isTrue(delta > 0, ' output is correct ');
    }); /********************************************************
    * @description this mehtod test output of program = delta is equals to zero then it return true
    * @returns true or false 
    */

    it('delta is equal to  zero', function () {
        var delta = result[3];
        assert.isTrue(delta == 0, ' output is correct');
    });
    /********************************************************
     * @description this mehtod test output ogf programs= delta is less than  zero it return true
     * @returns true or false 
     */
    it('delta is less  than zero', function () {
        var delta = result[3];
        assert.isTrue(delta < 0, ' output is correct');
    });
});