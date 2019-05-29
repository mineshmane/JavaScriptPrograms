const assert = require('chai').assert;
const Result = require('../../week3/OOpUtility');



const fs = require('fs');
var data = fs.readFileSync("/home/admin1/JavaScriptPrograms-master/week3/jsonFile/RegData.json");
//convert JSON file into object
var object = JSON.parse(data);
var test = fs.readFileSync('/home/admin1/JavaScriptPrograms-master/test/OOPSTesting/inputTest.json')
var testing = JSON.parse(test);

    console.log(testing);
    
describe('Regular expression testing for first Name', function () {
    it('name is string',function(){
        for (let i = 0; i < testing.string.length; i++) {
            var arr = testing.string[i].stringName;
            
    
            console.log(arr);
    
            assert.typeOf(arr, 'string');
            let output = Result.regExp(arr,arr,95032345267,12365498);
            assert.isTrue(output ===1)
        }
    })
    it('name is number',function(){
        for (let i = 0; i < testing.string.length; i++) {
            var arr = testing.number[i].intNum;
    
            console.log(arr);
    
            assert.typeOf(arr, 'string');
            let output = Result.regExp(arr,"123356455",1203654789,12365498);
            assert.isTrue(output ===1)
        }
    })
    it('name is boolean',function(){
        for (let i = 0; i < testing.boolean.length; i++) {
            var arr = testing.boolean[i].bool;
    
            console.log(arr);
    
            assert.typeOf(arr, 'string');
            let output = Result.regExp(arr,"minesh",1203654789,12365498);
            assert.isTrue(output ===1)
        }
    })
    it('name is null',function(){
        for (let i = 0; i < testing.Null.length; i++) {
            var arr = testing.Null[i].nullValue;
    
            console.log(arr);
    
            assert.typeOf(arr, 'string');
            let output = Result.regExp(arr,"minesh",1203654789,12365498);
            assert.isTrue(output ===1)
        }
    })
    it('name is undefined',function(){
        for (let i = 0; i < testing.Undefine.length; i++) {
            var arr = testing.Undefine[i].UndefineValue;
    
            console.log(arr);
    
            assert.typeOf(arr, 'string');
            let output = Result.regExp(arr,"minesh",1203654789,12365498);
            assert.isTrue(output ===1)
        }
    })
    
    
    

    //let name = Result.regExp(testing);
})
