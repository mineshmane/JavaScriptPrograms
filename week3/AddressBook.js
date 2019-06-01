
/******************************************************************************
 *  Execution       :cmd> node AddressBook.js
 *                      
 *  purpose         :To print Address BOOk managment system.    
 *
 *  @description    :To create a JSON file having  Details for persons information
 *                    
 *  @file           :AddressBook.js
 *  @overview       :To manage address book add ,delete saech,sort address book. 
                    
 *  @author         :Minesh Mane (mineshmane94@gmail.com)
 *  @version        :1.0
 *  @since          :1-06-2019
 *
 ******************************************************************************/


var util = require('../week3/BookUtility');
var fs = require('fs');
var read = require('readline-sync');

function addressB() {
    try {
        //read json file and create its object
        var file = fs.readFileSync("/home/admin1/JavaScriptPrograms-master/week3/jsonFile/addressBook.json", "utf8");
        var object = JSON.parse(file);
        //calling the function 

        util.AddressBook(object);
    }
    //execute when error occured
    catch (err) {
        console.log("ERROR : " + err);
    }
    return object;
}
module.exports = addressB();