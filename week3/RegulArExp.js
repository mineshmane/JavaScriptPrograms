
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
        util.regex(name, fullName, mobileNumber, dt);
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

