/************************************************************************************************
* Execution : 1. default node cmd> mocha test/FunctionalTesting/SumOfThreeTest.js 
* 
* @Purpose : Unit testing of SumOfThreeNumbers Programs finding triplets pairs 
* @file : SumOfThreeTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 11-05-2019
*    
**********************************/

const assert = require('chai').assert;
const result = require('../../Functional_programs/SumOfThree');

describe('SumOfThree', function () {
   /*****************************************************
     * @description This Test is for arraySize should be 3 or more
     * @returns true or false 
     */
   it('Array size is valid   ', function () {
      var a = result[0];
      assert.isTrue(a > 2, ' array size is not valid please enter at least three 3');
   });
   /*****************************************************
    * @description This Test is for username conrtain only String 
    * @returns true or false 
    */

   it('Array size is less than Three  ', function () {

      assert.isTrue(result[0] < 3, ' array size is valid it is more than 3 ');
   });

   /*****************************************************
    * @description This Test is for Output Contain Triplets Pairs
    * @returns true or false 
    */
   it(' Triplets Pairs  found  ', function () {

      assert.isTrue(result[1] > 0, ' output is valid no triplts pairs found ');
   });

   /*****************************************************
    * @description This Test is for output of program doesNot Conatin any Triplet pair 
    * @returns true or false 
    */

   it('No Triplets Pair found  ', function () {

      assert.isTrue(result[1] == 0, ' Triplets pairs found ');
   });
});