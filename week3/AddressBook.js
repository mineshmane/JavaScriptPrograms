
var util = require('../week3/OOPS_Util');
var fs = require('fs');
var read = require('readline-sync');
function addressB(){
try {
    //read json file and create its object
    var file = fs.readFileSync("/home/admin1/JavaScriptPrograms-master/week3/jsonFile/addressBook.json", "utf8");
    var object = JSON.parse(file);
    //calling the function 
    util.AddressBook(object, read);
}
//execute when error occured
catch (err) {
    console.log("ERROR : " + err);
}
return object;
}
module.exports=addressB();