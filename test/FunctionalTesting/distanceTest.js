/************************************************************************************************
* Execution : 1. default node cmd> mocha test/FunctionalTesting/DistanceTest.js 
* 
* @Purpose : Unit testing of EuclideanDistance Program
* @file : DistanceTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 14-05-2019
*    
**********************************/



const assert = require('chai').assert;
const dist_res = require('../../Functional_programs/Distance');

console.log(" result", dist_res, " erro", dist_res[0]);

describe('distance', function () {
    /****
       * @description this method test user input y should be Integer value 
       * @param Int x and y
       * @returns true or false 
       */
    it(' y should be integer value ', function () {
        var res = dist_res[1];
        console.log(" result ", res);

        assert.isNumber(res, 'Number',' y is not nummmber Enter Numher');
    });

    it(' x should be integer value ', function () {
        var res2 = dist_res[2];
        console.log(" result ", res2);

        assert.isNumber(res2, 'Number');
    });
    /********************************************************
       * @description this mehtod test user input x and y should not be zero
       * @returns true or false 
       */
    it(' x and y  should not be zero ', function () {
        console.log(dist_res);
        var res3 = dist_res[1];
        assert.isTrue(res3 != 0,' x or y is zero please Enter valid input');
    });
    /*************************************************************
      * @description this method test  the output of Distance should not negative
      * @returns true or false 
      */

    it('output is not negative  ', function () {
        console.log(dist_res);
        var res4 = dist_res[0];
        assert.isFalse(res4 < 0,' distance should not be negative');
    });
    /**********************************************************************
       * @description this method test the outputshould not be undefined
       * @returns true or false 
       */
    it(' distance should not undefined ', function () {
        console.log(dist_res);
        var res5 = dist_res[0];
        assert.isTrue(res5 != undefined);
    });
    /****
       * @description this method test the distance should be not zero its hreater than zero
       * @returns true or false 
       */
    it(' distance should not be negative  ', function () {
        console.log(dist_res);
        var res4 = dist_res[0];
        assert.isAbove(res4, 0);
    });

});