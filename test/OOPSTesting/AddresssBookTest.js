const assert = require('chai').assert;
const result = require('../../week3/BookUtility');
const fs = require('fs');


var test = fs.readFileSync('/home/admin1/JavaScriptPrograms-master/test/OOPSTesting/inputTest.json')
var testing = JSON.parse(test);

describe(' Address book testing', function () {

    it('inputFirstName valid ', function () {
        for (let i = 0; i < testing.string.length; i++) {
            var arr = testing.string[i].stringName;
            
            console.log(arr);
    
            assert.typeOf(arr, 'string');
            let output = result.inputFirstName(arr);
            assert.isTrue(output ===1)
        }
    })
});
