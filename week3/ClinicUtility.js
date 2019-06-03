var read = require('readline-sync');
var fs = require('fs');
var utility = require('../week3/OOpUtility')
var main = require('../week3/Clinic');
//var prompt = require('prompt-sync')();
contactFormat = /[0-9]/g;
module.exports = {

    /**
    * @description this method is For Taking Appoint And Add to Patient
    * @param Object jsons Parser
    * @returns arrays
    */
    ApointMent(clinique) {
        var date = new Date();
        /**
        * print list of doctors available
        */
        // console.log("*Doctors Available*");
        //console.log(clinique.Doctors);

        /**
         * validating Name 
         */

        do {
            var Name = read.question('Patient Name: ');
        } while (utility.allLetter(Name) == false);

        /**
         * generating ID using random function 
         */
        var ID = parseInt(Math.random() * 1000);

        /**
         * validating phone number
         */
        do {
            var mobNo = read.question('Mobile Number: ');
        } while (utility.mobileNumber(mobNo) == false)
        /**
         * validating age should be 99 max
         */
        do {
            var Age = read.question('Age: ');
        } while (utility.ageValid(Age) == false)

        // question to Patient they Want to take Appoint ment 
        do {
            var appointment = read.question("Do you want to get appointment:(type y or n): ");
            if (appointment != "y" && appointment != "n")
                console.log("** Invalid");
        } while (appointment != "y" && appointment != "n");// wrong input validation
        //if yes then
        if (appointment == "y") {
            this.allDoctors(clinique);//print all the list of doctors 

            do {
                var index = this.SearchDoctor(clinique);

            } while (index == undefined)//if doctor not found if index is undefined thenn do while loop
            console.log(index, " index");

            var Appointed_To = clinique.Doctors[index].Name;// doctor name store into varriable 
            console.log(Appointed_To);

            //check how maany pateint appointed to doctor 

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
                        Appointment: (date.getDate() + 1) + "/" + date.getDay() + "/" + date.getFullYear()
                    })

                console.log("Appointment Fixed ...please Save File");
                console.log("\n" + Name + "'s Appointment is Fixed at net Date " + (date.getDate() + 1) + "/" + date.getDay() + "/" + date.getFullYear()
                    + " with Dr. " + clinique.Doctors[index].Name);
            }
            else {
                //push data in json object in Patiient Json Array ob object
                clinique.Patients.push({
                    Name: Name,
                    ID: ID,
                    mobNo: mobNo,
                    Appointed_To: Appointed_To,
                    Appointment: date.getDate() + "/" + date.getDay() + "/" + date.getFullYear()
                })
                console.log("\n" + Name + "'s Appointment is Fixed at Day " + date.getDate() + "/" + date.getDay() + "/" + date.getFullYear()
                    + " with Dr. " + clinique.Doctors[index].Name);
            }

            //this.saveFile(clinique)
            /**
             * write the file into json
             */

            //fs.writeFile('/home/admin1/JavaScriptPrograms-master/week3/jsonFile/Clinic.json', JSON.stringify(clinique));

        } else {

            console.log(" Apoointment Cancled");

        }

    },
    /**
    * @description this method is for current appountment of doctoir is less than 5 or not check
    * @param index of doctor and json object
    * @returns true/flase
    */
    currentAppointments(index, clinique) {
        try {
            var appointments = clinique.Doctors[index].NoOfPatients;


            if (appointments >= 5)
                return false
            else
                // return appointments++;
                return true;
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    },
    /**
    * @description this method is search doctor By Entering name of Doctor
    * @param string Doctor name
    * @returns true /flase
    */

    searchDoctorByname(clinique, name) {

        var flag = 0;
        for (var key in clinique.Doctors) {
            if (clinique.Doctors[key].Name == name) {
                console.log("****Doctor Info****");
                console.log(clinique.Doctors[key]);
                flag++;
                return true;
            }
        }
        if (flag == 0) {
            console.log(" doctor is not in list please Enter only available  Doctors name");

            return false;

        }


    },
    /**
    * @description this method is for search doctor by thir Id number
    * @param int ID number
    * @returns true false
    */
    searchDoctByID(clinique, i) {
        //var i = read.question('ID: ');
        flag = 0;
        /**
         * find key in the doctor object we want to search
         */
        for (var key in clinique.Doctors) {
            if (clinique.Doctors[key].ID == i) {
                console.log("****Doctor's Info****");
                console.log(clinique.Doctors[key]);
                return true;
            }
        }
        return false;
    },
    /**
    * @description this method is for search doctor by name ,by id,by availablity,by specialization
    * @param parameters id,name,time,specilization
    * @returns return true false index,
    */

    SearchDoctor(clinique) {


        var flag = 0;
        do {
            console.log("1.Search by Name\n2.Search by ID\n3.Search by Specialization\n4.Search by Availability\n5.Display All doctors");
            var option3 = read.questionInt('choose correct option : ');
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
                    this.singleDoctor(clinique, key);
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
                console.log(" Doctor is not avalable of that ID");

            }

        }
        else if (option3 == 3) {
            do {
                var i = read.question('Enter Specialization: ');
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
                console.log("  Doctor not  avialble that specialization ");

            }

        }
        else if (option3 == 4) {

            do {
                var i = read.question('Availability: ');
                console.log(" i value ", i);
                if (i == 'Both')
                    console.log(" didi");

            } while (i != "AM" && i != 'PM' && i != 'Both')

            /**
             * find key in the doctor object we want to search
             */
            for (var key in clinique.Doctors) {
                if (i.localeCompare(clinique.Doctors[key].Availability) == 0) {
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

    /**
    * @description this method is for search patient by name
    * @param name 
    * @returns  true / false 
    */
    searchPatientByName(clinique, i) {


        for (var key in clinique.Patients) {
            if (clinique.Patients[key].Name == i) {
                //show info of particular patient using name
                console.log("****Patients Info****");
                // console.log(clinique.Patients[key]);
                this.singlePatientDetails(clinique, key)

                return true
            }
        }
        return false;
    },
    /**
    * @description this method is for search patient by mobilke number
    * @param integer mobile numbwer
    * @returns true false index,
    */
    searchPatientById(clinique, i) {

        for (var key in clinique.Patients) {
            if (clinique.Patients[key].mobNo == i) {
                /**
                 * show info of patient through mobile number
                 */
                console.log("****Patients Info****");
                // console.log(clinique.Patients[key]);
                this.singlePatientDetails(clinique, key)

                return true;
            }
        }
        return false;
    },


    /**
    * @description this method is for saerching patient in list by age,id,name,
    * @param id,name,age
    * @returns true /false
    */
    SearchPatient(clinique) {

        do {
            console.log("1.Search by Name\n2.Search by ID\n3.Search by mobNo\n4.Search by Age");


            var option4 = read.questionInt('Enter option: ');

        } while (option4 > 4 || option4 < 1)

        var flag = 0;
        if (option4 == 1) {
            do {
                var i = read.question('Enter Name Patient : ');
            } while (utility.allLetter(i) == false)

            for (var key in clinique.Patients) {
                if (clinique.Patients[key].Name == i) {
                    //show info of particular patient using name
                    console.log("****Patients Info****");
                    // console.log(clinique.Patients[key]);
                    this.singlePatientDetails(clinique, key)

                    flag++;
                }
            } if (flag == 0) {

                console.log(" patient is not availbale in list ");

            }
        }
        else if (option4 == 2) {

            do {
                var i = read.questionInt('Entr ID: ');
            } while (contactFormat.test(i) == false)



            for (var key in clinique.Patients) {
                if (clinique.Patients[key].ID == i) {
                    /**
                     * show info of particular patient using ID
                     */
                    console.log("****Patients Info****");
                    // console.log(clinique.Patients[key]);
                    this.singlePatientDetails(clinique, key)
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
                    // console.log(clinique.Patients[key]);
                    this.singlePatientDetails(clinique, key)
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
                    //console.log(clinique.Patients[key]);
                    this.singlePatientDetails(clinique, key)
                    flag++;
                }
            } if (flag == 0) {
                console.log(i, " age patients are not avible ");

            }
        }
    },

    /**
    * @description this method is for delete patient from list json file
    * @param json object
    * @returns nothing
    */
    deletePatient(clinique) {
        var val = -1;
        var personObj = clinique.Patients;
        do {
            var name = read.question(" Enter Paitent name: ")
        } while (utility.allLetter(name) == false)
        do {
            var mob = read.question(" Enter Mobile Number : ")
        } while (utility.mobileNumber(mob) == false)
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
        deleteFormat = /^[0-3]\d{0}$/;
        do {
            var ch = read.question("are you sure? \n " + "1.Delete \n 2.exit ");
        } while (deleteFormat.test(ch) == false)
        if (ch == 1) {
            personObj.splice(val, 1);
            console.log(" deleted successfully please save the file");

        }
        else
            console.log(personObj[val], " record not deleted");

        return;

    },
    /**
    * @description this method is for delete doctor from json file 
    * @param doctor name and id
    * @returns nothing
    */
    deleteDoctor(clinique) {
        var val = -1;
        var personObj = clinique.Doctors;
        do {
            var name = read.question(" Enter Doctor  name: ")
        } while (utility.allLetter(name) == false)

        idFormat = /^[1-9]\d{2}$/;
        do {
            var mob = read.question(" Enter ID Number : ")
        } while (idFormat.test(mob) == false)

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
        deleteFormat = /^[1-2]\d{0}$/;
        do {
            var ch = read.question("are you sure? \n " + "1.Delete \n 2.exit ");
        } while (deleteFormat.test(ch) == false)
        if (ch === 1) {
            personObj.splice(val, 1);
            console.log(" deleted successfully please save the file");

        }
        else
            console.log(personObj[val], " record not deleted");

        return;

    },

    /**
    * @description this method is for save the json filr after operation file
    * @param file json object
    * @returns file
    */
    saveFile(object) {

        fs.writeFileSync("/home/admin1/JavaScriptPrograms-master/week3/jsonFile/Clinic.json", JSON.stringify(object));
        console.log("file save successfull :) ");
    },
    /**
    * @description this method is for print all doctors in tabular form
    * @param int value 
    * @returns in value
    */
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
    /**
    * @description this method is for print All Patients in tabular form
    * @param json object
    * @returns nothing
    */

    allPatients(clinique) {
        console.log("\n\t\t\t\t*** All Patient Details ***\n");
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


    /**
    * @description this method is for print single Patuent when search operation form
    * @param jsonn object
    * @returns Patient object pruinted
    */
    singlePatientDetails(clinique, index) {
        try {
            console.log("\t\t~ Name : " + clinique.Patients[index].Name);
            console.log("\t\t~ ID : " + clinique.Patients[index].ID);
            console.log("\t\t~ Contact Number : " + clinique.Patients[index].mobNo);
            console.log("\t\t~ Appointed_To : " + clinique.Patients[index].Appointed_To);
            console.log("\t\t~ Appontment :- " + clinique.Patients[index].Appointment);
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    },
    /**
    * @description this method is for print single doictor when dearch operation performed
    * @param json object
    * @returns return json
    */
    singleDoctor(clinique, index) {
        try {
            console.log("\t\t~ Name : " + clinique.Doctors[index].Name);
            console.log("\t\t~ ID : " + clinique.Doctors[index].ID);
            console.log("\t\t~ Specialization : " + clinique.Doctors[index].Specialization);
            console.log("\t\t~ Availability :- " + clinique.Doctors[index].Availability);
            console.log("\t\t~ Current Patients :- " + clinique.Doctors[index].NoOfPatients);
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    },
    /**
    * @description this method is for updating apointment to another doctor
    * @param json obhject
    * @returns updated file
    */
    UpdateAppintment(clinique) {
        try {
            var val = -1;
            var personObj = clinique.Patients;

            var name = read.question(" Enter Name of patient");
            var mob = read.questionInt(" Enter mob number")

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

            do {
                var appointment = read.question("Do you want to get appointment:(type yes or no): ");
                if (appointment != "yes" && appointment != "no")
                    console.log("** Invalid");
            } while (appointment != "yes" && appointment != "no");

            if (appointment == "yes") {
                this.allDoctors(clinique);

                do {
                    var index = this.SearchDoctor(clinique);

                } while (index == undefined)
                console.log(index, " index");


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
                            Appointment: (date.getDate() + 1) + "/" + date.getDay() + "/" + date.getFullYear()
                        })

                    console.log("Appointment Fixed ...please Save File");
                    console.log("\n" + Name + "'s Appointment is Fixed at net Date " + (date.getDate() + 1) + "/" + date.getDay() + "/" + date.getFullYear()
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
                    console.log("\n" + Name + "'s Appointment is Fixed at Day " + date.getDate() + "/" + date.getDay() + "/" + date.getFullYear()
                        + " with Dr. " + clinique.Doctors[index].Name);
                }
                /**
                 * write the file into json
                 */

                //fs.writeFile('/home/admin1/JavaScriptPrograms-master/week3/jsonFile/Clinic.json', JSON.stringify(clinique));

            } else {

                clinique.Patients.push(
                    {
                        "Name": Name,
                        "ID": ID,
                        "mobNo": mobNo,
                        "Age": Age,
                        "Appointed_To": Appointed_To,
                        //Appointment: (date.getDate() + 1) + "/" + date.getDay() + "/" + date.getFullYear()
                    })
            }
        } catch (error) {
            console.log(" error");

        }

    },
    /**
    * @description this method is for updateting doctor s object incrementing number of patient
    * @param int value 
    * @returns in value
    */
    updateDoctor(clinique, key) {
        var count = clinique.Doctors[key].NoOfPatients + 1;
        personObj[key].NoOfPatients = count;

    },


}