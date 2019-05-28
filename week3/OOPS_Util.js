
var read=require('readline-sync');
//var prompt = require('prompt-sync')();
module.exports = {
  inventory(object, wg) {
    console.log("Inventory")
    var rice = object.Rice
    var wheat = object.Wheats
    var pulse = object.Pulse
    for (key in rice) {
      console.log(rice[key]);
      console.log("price per kg:" + rice[key].price + "kg");
      console.log("Total quantity:" + wg);
      console.log("Total price for " + rice[key].name + "is:Rs", rice[key].price * wg);
      console.log("");
    }


    for (key in wheat) {
      console.log(wheat[key]);
      console.log("price per kg:" + wheat[key].price + "kg");
      console.log("Total quantity:" + wg);
      console.log("Total price for " + wheat[key].name + "is:Rs", wheat[key].price * wg);
      console.log("");
    }


    for (key in pulse) {
      console.log(pulse[key]);
      console.log("price per kg:" + pulse[key].price + "kg");
      console.log("Total quantity:" + wg);
      console.log("Total price for " + pulse[key].name + "is:Rs", pulse[key].price * wg);
      console.log("");
    }



  },

  //Regular expression

  regex(name, fullname, mobilenumber, dt) {
    var file = require("fs");

    var data = file.readFileSync("/home/abc/mochatest/OOprogram_JS/regData.txt", "utf8");
    //replace the name taken from user 
    data = data.replace("<<name>>", name);
    data = data.replace("<<fullname>>", fullname);
    data = data.replace("<<xxxxxxxxxx>>", mobilenumber);
    data = data.replace("<<xx-xx-xxxx>>", dt);

    console.log();
    //print the modified information
    console.log(data);
  },


  deckOfCards() {
    var suit = ["Spade", "Diamond", "Club", "Heart"];
    var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var n = suit.length * rank.length;
    var cards = [];
    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        cards.push("" + suit[i] + rank[j])

      }
    }

    var temp;
    for (var i = 0; i < n; i++) {
      var shuff = Math.floor(Math.random() * n);
      // console.log(shuff);
      temp = cards[shuff];
      cards[shuff] = cards[i];
      cards[i] = temp;
    }
    console.log("cards output\n" + cards)
    console.log("  ")
    return cards;

  },

  // to distribute 9 cards to 4 people each and print what cards does each person have

  distributingCards() {

    var play = 0;
    var cards = this.deckOfCards();
    var personCards = [[], [], [], []];
    for (let p = 0; p < 4; p++) {

      for (let j = 0; j < 9; j++) {

        personCards[p][j] = cards[j + play];

      }
      play = Math.floor(Math.random() * cards.length);

    }
   
    console.log(" \n cards distributed among the four players are \n");
    console.log("the first players cards are : "  + personCards[0]);

    console.log("the second players cards are : " + personCards[1]);
    console.log("the third players cards are : "  + personCards[2]);
    console.log("the fourth players cards are : " + personCards[3]);
    //return play;
  },


  //Address Book

  // to read the first name and validate it

  inputFirstName() {

    try {
      var read = require('readline-sync');
      var fname = read.question("Enter your first name ");
      if (!isNaN(fname)) throw "Enter valid first name";
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
      var lname = read.question("Enter your last name ");
      if (!isNaN(lname)) throw "Enter valid last name";
      return lname;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }
  },

  // to read the address and validate it

  inputAddress() {
    try {

      var read = require('readline-sync');
      var address = read.question("Enter your address ");
      if (!isNaN(address)) throw "Enter valid address";
      return address;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }
  },

  // to read the city name and validate it

  inputCity() {
    try {
      var read = require('readline-sync');
      var city = read.question("Enter your city ");
      if (!isNaN(city)) throw "Enter valid city name";
      return city;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }
  },

  // to read the zip code and validate it

  inputZip() {
    try {
      var read = require('readline-sync');
      var zip = read.question("Enter the ZIP code");
      if (isNaN(zip)) throw "Enter valid zip code";
      return zip;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }
  },

  // to read the mobile number  and validate it

  inputMobile() {
    try {
      var read = require('readline-sync');
      var mobile = read.question("Enter your mobile number ");
      if (isNaN(mobile)) throw "Enter valid mobile number";
      if (mobile.length != 10) throw "Enter ten digit valid mobile number ";
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

      console.log(personObj);
    }
    catch (err) {
      console.log("ERROR : " + err);
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

    var ch = read.questionInt("are you sure? \n " +
      "1.Delete \n 2.exit ");

    if (ch === 1) {
      personObj.splice(val, 1);
    }
    else
      return;

  },
  /*
  * purpose: to save it into the file
  */

  saveFile(object) {
    file.writeFileSync("/home/admin1/JavaScriptPrograms-master/week3/jsonFile/addressBook.json", JSON.stringify(object));
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
    file.writeFileSync('addressData.json', JSON.stringify(object));

  },

  /**
  * purpose:To sort the object by its zipcode.
  */

  sortbyzip(object) {

    for (let j = 0; j < object.person.length - 1; j++) {

      if (object.person[j].zip > object.person[j + 1].zip) {
        let temp = object.person[j]
        object.person[j] = object.person[j + 1]
        object.person[j + 1] = temp;
      }
    }

    console.log(object);
  },


  /**
  * purpose: In this method we are taking users choice to add, edit or display a person and call the
  *          that method.
  */

  AddressBook(object, read) {
    var read = require('readline-sync');
    try {
      console.log("****** Personal Address Book ******");
      var key = Number(read.question("Choose from the given options " +
          "1. Add Person\n2. Edit Person\n3. Delete Person\n4. Sort By Name\n5. Sort by Zip\n6. Display\n7. Save into file\n8. Exit\n"
        )
      );
      if (isNaN(key)) throw "enter a valid input "
      switch (key) {
        case 1:
          this.addPerson(object);
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
      console.log("ERROR: " + err)
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

