/************************************************************************************************
* Execution : 1. default node cmd> mocha test/BankCounterTest.js 
* 
* @Purpose : Unit testing of bankCashCounter using Queue Program
* @file : BankCounterTest.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 22-05-2019
*    
**********************************/

const assert = require('chai').assert;
const result = require('../../week2/DataStructure/BankCounter');
console.log(result);

describe('BankCounter Test cases', function () {
    /********************************************************
    * @description this cash counter queue size
    * @returns true or false 
    */
    it(' valid queue Size', function () {
        assert.isTrue(result[0] > 0, 'queue size is not valid ');
    });
    /********************************************************
    * @description this test widrwa transaction when did it retun true
    * @returns true or false 
    */
    it('withdraw transacton is done', function () {
        var amount = result[2];
        var totalAmount = result[1];
        assert.isTrue(amount > 0 && amount < totalAmount, ' amount should be less than total amount in acciunt');
    });
    /********************************************************
    * @description this tescase for withDraw operation success
    * @returns true or false 
    */
    it('WithDraw operation success ', function () {
        var withAmount = result[2];
        var oldAmt = result[1];
        var amount = result[4];
        console.log(oldAmt, withAmount, amount);

        assert.isTrue(oldAmt - withAmount === amount, ' dposite amount should be >0');
    });
    /********************************************************
    * @description this test for credit transaction
    * @returns true or false 
    */
    it('credit  transacton is done', function () {
        var amount = result[3];
        var totalAmount = result[1];
        assert.isTrue(amount > 0 && amount < 100000, ' amount should be less than total amount in acciunt');
    });
    /********************************************************
    * @description Testcase for Deposit operation success
    * @returns true or false 
    */
    it('deposite operation success ', function () {
        var depoAmount = result[3];
        var oldAmt = result[1];
        var amount = result[4];
        console.log(oldAmt, depoAmount, amount);

        assert.isTrue(oldAmt + depoAmount === amount, ' dposite amount should be >0');
    })

})