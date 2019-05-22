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
    it('file is found ', function () {
        assert.isNotNull(result, ' file is not found ');
    })
})