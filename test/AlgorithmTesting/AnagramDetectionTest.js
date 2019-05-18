/************************************************************************************************
* Execution : 1. default node cmd> mocha test/algorithm/AnagramDetectionTest.js 
* 
* @Purpose : Unit Tsting of Anagram Detection program
* @file : AnagramDetectionTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/

const assert = require('chai').assert;
const result = require('../../AlgorithmPrograms/Anagramdetect');
console.log(result, "       ", result[3]);


describe('AngramDetectionTest', function () {

    /****
       * @description this method test string legth sholud be greater than one 
       * @returns true or false 
       */
    it(' sting length valid ', function () {
        var string1 = result[0];
        assert.isTrue(string1 > 1, 'firstString length should be greater than one character ');
    });
    /****
       * @description this method test string length is valid or not for testing
       * @returns true or false 
       */
    it(' String  length valid', function () {
        var string2 = result[1];
        assert.isTrue(string2 > 1, 'secondString length sholud  be greater than 1 character');
    });
    /****
       * @description this method test UserEntered String contains Alphabets only 
       * @returns true or false 
       */
    it('user Enterd is string  ', function () {
        var str = result[2];
        var str2=result[3];
        assert.isString(str);
        assert.isString(str2,'not sting');
    });
    /****
       * @description This Method checks Programs output is Expected Output or not 
       * @returns true or false 
       */
    it('Output  String Is Anagram ', function () {
        var str = result[4];
        assert.isTrue(str !== 0, 'string is not anagram');
    });

    /****
       * @description This Method checks Programs output is Expected Output or not 
       * @returns true or false 
       */
    it('Output  String Is  not Anagram ', function () {
        var str = result[4];
        assert.isTrue(str == 0, 'string is  anagram');
    });
});


