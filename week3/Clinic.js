
/******************************************************************************
 *  Execution       :cmd> node Clinic.js
 *                      
 *  purpose         :To print doctor patient report within the clinique managment system.    
 *
 *  @description    :To create a JSON file having  Details for Doctors , patients , to managee Appointent of Doctor for pateint
 *                    
 *  @file           :clinic.js
 *  @overview       :To manage patient and doctor list then allow patient to take appointment from 
                      doctor also maintain patient doctor report.
 *  @author         :Minesh Mane (mineshmane94@gmail.com)
 *  @version        :1.0
 *  @since          :29-05-2019
 *
 ******************************************************************************/
///var prompt = require('prompt-sync')();
var read = require('readline-sync');
var fs = require('fs');
const utitlity = require('../week3/ClinicUtility')
function cliniqueFun() {
    //check format of input given by the user
    // nameFormat = /[a-z]/g;
    // contactFormat = /[0-9]/g;
    var option;
    fs.readFile('/home/admin1/JavaScriptPrograms-master/week3/jsonFile/Clinic.json', function (err, data) {
        if (err) throw err
        /**
         * parse data using json
         */
        var clinique = JSON.parse(data);
        do {
            console.log("\n\t\t\t\t*** All Clinic Details ***\n");
            console.log("\t|===============================Clinic Management=======================|");
            console.log("\t|-----------------------------------------------------------------------|");


            console.log("\t|\t\t\t\t1.ADD APPOINTMENT\t\t\t|\n\t|\t\t\t\t2.PRINTLIST\t\t\t\t|\n\t|\t\t\t\t3.SEARCH\t\t\t\t|\n\t|\t\t\t\t4.DELETE\t\t\t\t|\n\t|\t\t\t\t5.SAVE\t\t\t\t\t|\n\t|\t\t\t\t6.EXIT\t\t\t\t\t|");
            console.log("\t|-----------------------------------------------------------------------|");
            console.log("\t|===============================Welcome to clinic=======================|");
            console.log();


            option = read.question('Enter the option:');
            //console.log(option)
            switch (parseInt(option)) {
                case 1:
                    utitlity.ApointMent(clinique);


                    break;
                case 2:

                    do {
                        console.log("Enter 1 for Doctors List \nEnter 2 for Patients List");
                        var ch = read.questionInt();
                    } while (ch > 2 || ch < 1)
                    if (ch == 1) {
                        utitlity.allDoctors(clinique);
                    } if (ch == 2) {
                        utitlity.allPatients(clinique)
                    }

                    /**
                     * print whole list from clinique object
                     */

                    break;
                case 3:
                    do {
                        console.log("Enter 1 for Doctor \nEnter 2 for patient ");
                        var ch = read.questionInt();
                    } while (ch > 2 || ch < 1)

                    if (ch == 1) {
                        utitlity.SearchDoctor(clinique);
                    } if (ch == 2) {
                        utitlity.SearchPatient(clinique);
                    }


                    break;
                case 4:

                    do {
                        console.log("Enter 1for Delete Doctor\nEnter 2 For DeletePatient");
                        var ch = read.questionInt();
                    } while (ch > 2 || ch < 1)

                    if (ch == 1) {
                        utitlity.deleteDoctor(clinique);
                    } if (ch == 2) {
                        utitlity.deletePatient(clinique);
                    }

                    break;
                case 5:
                    utitlity.saveFile(clinique);
                    break;

                default:
                    console.log("Enter valid option!!");
            }
        } while (option != 6);

    })
    //cliniqueFun();
    return option;
}

module.exports = cliniqueFun();