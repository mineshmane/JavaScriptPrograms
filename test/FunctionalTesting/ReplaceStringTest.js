
/************************************************************************************************
* Execution : 1. default node cmd> mocha test/FunctionalTesting/ReplaceStringTest.js 
* 
* @Purpose : Unit testing of Stringreplacement programs
* @file : replaceStringTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/

const assert = require('chai').assert;

const result = require('../../Functional_programs/StringReplacement');

var strlen = result.length;
var str = result;

describe('StringReplace', function () {
    /*****************************************************
      * @description This Test is input is atleast more than 3 charater 
      * @returns true or false 
      */
    it('User name Coaintainn more than 3 character ', function () {
        assert.isAtLeast(strlen, 4, ' userInput UserName is not valid it is should be greater than 3 character  ');
    });
    /*****************************************************
      * @description This Test is for username conrtain only String 
      * @returns true or false 
      */
    it('user Name should Only string type', function () {
        assert.notTypeOf(str, 'Number');
    });


});