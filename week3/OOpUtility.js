

//var read=require('readline-sync');
//var prompt = require('prompt-sync')();
module.exports = {
  inventory(object, wg) {
    console.log("Inventory")
    var rice = object.Rice
    var wheat = object.Wheats
    var pulse = object.Pulse
    for (i in rice) {
      console.log(rice[i]);
      console.log("price per kg:" + rice[i].price + "kg");
      console.log("Total quantity:" + wg);
      console.log('Total price for ' + rice[i].name + "is:Rs", rice[i].price * wg);
      console.log("");
    }


    for (i in wheat) {
      console.log(wheat[i]);
      console.log("price per kg:" + wheat[i].price + "kg");
      console.log("Total quantity:" + wg);
      console.log("Total price for " + wheat[i].name + "is:Rs", wheat[i].price * wg);
      console.log("");
    }


    for (i in pulse) {
      console.log(pulse[i]);
      console.log("price per kg:" + pulse[i].price + "kg");
      console.log("Total quantity:" + wg);
      console.log("Total price for " + pulse[i].name + "is:Rs", pulse[i].price * wg);
      console.log("");
    }



  },

  //Regular expression

  regex(name, fullname, mobilenumber, dt) {
    var file = require("fs");

    var filedata = file.readFileSync("/home/admin1/JavaScriptPrograms-master/week3/RegData.json");
    //replace the name taken from user 

    //console.log(values);
    //console.log(filedata);
    
    var str2 = JSON.parse(filedata);
    //var str = data.asText();
    var str = str2.usename;
   // var str=str2;
   console.log(" before replacment of json object: ");
   
    console.log(str);

    str = str.replace("<<name>>", name);
    str = str.replace("<<full name>>", fullname);
    str = str.replace("xxxxxxxxxx", mobilenumber);
    str = str.replace("dd/mm/yyyy", dt);

    console.log()
    //print the modified information
    console.log(" After Replace,ent of json Mesasge: ");
    
    console.log(str);
  },
  writeFile(filePath, data) {
    const fs = require('fs');
    fs.writeFile(filePath, data, function (err) {
      if (err) {
        return console.log(err);
      }

    });
  },

  allLetter(inputtxt) {
    var letters = /[a-zA-Z]+$/;
    if (inputtxt.match(letters)) {
      console.log('Your name have accepted :');
      return true;
    }
    else {
      console.log('Please input alphabet characters only');
      return false;
    }
  },
  digitsOnly(inputtxt) {
    var letters = /^\d{10}$/;
    if (inputtxt.match(letters)) {
      console.log('Your Number have accepted : ');
      return true;
    }
    else {
      console.log('Please input 10 digits Number 0-9 only');
      return false;
    }
  },





}

