/************************************************************************************************
* Execution : 1. default node cmd> node RegilarExpression.js 
* 
* @Purpose :Modify the Message date name and full in json file using replace method Regular expression program.
*@description:Read in the following message: Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016. Use Regex to replace name, full name, Mobile#, and Date with proper value.

* @file :  RegularExpression.js 
* @version : 1.0
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 27-05-2019
*    
**********************************/
var util = require("../week3/OOpUtility");
var read = require("readline-sync");

function regExpr() {
    try {
        //taking input from user

        do {
            console.log("Enter Name : ");
            var name = read.question();


        } while (util.allLetter(name) == false)

        do {
            console.log("Enter fullName : ");
            var fullName = read.question();

        } while (util.allLetter(fullName) == false)

        do {
            var mobileNumber = read.question("Enter valid mobile number: ");
        } while (util.digitsOnly(mobileNumber) == false)
        //set date
        var ds = new Date();
        dt = ds.getDate() + "/" + (ds.getMonth() + 1) + "/" + ds.getFullYear();

        //call regex function from util
        util.regExp(name, fullName, mobileNumber, dt);
    }
    catch (err) {
        //throw exception
        console.log('ERROR : ', err);
        //regExpr();
    }
    var arr = [];
    arr.push(name);
    arr.push(fullName);
    arr.push(mobileNumber);
    return arr;
}

module.exports = regExpr();

