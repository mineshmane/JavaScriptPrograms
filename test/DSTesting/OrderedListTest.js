/************************************************************************************************
* Execution : 1. default node cmd> node OrderedListTest.js 
* 
* Purpose :Unit testing of OrderList p[rogram
* 
* @file : OrderedListTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 25-05-2019
*
*************************************************************************************************/


const assert = require('chai').assert;
const result = require('../../week2/DataStructure/OrderedList');

describe('Usnit Testing of orderedList', function () {
    /********************************************************
    * @description this tescase return true file is not null
    * @returns true or false 
    */
    it('string is not null ', function () {
        var r = result[0];
        assert.isTrue(r !== null);
    });
    /********************************************************
    * @description this testcase return true when search element found in list   
    * @returns true or false 
    */
    it('search element found in list ', function () {
        var r = result[3];
        assert.isTrue(r == true, ' element not found ')
    })
    /********************************************************
    * @description this tescase return true when users choice to element by addAtFirst() 
    * @returns true or false 
    */
    it('choice of usser is add first method', function () {
        var r = result[2];
        console.log(r);

        assert.isTrue(r == 1), ' user choice iss different ';
    });
    /********************************************************
    * @description this tescase return true when users choice to element by addAtPosition() 
    * @returns true or false 
    */
    it('choice of usser is insertAtPosition method', function () {
        var r = result[2];
        console.log(r);

        assert.isTrue(r == 2), ' user choice iss different ';
    });
    /********************************************************
    * @description this tescase return true when users choice to element by addAtMiddle() 
    * @returns true or false 
    */
    it('choice of usser is addMiddle method', function () {
        var r = result[2];
        console.log(r);

        assert.isTrue(r == 3), ' user choice iss different ';
    });
    /********************************************************
    * @description this tescase return true when users choice to element by addAtLast() 
    * @returns true or false 
    */
    it('choice of usser is addAtLast method', function () {
        var r = result[2];
        console.log(r);

        assert.isTrue(r == 4), ' user choice iss different ';
    });


})
describe('OrderedList negative testing', function () {
    /********************************************************
    * @description this tescase return true file is null
    * @returns true or false 
    */
    it('file is null ', function () {
        var r = result[0];
        assert.isTrue(r == undefined, ' file Is not Empty it contains Unodered data');
    });
    /********************************************************
    * @description this tescase return true when user searched element not found in file
    * @returns true or false 
    */
    it('search element not found in list ', function () {
        var r = result[3];
        assert.isTrue(r == false, ' element iss found ')
    })

})