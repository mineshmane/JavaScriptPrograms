/************************************************************************************************
* Execution : 1. default node cmd> mocha test/algorithm/TempConvertorTest.js 
* 
* @Purpose : Unit Testing of Tmperature Convertor progrm
* @file : TempConvertorTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/


var assert = require('chai').assert;
var result = require('../../AlgorithmPrograms/TempConvertor');

describe('TemperatureConvertor', function () {
    /****
       * @description This Test is for temperaure should be number 
       * @returns true or false 
       */
    it('temperatuire should number ', function () {
        assert.isNumber(result[1], 'Number');
        console.log(result[1]);

    });
    /****
      * @description This Test is for temperaure should be number 
      * @returns true or false 
      */
    it('you choice is convert  celcius to farhenheit ', function () {

        var res = result[0];
        assert.equal(res, 'c', ' you Entered  f so this tet is for celcius ');

        console.log(res);


    });
    /****
      * @description This Test is for your choice of conversion of temp valid or not 
      * @returns true or false 
      */
    it('your choice is convert farhenheit to celcius  ', function () {
        var res = result[0];
        console.log(res);

        assert.equal(res, 'f', ' your choice is c so this test is for farhenheit ');

    });
});