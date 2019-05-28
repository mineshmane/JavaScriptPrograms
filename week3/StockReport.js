/************************************************************************************************
* Execution : 1. default node cmd> node StockReport.js 
* 
* @Purpose : Write a program to read in Stock Names, Number of Share, Share Price. Print a Stock Report with total value of each Stock and the total value of Stock.

* @file : StockReport.js
* @version : 1.0
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 28-05-2019
*    
**********************************/
var utility = require("../week3/OOpUtility")
//var read=require('readline-sync');
var file = require("fs")
var flag = true;
function stockFun() {
    try {
        //read JSON file
        var filedata = file.readFileSync("/home/admin1/JavaScriptPrograms-master/week3/jsonFile/stockDetails.json")
        //convert JSON file into object
        var object = JSON.parse(filedata);
    }
    catch (err) {
        //handle exception
        console.log("File not Found" + err);
        flag = false;
    }

    function stock() {
        if (flag)
            utility.stockReport(object);

    }
    //call function
    stock();
    return object;
}
module.exports = stockFun();