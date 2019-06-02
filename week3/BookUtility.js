
var read = require('readline-sync');
var fs = require('fs');
var utility = require('../week3/OOpUtility')
//var prompt = require('prompt-sync')();
module.exports = {
  //Address Book

  // to read the first name and validate it
  /**
    * @description this method is for input frist Name in book
    * @param Nothing
    * @returns nothing
    */

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
  //zip validation
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

  /**
    * @description this method is for addd person in address book
    * @param json object
    * @returns return nothing
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
  /**
     * @description this method is for edit person 
     * @param json object
     * @returns return updated object
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
      // console.log(personObj[val]);
      this.displayPerson(object, val)

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

  displayPerson(clinique, index) {
    try {
      console.log("\t\t~ first Name : " + clinique.person[index].firstName);
      console.log("\t\t~ Last Name : " + clinique.person[index].lastName);
      console.log("\t\t~ Address : " + clinique.person[index].address);
      console.log("\t\t~ City : " + clinique.person[index].city);
      console.log("\t\t~ Zip :- " + clinique.person[index].zip);
      console.log("\t\t~ Contact Number :- " + clinique.person[index].mobile);
    } catch (error) {
      console.log("* ERROR: " + error);
    }
  },



  /**
  * purpose: to delete a person
  */
  /**
    * @description this method is for delete person 
    * @param json object
    * @returns return nothing
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
    deleteFormat = /^[1-2]\d{0}$/;
    do {
      var ch = read.questionInt("are you sure? \n " + "1.Delete \n 2.exit ");
    } while (deleteFormat.test(ch) == false)


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
  /**
     * @description this method is for saving file
     * @param json object
     * @returns return nothing
     */

  saveFile(object) {

    

    fs.writeFileSync("/home/admin1/JavaScriptPrograms-master/week3/jsonFile/addressBook.json", JSON.stringify(object));
    console.log("save successful :) ");
  },

  /**
  * purpose: to display the object.
  */
  /**
    * @description this method is for display addrress bokk
    * @param json object
    * @returns return nothing
    */
  display(object) {
    var personObj = object.person;
    for (var key in personObj) {
      console.log(personObj[key]);

    }
  },

  /**
   * @description this method is for print all doctors in tabular form
   * @param int value 
   * @returns in value
   */
  displayAddressBook(clinique) {
    console.log("\n\t\t\t\t\t*** All Person Details ***\n");
    console.log("\t-------------------------------------------------------------------------------------------------");
    console.log("\t| First Name \t| Last Name \t|  Address \t|\t City \t|\t Zip \t| Contact \t|");
    console.log("\t-------------------------------------------------------------------------------------------------");
    try {
      for (let i = 0; i < clinique.person.length; i++) {
        console.log("\t| " + clinique.person[i].firstName + ""
          + "\t| " + clinique.person[i].lastName + "\t"
          + "\t| " + clinique.person[i].address + "\t"
          + "\t| " + clinique.person[i].city + "\t"
          + "\t| " + clinique.person[i].zip + "\t"
          + "\t| " + clinique.person[i].mobile + "\t|");
      }
    } catch (error) {
      console.log("* ERROR: " + error);
    }
    console.log("\t-------------------------------------------------------------------------------------------------");
  },

  /**
  * purpose: to sort the object by its name.
  */
  /**
    * @description this method is for address book sort by name 
    * @param json object
    * @returns sorted list
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
  /**
     * @description this method is for sort book by zipcode
     * @param json object
     * @returns sorted list
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
  /**
      * @description this method is for main method 
      * @param json object
      * @returns return nothing
      */
  AddressBook(object, file) {

    try {
      keyFormat = /^[1-9]\d{0}$/;

      do {
        console.log("\n\t\t\t\t*** All Address Details ***\n");
        console.log("\t|===============================ADDRESS BOOK ===========================|");
        console.log("\t|-----------------------------------------------------------------------|");


        console.log("\t|\t\t\t\t1.Add Person\t\t\t\t|\n\t|\t\t\t\t2.Edit Person\t\t\t\t|\n\t|\t\t\t\t3.Delete Person\t\t\t\t|\n\t|\t\t\t\t4.Sort By Name\t\t\t\t|\n\t|\t\t\t\t5.Sort by Zip\t\t\t\t|\n\t|\t\t\t\t6.Display\t\t\t\t|\n\t|\t\t\t\t7.Save file\t\t\t\t|\n\t|\t\t\t\t8.EXIT\t\t\t\t\t|");
        console.log("\t|-----------------------------------------------------------------------|");
        console.log("\t|===============================MY ADDRESS BOOK=========================|");
        console.log();



        var key = read.question('Enter the option:');
      } while (keyFormat.test(key) == false)

      // console.log("****** Personal Address Book ******");
      // var key = Number(read.question("Choose from the given options ")
      //  // "1. Add Person\n2. Edit Person\n3. Delete Person\n4. Sort By Name\n5. Sort by Zip\n6. Display\n7. Save into file\n8. Exit\n"
      // )
      // );

      switch (parseInt(key)) {
        case 1:
          console.log("Add Person");

          this.addPerson(object, file);
          return this.AddressBook(object);
        case 2:
          console.log("Edit Person");

          this.editPerson(object);
          return this.AddressBook(object);
        case 3:
          console.log("Delete Person");

          this.deletePerson(object, file);
          return this.AddressBook(object);
        case 4:
          console.log("Sorty By Name");

          this.sortbyname(object);
          return this.AddressBook(object);
        case 5:
          console.log("Sort By Zip");

          this.sortbyzip(object);
          return this.AddressBook(object);
        case 6:
          console.log("Displaying all Address Book");

          this.displayAddressBook(object);
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

