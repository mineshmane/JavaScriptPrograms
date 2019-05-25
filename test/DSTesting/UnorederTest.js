/************************************************************************************************
* Execution : 1. default node cmd> mocha test/UnordereTest.js 
* 
* @Purpose : Unit testing of Unorderedlist Program
* @file : UnorederTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 22-05-2019
*    
**********************************/


const assert = require('chai').assert;
const result = require('../../week2/DataStructure/UnorderedList');
describe('positive', function () {
    /********************************************************
      * @description this tescase return true file is not null
      * @returns true or false 
      */
    it('file  is not null ', function () {
        var r = result[0];
        assert.isTrue(r !== null);
    });

    /********************************************************
      * @description this tescase return true when user searched elemtn found in file 
      * @returns true or false 
      */
    it('search string Element is valid ', function () {
        var r = result[1];
        assert.isTrue(r !== null, ' search Element is should not be null found ')
    })

    /********************************************************
      * @description this tescase return true when user serched element not found in list
      * @returns true or false 
      */
    it('search element found in list ', function () {
        var r = result[2];
        assert.isTrue(r == true, ' element not found ')
    })


})
describe('OrderedList negative testing', function () {
    /********************************************************
     * @description this tescase return true when file is empty or file not found exception
     * @returns true or false 
     */
    it('string is  null ', function () {
        var r = result[0];
        assert.isTrue(r == undefined,' file contain values ');
    });
    /********************************************************
      * @description this tescase return true whensearched element not found then it return true
      * @returns true or false 
      */
    it('search element not found in list ', function () {
        var r = result[2];
        assert.isTrue(r == false, ' element iss found ')
    })


});