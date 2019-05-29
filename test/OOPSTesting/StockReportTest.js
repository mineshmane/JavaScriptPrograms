const assert = require('chai').assert;
const app = require('../../week3/OOpUtility');
const fs = require('fs');
var data = fs.readFileSync("/home/admin1/JavaScriptPrograms-master/week3/jsonFile/stockDetails.json");
//convert JSON file into object
var object = JSON.parse(data);
var test = fs.readFileSync('/home/admin1/JavaScriptPrograms-master/test/OOPSTesting/inputTest.json')
var testing = JSON.parse(test);

describe('stockReport', function () {
    it(' passing inpout without parse object ', function () {
        var resulet = app.stockReport(object);
        assert.isTrue(resulet === 1)
    })
})

describe(' json input for Stock positive testcases', function () {

    it("Name should be string only", function () {

        for (let i = 0; i < object.Stock.length; i++) {
            var arr = object.Stock[i].stock_name;
            console.log(object.Stock[i].stock_name);

            assert.typeOf(arr, 'string');

        }
    });

    it("price value should be number only", function () {

        for (let i = 0; i < object.Stock.length; i++) {
            console.log(object.Stock[i].Num_of_shares);

            var arr = object.Stock[i].Num_of_shares;


            assert.typeOf(arr, 'number');
        }
    });
    it("price value should be number only", function () {

        for (let i = 0; i < object.Stock.length; i++) {
            var arr = object.Stock[i].share_price;
            console.log(object.Stock[i].share_price)

            assert.typeOf(arr, 'number');
        }
    });

});


describe(' json input for Stock positive testcases', function () {

    it("Name should be string only", function () {

        for (let i = 0; i < testing.Stock.length; i++) {
            var arr = testing.Stock[i].stock_name;
            console.log(testing.Stock[i].stock_name);

            assert.typeOf(arr, 'string');

        }
    });

    it("price value should be number only", function () {

        for (let i = 0; i < testing.Stock.length; i++) {
            console.log(testing.Stock[i].Num_of_shares);

            var arr = testing.Stock[i].Num_of_shares;


            assert.typeOf(arr, 'number');
        }
    });
    it("price value should be number only", function () {

        for (let i = 0; i < testing.Stock.length; i++) {
            var arr = testing.Stock[i].share_price;
            console.log(testing.Stock[i].share_price)

            assert.typeOf(arr, 'number');
        }
    });

});

