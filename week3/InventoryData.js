

var util = require("./OOpUtility");
var fs = require("fs");
var flag = true;
var read = require('readline-sync')
function inventMgnt() {
    try {
        //take input from user
        var inputWeight = read.question("Enter the total weight");
        //read the JSON file
        var data = fs.readFileSync("/home/admin1/JavaScriptPrograms-master/week3/Inventory.json");
        //convert JSON file into object
        var object = JSON.parse(data);
      //  console.log("object just onlu", object)
     console.log("object type of : ", typeof (object));
    }
    catch (err) {
        //handle exception
        console.log("file not found ");
        flag = false;
    }

    function inventoryData() {
        //calling the inventory function
        if (flag)
            util.inventory(object, inputWeight);

    }
    //callback to the function
    inventoryData();

    var arr = [];
    arr.push(inputWeight);
    arr.push(data);
    return arr;
}
module.exports = inventMgnt();