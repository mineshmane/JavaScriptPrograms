
var read = require('readline-sync');
var fs = require('fs');
var utility = require('../week3/OOpUtility')
//var prompt = require('prompt-sync')();
module.exports = {
  //Address Book

  // to read the first name and validate it

  inputFirstName() {

    try {
      var read = require('readline-sync');
      do {
        var fname = read.question("Enter your first name ");
      } while (utility.allLetter(fname) !== true);
      return fname;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }

  },

  // to read the last name and validate it

  inputLastName() {
    try {
      var read = require('readline-sync');
      do {
        var lname = read.question("Enter your last name ");
      } while (utility.allLetter(lname) == false)


      return lname;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }
  },

  // to read the address and validate it

  inputAddress() {
    try {

      do {
        var address = read.question("Enter your Address");
      } while (utility.allLetter(address) == false)
      return address;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }
  },

  // to read the city name and validate it

  inputCity() {
    try {
      do {
        var city = read.question("Enter your city ");
      } while (utility.allLetter(city) == false)

      return city;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }
  },

  // to read the zip code and validate it

  inputZip() {
    try {
      do {
        var zip = read.question("Enter the ZIP code");
      } while (this.zipValid(zip) == false || (zip.length != 6))

      return zip;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }
  },

  zipValid(inputtxt) {
    var letters = /^\d{6}$/;
    if (inputtxt.match(letters)) {
      console.log('Your zip have accepted : ');
      return true;
    }
    else {
      console.log('Please input 6 digits Number 0-9 only');
      return false;
    }
  },

  // to read the mobile number  and validate it

  inputMobile() {
    try {
      do {
        var mobile = read.question("Enter your mobile number ");
      } while (utility.mobileNumber(mobile) == false)
      return mobile;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }
  },


  /**
  * purpose: to a person's details
  */


  addPerson(object) {
    try {

      var personObj = object.person;
      var fname = this.inputFirstName();
      var lname = this.inputLastName();
      var address = this.inputAddress();
      var city = this.inputCity();
      var zip = this.inputZip();
      var mob = this.inputMobile();

      personObj.push({
        firstName: fname,
        lastName: lname,
        address: address,
        city: city,
        zip: zip,
        mobile: mob
      });

      return 1;
      //  console.log(personObj);
      // this.saveFile(personObj, file);
    }
    catch (err) {
      console.log("ERROR : in add person " + err);
    }


  },


  /**
  * purpose: to edit a person's details
  */

  editPerson(object) {
    try {
      var val = -1;
      var personObj = object.person;
      var name = this.inputFirstName();
      var mob = this.inputMobile();

      for (var key in personObj) {
        if (personObj[key].firstName == name && personObj[key].mobile == mob) {
          val = key;
        }
      }

      if (val === -1) {
        console.log("record not present ");
        return;

      }

      console.log("the persons details are");
      console.log(personObj[val]);

      var ch = read.questionInt("choose from the given options \n " +
        "1.edit address \n 2.edit city \n 3.edit zipcode \n 4.edit mobile \n");
      if (isNaN(ch)) throw "enter a valid input"

      switch (ch) {
        case 1: var address = this.inputAddress();
          personObj[val].address = address;

          break;
        case 2: var city = this.inputCity();
          personObj[val].city = city;
          break;

        case 3: var zip = this.inputZip();
          personObj[val].zip = zip;
          break;

        case 4: var mobile = this.inputMobile();
          personObj[val].mobile = mobile;
          break;

        default: console.log("wrong input ");
          break;


      }
    }
    catch (err) {
      console.log("ERROR: " + err)
    }

  },


  /**
  * purpose: to delete a person
  */

  deletePerson(object) {
    var val = -1;
    var personObj = object.person;
    var name = this.inputFirstName();
    var mob = this.inputMobile();

    for (var key in personObj) {
      if (personObj[key].firstName == name && personObj[key].mobile == mob) {
        val = key;
      }
    }

    if (val === -1) {
      console.log("record not present ");
      return;

    }

    console.log("the persons details are");
    console.log(personObj[val]);

    var ch = read.questionInt("are you sure? \n " + "1.Delete \n 2.exit ");

    if (ch === 1) {
      personObj.splice(val, 1);
      console.log(" deleted successfully please save the file");

    }
    else
      console.log(personObj[val], " record not deleted");

    return;

  },
  /*
  * purpose: to save it into the file
  */

  saveFile(object) {

    //   const jsonString = JSON.stringify(object);
    // fs.writeFile(file, jsonString, err => {
    // 	if (err) {
    // 		console.log('Error writing file', err);
    // 	} else {
    // 		console.log('Successfully wrote file');
    // 	}
    // });

    fs.writeFileSync("/home/admin1/JavaScriptPrograms-master/week3/jsonFile/addressBook.json", JSON.stringify(object));
    console.log("save successful :) ");
  },

  /**
  * purpose: to display the object.
  */

  display(object) {
    var personObj = object.person;
    for (var key in personObj) {
      console.log(personObj[key]);

    }
  },

  /**
  * purpose: to sort the object by its name.
  */

  sortbyname(object) {

    for (let j = 0; j < object.person.length - 1; j++) {
      if (object.person[j].lastName.localeCompare(object.person[j + 1].lastName) == 1) {
        let temp = object.person[j];
        object.person[j] = object.person[j + 1];
        object.person[j + 1] = temp;
      }

    }
    console.log(object)
    // file.writeFileSync('addressData.json', JSON.stringify(object));

  },

  /**
  * purpose:To sort the object by its zipcode.
  */

  sortbyzip(object) {


    for (let j = 0; j < object.person.length - 1; j++) {

      if (object.person[j].zip > object.person[j + 1].zip) {
        let temp = object.person[j];
        object.person[j] = object.person[j + 1];
        object.person[j + 1] = temp;
      }
    }

    console.log(object);
  },


  /**
  * purpose: In this method we are taking users choice to add, edit or display a person and call the
  *          that method.
  */

  AddressBook(object, file) {

    try {
      console.log("****** Personal Address Book ******");
      var key = Number(read.question("Choose from the given options " +
        "1. Add Person\n2. Edit Person\n3. Delete Person\n4. Sort By Name\n5. Sort by Zip\n6. Display\n7. Save into file\n8. Exit\n"
      )
      );
      if (isNaN(key)) throw "enter a valid input "
      switch (key) {
        case 1:
          this.addPerson(object, file);
          return this.AddressBook(object);
        case 2:
          this.editPerson(object);
          return this.AddressBook(object);
        case 3:
          this.deletePerson(object, file);
          return this.AddressBook(object);
        case 4:
          this.sortbyname(object);
          return this.AddressBook(object);
        case 5:
          this.sortbyzip(object);
          return this.AddressBook(object);
        case 6:
          this.display(object);
          return this.AddressBook(object);
        case 7:
          this.saveFile(object, file);
          return this.AddressBook(object);
        case 8:
          console.log("Exiting.. ");
          return;
        default:
          console.log("Wrong Input  ");
          return this.AddressBook(object);
      }
    }
    catch (err) {
      console.log("ERROR: in main aaddrees book " + err)
    }
  },

  //Stock Report

  stockReport(object) {
    try {
      var stock = object.Stock;
      for (key in stock) {
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
    return stock;
  },



}

