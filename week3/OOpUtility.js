


module.exports = {

  /**
   * @description this method is for print inventory detils of rice and wheats pulses
   * @param int value 
   * @returns in value
   */
  inventory(object, wg) {
    console.log(" input ", wg);

    if (!isNaN(wg) && wg > 0) {
      console.log("Inventory")
      var rice = object.Rice
      var wheat = object.Wheats
      var pulse = object.Pulse
      for (let i in rice) {
        console.log(rice[i]);
        console.log("price per kg:" + rice[i].price + "kg");
        console.log("Total quantity:" + wg);
        console.log('Total price for ' + rice[i].name + "is:Rs", rice[i].price * wg);
        console.log("");
      }


      for (let i in wheat) {
        console.log(wheat[i]);
        console.log("price per kg:" + wheat[i].price + "kg");
        console.log("Total quantity:" + wg);
        console.log("Total price for " + wheat[i].name + "is:Rs", wheat[i].price * wg);
        console.log("");
      }


      for (let i in pulse) {
        console.log(pulse[i]);
        console.log("price per kg:" + pulse[i].price + "kg");
        console.log("Total quantity:" + wg);
        let total = (pulse[i].price * wg)
        console.log("Total price for " + pulse[i].name + "is:Rs", total);
        console.log("");
        return total;
      }

    } else {
      console.log(" input weigth should be number and greaterv than 0")
    }

  },

  //Regular expression
  /**
   * @description this method is for regular expression replace  massage
   * @param name fullname mobilenuber date
   * @returns in value
   */

  regExp(name, fullname, mobilenumber, dt) {
    var file = require("fs");
    try {

      if (!isNaN(mobilenumber)) {
        if (this.allLetter(name) && this.allLetter(fullname)&&this.digitsOnly(mobilenumber)) {

          
            var filedata = file.readFileSync("/home/admin1/JavaScriptPrograms-master/week3/jsonFile/RegData.json");
            var str2 = JSON.parse(filedata);
          
          //var str = data.asText();
          var str = str2.usename;
          // var str=str2;
          console.log(" before replacment of json object: ");

          console.log(str);
          //replace the name taken from user 
          str = str.replace("<<name>>", name);
          str = str.replace("<<full name>>", fullname);
          str = str.replace("xxxxxxxxxx", mobilenumber);
          str = str.replace("dd/mm/yyyy", dt);

          console.log()
          //print the modified information
          console.log(" After Replace,ent of json Mesasge: ");

          console.log(str);
          return 1;
        }
      } else {
        console.log(" input is wrong ");

      }
    } catch (error) {
      console.log(" input are wrongs");

    }

  },
  /**
   * @description this method is for write file method 
   * @param string path  of file , data to write it on file
   * @returns in value
   */
  writeFile(filePath, data) {
    const fs = require('fs');
    fs.writeFile(filePath, data, function (err) {
      if (err) {
        return console.log(err);
      }

    });
  },
  /**
   * @description this method is for string validation it contains only charactor 
   * @param string string
   * @returns true /false
   */

  allLetter(inputtxt) {
    var letters = /[a-zA-Z]+$/;
    if (inputtxt.match(letters) && (inputtxt.length >= 3)) {
      console.log('Your name have accepted :');
      return true;
    }
    else {
      console.log('Please input alphabet characters only and more than 3 digits');
      return false;
    }
  },

  /**
   * @description this method is for userInput digit Validation
   * @param int value 
   * @returns true /false
   */
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

  /**
   * @description this method is for print stock report using object of json parser
   * @param object of json parser
   * @returns stock values
   */
  stockReport(object) {
    try {
      var stock = object.Stock;
      for (let key in stock) {
        console.log("\n");
        console.log("stock name : " + stock[key].stock_name);
        console.log("price of each share: " + stock[key].share_price);
        console.log("Total number of shares : " + stock[key].Num_of_shares);
        console.log("Total value of  " + stock[key].Num_of_shares
          + " shares of " + stock[key].stock_name
          + " is :Rs" + stock[key].Num_of_shares * stock[key].share_price
        );
      }
    }
    catch (err) {
      console.log('ERROR');
    }
    
    
    return 1;
  },





}

