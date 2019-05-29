const assert = require('chai').assert;
const result = require('../../week3/OOpUtility');

const fs = require('fs');
var data = fs.readFileSync("/home/admin1/JavaScriptPrograms-master/week3/jsonFile/Inventory.json");
//convert JSON file into object
var object = JSON.parse(data);
var test = fs.readFileSync('/home/admin1/JavaScriptPrograms-master/test/OOPSTesting/inputTest.json')
var testing = JSON.parse(test);
var arr = ['rahul', '^%$$##', 'true', undefined, 'null', 0]

describe('Invetoirydata() Method  arguent input by user', function () {
    it('method test when integer value input', function () {

        for (let i = 0; i < testing.number.length; i++) {
            var arr = testing.number[i].inputWeight;

            console.log(arr);

            assert.typeOf(arr, 'number');
            let output = result.inventory(object, arr);
            assert.isTrue(output > 2)
        }

    });

    it('method test when  string input', function () {

        let output = result.inventory(object, arr[1]);
        assert.isAbove(output, '2')

    })
    it('method test special charactor', function () {

        let output = result.inventory(object, arr[2]);
        assert.isAbove(output, '2')

    })
    it('method test when input is boolean', function () {

        let output = result.inventory(object, arr[3]);
        assert.isAbove(output, '2')

    })
    it('method test when input is undefiened', function () {

        let output = result.inventory(object, arr[4]);
        assert.isAbove(output, '2')

    });
    it('method test when input  is null', function () {

        let output = result.inventory(object, arr[5]);
        assert.isAbove(output, '2')

    });

    it('When input is zero', function () {
        let output = result.inventory(object, arr[6])
        assert.isTrue(output === 0);
    });


    it("Check File empty or not", function () {

        assert.isTrue(isNaN(data));
    });

});
describe(' json input for Rice ', function () {

    it("Name should be string only", function () {

        for (let i = 0; i < object.Rice.length; i++) {
            var arr = object.Rice[i].name;
            assert.typeOf(arr, 'string');

        }
    });

    it("price value should be number only", function () {

        for (let i = 0; i < object.Rice.length; i++) {
            var arr = object.Rice[i].price;


            assert.typeOf(arr, 'number');
        }
    });

});
describe('jsonInput For Wheats ', function () {
    it("price value should be number only", function () {

        for (let i = 0; i < object.Wheats.length; i++) {
            var arr = object.Wheats[i].price;


            assert.typeOf(arr, 'number');
        }
    });

    it("Name should be string only", function () {

        for (let i = 0; i < object.Wheats.length; i++) {
            var arr = object.Wheats[i].name;
            assert.typeOf(arr, 'string');

        }
    });

});
describe('jsonInput For Pulse ', function () {
    it("price value should be number only", function () {

        for (let i = 0; i < object.Pulse.length; i++) {
            var arr = object.Pulse[i].price;


            assert.typeOf(arr, 'number');
        }
    });

    it("Name should be string only", function () {

        for (let i = 0; i < object.Pulse.length; i++) {
            var arr = object.Pulse[i].name;
            assert.typeOf(arr, 'string');

        }
    });

});