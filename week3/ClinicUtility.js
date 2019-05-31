var read = require('readline-sync');
var fs = require('fs');
var utility = require('../week3/OOpUtility')
var main = require('../week3/Clinic');
//var prompt = require('prompt-sync')();

module.exports = {


    ApointMent(clinique) {
        var date = new Date();
        /**
        * print list of doctors available
        */
        // console.log("*Doctors Available*");
        //console.log(clinique.Doctors);
        do {
            var Name = read.question('Patient Name: ');
        } while (utility.allLetter(Name) == false);





        /**
         * generating ID using random function 
         */
        var ID = parseInt(Math.random() * 1000);

        do {
            var mobNo = read.question('Mobile Number: ');
        } while (utility.mobileNumber(mobNo) == false)
        /**
         * validating phone number
         */
        contactFormat = /[0-9]/g;
        do {
            var Age = read.question('Age: ');
        } while (contactFormat.test(Age) == false)

        /**
         * validate age
         */
        // do {
        //     var Appointed_To = read.question('whose appointment u want : ');

        // } while ((utility.allLetter(Appointed_To) == false) || this.searchDoctorByname(Appointed_To, clinique) == 0);


        do {
            var appointment = read.question("Do you want to get appointment:(type yes or no): ");
            if (appointment != "yes" && appointment != "no")
                console.log("** Invalid");
        } while (appointment != "yes" && appointment != "no");

        if (appointment == "yes") {
            this.allDoctors(clinique);
            var index = this.SearchDoctor(clinique);

            var Appointed_To = clinique.Doctors[index].Name;
            console.log(Appointed_To);

            // do {
            //     var Appointed_To = read.question('Enter Doctor Name  : ');

            // } while ((utility.allLetter(Appointed_To) == false) || this.searchDoctorByname(Appointed_To, clinique) == 0);

            var run = this.currentAppointments(index, clinique);
            console.log(run);

            if (!this.currentAppointments(index, clinique)) {


                /**
                 * push each value into the json array
                 */
                clinique.Patients.push(
                    {
                        "Name": Name,
                        "ID": ID,
                        "mobNo": mobNo,
                        "Age": Age,
                        "Appointed_To": Appointed_To,
                        Appointment: (date.getDate()) + "/" + date.getDay() + "/" + date.getFullYear()
                    })

                console.log("Appointment Fixed ...please Save File");
                console.log("\n" + Name + "'s Appointment is Fixed at " + (date.getDate() + 1) + "/" + date.getDay() + "/" + date.getFullYear()
                    + " with Dr. " + clinique.Doctors[index].Name);
            }
            else {
                clinique.Patients.push({
                    Name: Name,
                    ID: ID,
                    mobNo: mobNo,
                    "Appointed_To": Appointed_To,
                    Appointment: date.getDate() + "/" + date.getDay() + "/" + date.getFullYear()
                })
                console.log("\n" + Name + "'s Appointment is Fixed at next Day" + date.getDate() + "/" + date.getDay() + "/" + date.getFullYear()
                    + " with Dr. " + clinique.Doctors[index].Name);
            }
            /**
             * write the file into json
             */

            //fs.writeFile('/home/admin1/JavaScriptPrograms-master/week3/jsonFile/Clinic.json', JSON.stringify(clinique));

        }

    },
    currentAppointments(index, clinique) {
        try {
            var appointments = clinique.Doctors[index].NoOfPatients;
            console.log(appointments, " pt i");

            if (appointments >= 5)
                return false
            else
                // return appointments++;
                return true;
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    },

    searchDoctorByname(name, clinique) {

        var flag = 0;
        for (var key in clinique.Doctors) {
            if (clinique.Doctors[key].Name == name) {
                console.log("****Doctor Info****");
                console.log(clinique.Doctors[key]);
                flag++;
            }
        }
        if (flag == 0) {
            console.log(" doctor is not in list please Enter only available  Doctors name");

            return flag;
        }

    },
    searchDoctByID() {
        var i = read.question('ID: ');
        flag = 0;
        /**
         * find key in the doctor object we want to search
         */
        for (var key in clinique.Doctors) {
            if (clinique.Doctors[key].ID == i) {
                console.log("****Doctor's Info****");
                console.log(clinique.Doctors[key]);
            }
        }
    },


    SearchDoctor(clinique) {


        var flag = 0;
        do {
            console.log("1.Search by Name\n2.Search by ID\n3.Search by Specialization\n4.Search by Availability\n5.Display All doctors");
            var option3 = read.question('choose correct option : ');
        } while (option3 > 5 || option3 < 1)

        if (option3 == 1) {
            var flag = 0;
            do {
                var name = read.question('Enter Doctor Name: ');
            } while (utility.allLetter(name) == false)


            for (var key in clinique.Doctors) {
                if (clinique.Doctors[key].Name == name) {
                    console.log("****Doctor Info****");
                    console.log(clinique.Doctors[key]);
                    flag++;
                    return key;
                }
            }
            if (flag == 0) {
                console.log(" doctor is not in list please Enter only available  Doctors name");


            }
            // return key;
        }
        else if (option3 == 2) {
            contactFormat = /[0-9]/g;
            do {
                var i = read.question('Enter Doctor ID: ');
            } while (contactFormat.test(i) == false)



            /**
             * find key in the doctor object we want to search
             */
            for (var key in clinique.Doctors) {
                if (clinique.Doctors[key].ID == i) {
                    console.log("****Doctor's Info****");
                    console.log(clinique.Doctors[key]);
                    flag++;
                    return key;
                }
            } if (flag == 0) {
                console.log(" Doctor is not avalable of ythat ID");

            }

        }
        else if (option3 == 3) {
            do {
                var i = read.question('Specialization: ');
            } while (utility.allLetter(i) == false)
            /**
             * find key in the doctor object we want to search
             */
            for (var key in clinique.Doctors) {
                if (clinique.Doctors[key].Specialization == i) {
                    console.log("****Doctor's Info****");
                    console.log(clinique.Doctors[key]);
                    flag++;
                    return key;
                }
            } if (flag == 0) {
                console.log(" a Doctor not  avialble thaat specialization ");

            }

        }
        else if (option3 == 4) {
            do {
                var i = read.question('Availability: ');
            } while (i !== PM || i !== AM)

            /**
             * find key in the doctor object we want to search
             */
            for (var key in clinique.Doctors) {
                if (clinique.Doctors[key].Availability == i) {
                    console.log("****Doctor's Info****");
                    console.log(clinique.Doctors[key]);
                    flag++;
                    return key;
                }
            } if (flag == 0) {
                console.log(" doctor is not available at that time");

            }

        } else if (option3 == 5) {

            this.allDoctors(clinique);
        }





    },

    SearchPatient(clinique) {


        console.log("1.Search by Name\n2.Search by ID\n3.Search by mobNo\n4.Search by Age");


        var option4 = read.question('Enter option: ');

        var flag = 0;
        if (option4 == 1) {
            do {
                var i = read.question('Enter Name Patient : ');
            } while (utility.allLetter(i) == false)

            for (var key in clinique.Patients) {
                if (clinique.Patients[key].Name == i) {
                    //show info of particular patient using name
                    console.log("****Patients Info****");
                    console.log(clinique.Patients[key]);
                    flag++;
                }
            } if (flag == 0) {

                console.log(" patient is not availbale in list ");

            }
        }
        else if (option4 == 2) {
            do {
                var i = read.question('Entr ID: ');
            } while (contactFormat.test(i) == false)



            for (var key in clinique.Patients) {
                if (clinique.Patients[key].ID == i) {
                    /**
                     * show info of particular patient using ID
                     */
                    console.log("****Patients Info****");
                    console.log(clinique.Patients[key]);
                    flag++
                }
            } if (flag == 0) {
                console.log(i, " id is not assigned to patient try agian another way ");

            }
        }
        else if (option4 == 3) {
            do {
                var i = read.question('mobNo: ');
            } while (utility.mobileNumber(i) == false)

            for (var key in clinique.Patients) {
                if (clinique.Patients[key].mobNo == i) {
                    /**
                     * show info of patient through mobile number
                     */
                    console.log("****Patients Info****");
                    console.log(clinique.Patients[key]);
                    flag++;
                }
            } if (flag == 0) {
                console.log(i, " not pateint avalable for this mobile number ");

            }
        }
        else if (option4 == 4) {

            do {
                var i = read.question('Age: ');
            } while (contactFormat.test(i) == false)

            for (var key in clinique.Patients) {
                if (clinique.Patients[key].Age == i) {
                    console.log("****Patients Info****");
                    console.log(clinique.Patients[key]);
                    flag++;
                }
            } if (flag == 0) {
                console.log(i, " age patients are not avible ");

            }
        }
    },
    deletePatient(clinique) {
        var val = -1;
        var personObj = clinique.Patients;
        var name = read.question(" Enter Paitent name: ")
        var mob = read.question(" Enter Mobile Number : ")

        for (var key in personObj) {
            if (personObj[key].Name == name && personObj[key].mobNo == mob) {
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

    deleteDoctor(clinique) {
        var val = -1;
        var personObj = clinique.Doctors;
        var name = read.question(" Enter Doctor name: ")
        var mob = read.question(" Enter Doctor ID : ")

        for (var key in personObj) {
            if (personObj[key].Name == name && personObj[key].ID == mob) {
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
    saveFile(object) {

        //   const jsonString = JSON.stringify(object);
        // fs.writeFile(file, jsonString, err => {
        // 	if (err) {
        // 		console.log('Error writing file', err);
        // 	} else {
        // 		console.log('Successfully wrote file');
        // 	}
        // });

        fs.writeFileSync("/home/admin1/JavaScriptPrograms-master/week3/jsonFile/Clinic.json", JSON.stringify(object));
        console.log("file save successfull :) ");
    },



    allDoctors(clinique) {
        console.log("\n\t\t\t\t\t*** All Doctor Details ***\n");
        console.log("\t-------------------------------------------------------------------------------------------");
        console.log("\t| Doctor Name \t| Doctor ID \t|  Specialization \t| Availability \t| Current Patient |");
        console.log("\t-------------------------------------------------------------------------------------------");
        try {
            for (let i = 0; i < clinique.Doctors.length; i++) {
                console.log("\t| " + clinique.Doctors[i].Name + ""
                    + "\t| " + clinique.Doctors[i].ID + "\t"
                    + "\t| " + clinique.Doctors[i].Specialization + "\t"
                    + "\t| " + clinique.Doctors[i].Availability + "\t"
                    + "\t| " + clinique.Doctors[i].NoOfPatients + "\t\t  |");
            }
        } catch (error) {
            console.log("* ERROR: " + error);
        }
        console.log("\t-------------------------------------------------------------------------------------------");
    },


    allPatients(clinique) {
        console.log("\n\t\t\t\t\t*** All Patient Details ***\n");
        console.log("\t-------------------------------------------------------------------------");
        console.log("\t| Patient Name \t| Patient ID \t|  Contact Number \t| Appointment\t|");
        console.log("\t-------------------------------------------------------------------------");
        try {
            for (let i = 0; i < clinique.Patients.length; i++) {
                console.log("\t| " + clinique.Patients[i].Name + ""
                    + "\t| " + clinique.Patients[i].ID + "\t"
                    + "\t| " + clinique.Patients[i].mobNo + "     "
                    + "\t| " + clinique.Patients[i].Appointed_To + "\t|");
            }
        } catch (error) {
            console.log("* ERROR: " + error);
        }
        console.log("\t-------------------------------------------------------------------------");
    },


    displayAppointnet(clinique) {
        var doctor = clinique.Doctors;
        console.log(("\t\t\t________________________________________________\n"
            + "\t\t\t|\t       Get Appointment       \t\t|\n"
            + "\t\t\t|\t       ---------------      \t\t|\n"
            + "\t\t\t|\t 1. Search Doctor By Name    \t\t|\n"
            + "\t\t\t|\t 2. Search Doctor By ID     \t\t|\n"
            + "\t\t\t|\t 3. Search Doctor By Specialization     |\n"
            + "\t\t\t|\t 4. Display All Doctors      \t\t|\n"
            + "\t\t\t|\t 5. Exit.        \t\t\t|\n"
            + "\t\t\t|_______________________________________________|"));
        var choice = readLineSync.questionInt("~ Enter Your Choice: ");
        switch (choice) {
            case 1:
                /**
                 * @description : to search doctor by name.
                 */
                var nameAt = doctor.this.SearchDoctor();
                return nameAt;
            case 2:
                /**
                 * @description : to search doctor by ID.
                 */
                var idAt = doctor.searchDoctorByID();
                return idAt;
            case 3:
                /**
                 * @description : to search doctor by specialization.
                 */
                var specializationAt = doctor.searchDoctorBySpecialization();
                return specializationAt;
            case 4:
                /**
                 * @description : to display all doctor's information & take doctor id from patient to fix appointment.
                 */
                doctor.allDoctors();
                var doctorPath = "/home/admin1/Fellowship/ObjectOrientedPrograms/Doctor.json";
                var doctorFileRead = dSUtility.readFile(doctorPath);
                var jsonDoctor = JSON.parse(doctorFileRead);
                var id = readLineSync.questionInt("Enter Doctor ID: ")
                var idAt = -1;
                try {
                    for (let i = 0; i < jsonDoctor.Doctor.length; i++) {
                        if (jsonDoctor.Doctor[i].ID == id)
                            idAt = jsonDoctor.Doctor.indexOf(jsonDoctor.Doctor[i]);
                    }
                    if (idAt == -1)
                        console.log("Doctor Not Found....!!!");
                    else {
                        console.log("Doctor Found....!!!\n");
                        console.log("\tDoctor Detail: ");
                        var doctor = new Doctor();
                        doctor.singleDoctor(idAt);
                    }
                } catch (error) {
                    console.log("* ERROR: " + error);
                }
                return idAt;
            case 5:
                console.log("\n\t~~~ THANK YOU ~~~\n\t   * EXIT *\n~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~");
                process.exit();
                break;
            default:
                console.log("*INVALID CHOICE...");
                break;
        }
    }





}