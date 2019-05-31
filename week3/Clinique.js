							class CliniqueManagement extends AddressBook {
    /**
     * @description : constructor to initialize variables.
     */
    constructor() {
        super();
        this.doctorPath = "/home/admin1/Fellowship/ObjectOrientedPrograms/Doctor.json";
        this.patientPath = "/home/admin1/Fellowship/ObjectOrientedPrograms/Patient.json";
        this.doctorFileRead = dSUtility.readFile(this.doctorPath);
        this.jsonDoctor = JSON.parse(this.doctorFileRead);
        this.patientFileRead = dSUtility.readFile(this.patientPath);
        this.jsonPatient = JSON.parse(this.patientFileRead);
        this.date = new Date();
    }
    /**
     * @description : to check current appointments of a doctor.
     * @param {number} index : position of a Doctor in json file.
     * @returns {Boolean} : returns false if current appointments are equal to 5 otherwise gives true.
     */
    currentAppointments(index) {
        try {
            var appointments = this.jsonDoctor.Doctor[index].NoOfPatients;
            if (appointments >= 5)
                return false
            else
                return true;
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    }
    /**
     * @description : to add patient in json file & take doctor's appointment.
     */
    addPatient() {
        var patientName = this.sringValidation("Patient Name");
        var patientMobileNo = this.getContactNumber();
        try {
            do {
                var appointment = readLineSync.question("Do you want to get appointment:(type yes or no): ");
                if (appointment != "yes" && appointment != "no")
                    console.log("** Invalid");
            } while (appointment != "yes" && appointment != "no");
            if (appointment == "yes") {
                var index = displayAppointnet();
                if (!this.currentAppointments(index)) {
                    this.jsonPatient.Patient.push({
                        Name: patientName,
                        ID: this.jsonPatient.Patient.length + 1,
                        MobileNo: patientMobileNo,
                        Appointment: (this.date.getDate() + 1) + "/" + this.date.getDay() + "/" + this.date.getFullYear()
                    })
                    console.log("\n" + patientName + "'s Appointment is Fixed at " + (this.date.getDate() + 1) + "/" + this.date.getDay() + "/" + this.date.getFullYear() 
                    + " with Dr. " + this.jsonDoctor.Doctor[index].Name);
                }
                else {
                    this.jsonPatient.Patient.push({
                        Name: patientName,
                        ID: this.jsonPatient.Patient.length + 1,
                        MobileNo: patientMobileNo,
                        Appointment: this.date.getDate() + "/" + this.date.getDay() + "/" + this.date.getFullYear()
                    })
                    console.log("\n" + patientName + "'s Appointment is Fixed at " + this.date.getDate() + "/" + this.date.getDay() + "/" + this.date.getFullYear()
                    + " with Dr. " + this.jsonDoctor.Doctor[index].Name);
                }
                writeIntoJsonFile(this.patientPath, this.jsonPatient);
            }
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    }
    /**
     * @description : search Patient by Name & take doctor's appointment.
     */
    searchPatientByName() {
        var name = this.sringValidation("Patient Name");
        var nameAt = -1;
        try {
            for (let i = 0; i < this.jsonPatient.Patient.length; i++) {
                if (this.jsonPatient.Patient[i].Name == name)
                    nameAt = this.jsonPatient.Patient.indexOf(this.jsonPatient.Patient[i]);
            }
            if (nameAt == -1)
                console.log("Patient Not Found....!!!");
            else {
                console.log("Patient Found....!!!\n");
                console.log("\t" + name + "'s Details: ");
                this.singlePatientDetails(nameAt);
                do {
                    var appointment = readLineSync.question("\nDo you want to get appointment:(type yes or no): ");
                    if (appointment != "yes" && appointment != "no")
                        console.log("** Invalid");
                } while (appointment != "yes" && appointment != "no");
                if (appointment == "yes") {
                    var index = displayAppointnet();
                    console.log(index);
                    if (!this.currentAppointments(index))
                        this.jsonPatient.Patient[nameAt].Appointment = (this.date.getDate() + 1) + "/" + this.date.getDay() + "/" + this.date.getFullYear();
                    else
                        this.jsonPatient.Patient[nameAt].Appointment = this.date.getDate() + "/" + this.date.getDay() + "/" + this.date.getFullYear();
                    console.log("\n" + name + "'s Appointment is Fixed at " + this.jsonPatient.Patient[nameAt].Appointment
                    + " with Dr. " + this.jsonDoctor.Doctor[index].Name);
                    writeIntoJsonFile(this.patientPath, this.jsonPatient);
                }
            }
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    }
    /**
     * @description : search Patient by Mobile Number & take doctor's appointment.
     */
    searchPatientByMobileNo() {
        var mobileNo = this.getContactNumber();
        var mobileNoAt = -1;
        try {
            for (let i = 0; i < this.jsonPatient.Patient.length; i++)
                if (this.jsonPatient.Patient[i].MobileNo == mobileNo)
                    mobileNoAt = this.jsonPatient.Patient.indexOf(this.jsonPatient.Patient[i]);
            if (mobileNoAt == -1)
                console.log("Patient Not Found....!!!");
            else {
                console.log("Patient Found....!!!\n");
                console.log("\tPatient's Details: ");
                this.singlePatientDetails(mobileNoAt);
                do {
                    var appointment = readLineSync.question("Do you want to get appointment:(type yes or no): ");
                    if (appointment != "yes" && appointment != "no")
                        console.log("** Invalid");
                } while (appointment != "yes" && appointment != "no");
                if (appointment == "yes") {
                    var index = displayAppointnet();
                    if (!this.currentAppointments(index))
                        this.jsonPatient.Patient[nameAt].Appointment = (this.date.getDate() + 1) + "/" + this.date.getDay() + "/" + this.date.getFullYear();
                    else
                        this.jsonPatient.Patient[nameAt].Appointment = this.date.getDate() + "/" + this.date.getDay() + "/" + this.date.getFullYear();
                    writeIntoJsonFile(this.patientPath, this.jsonPatient);
                    console.log("Your Appointment is Fixed at " + this.jsonPatient.Patient[nameAt].Appointment
                    + "with Dr. " + this.jsonDoctor.Doctor[index].Name);
                }
            }
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    }
    /**
     * @description : search Patient by ID and take doctor's appointment.
     */
    searchPatientByID() {
        var id = readLineSync.questionInt("Enter Patients ID: ");
        var idAt = -1;
        try {
            for (let i = 0; i < this.jsonPatient.Patient.length; i++) {
                if (this.jsonPatient.Patient[i].ID == id)
                    idAt = this.jsonPatient.Patient.indexOf(this.jsonPatient.Patient[i]);
            }
            if (idAt == -1)
                console.log("Patient Not Found....!!!");
            else {
                console.log("Patient Found....!!!\n");
                console.log("\tPatient's Details: ");
                this.singlePatientDetails(idAt);
                do {
                    var appointment = readLineSync.question("\n* Do you want to get appointment:(type yes or no): ");
                    if (appointment != "yes" && appointment != "no")
                        console.log("** Invalid");
                } while (appointment != "yes" && appointment != "no");
                if (appointment == "yes") {
                    var index = displayAppointnet();
                    if (!this.currentAppointments(index))
                        this.jsonPatient.Patient[nameAt].Appointment = (this.date.getDate() + 1) + "/" + this.date.getDay() + "/" + this.date.getFullYear();
                    else
                        this.jsonPatient.Patient[nameAt].Appointment = this.date.getDate() + "/" + this.date.getDay() + "/" + this.date.getFullYear();
                    writeIntoJsonFile(this.patientPath, this.jsonPatient);
                    console.log("Your Appointment is Fixed at " + this.jsonPatient.Patient[nameAt].Appointment
                    + " with Dr. " + this.jsonDoctor.Doctor[index].Name);
                }
            }
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    }
    /**
     * @description : to display details of single patient.
     * @param {number} index : index position of a patient in json File.
     */
    singlePatientDetails(index) {
        try {
            console.log("\t\t~ Name : " + this.jsonPatient.Patient[index].Name);
            console.log("\t\t~ ID : " + this.jsonPatient.Patient[index].ID);
            console.log("\t\t~ Contact Number : " + this.jsonPatient.Patient[index].MobileNo);
            console.log("\t\t~ Appontment :- " + this.jsonPatient.Patient[index].Appointment);
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    }
    /**
     * @description : to display all patient details.
     */
    allPatientDetails() {
        console.log("\n\t\t\t\t\t*** All Patient Details ***\n");
        console.log("\t---------------------------------------------------------------------------------------------------------");
        console.log("\t|\t Patient Name \t|\t Patient ID \t|\t  Contact Number \t|\t Appointment\t|");
        console.log("\t---------------------------------------------------------------------------------------------------------");
        try {
            for (let i = 0; i < this.jsonPatient.Patient.length; i++) {
                console.log("\t|\t " + this.jsonPatient.Patient[i].Name + "\t"
                    + "\t|\t " + this.jsonPatient.Patient[i].ID + "\t"
                    + "\t|\t " + this.jsonPatient.Patient[i].MobileNo + "\t"
                    + "\t|\t " + this.jsonPatient.Patient[i].Appointment + "\t|");
            }
        } catch (error) {
            console.log("* ERROR: " + error);
        }
        console.log("\t---------------------------------------------------------------------------------------------------------");
    }
    /**
     * @description : delete patient from json file.
     */
    DeletePatient() {
        var id = readLineSync.questionInt("Enter Patients ID: ");
        var idAt = -1;
        try {
            for (let i = 0; i < this.jsonPatient.Patient.length; i++) {
                if (this.jsonPatient.Patient[i].ID == id)
                    idAt = this.jsonPatient.Patient.indexOf(this.jsonPatient.Patient[i]);
            }
            if (idAt == -1)
                console.log("Patient Not Found....!!!");
            else {
                console.log("Patient Found....!!!\n");
                console.log("\tPatient's Details: ");
                this.singlePatientDetails(idAt);
                this.jsonPatient.Patient.pop({
                    ID: id
                });
                writeIntoJsonFile(this.patientPath, this.jsonPatient);
                console.log("Patient Deleted SuccesFully...!!!");
            }
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    }
}

/**
 * @description : to display doctors information.
 */
function displayAppointnet() {
    var doctor = new Doctor();
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
            var nameAt = doctor.searchDoctorByName();
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

/**
 * @description : to search doctor by name, id & specialization.
 */
class Doctor extends CliniqueManagement {
    constructor() {
        super();
    }
    /**
     * @description : to search doctor by name.
     */
    searchDoctorByName() {
        var name = this.sringValidation("Doctor Name");
        var nameAt = -1;
        try {
            for (let i = 0; i < this.jsonDoctor.Doctor.length; i++) {
                if (this.jsonDoctor.Doctor[i].Name == name)
                    nameAt = this.jsonDoctor.Doctor.indexOf(this.jsonDoctor.Doctor[i]);
            }
            if (nameAt == -1)
                console.log("Doctor Not Found....!!!");
            else {
                console.log("Doctor Found....!!!\n");
                console.log("\t" + name + "'s Details: ");
                this.singleDoctor(nameAt);
            }
            return nameAt;
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    }
    /**
     * @description : search doctor by id.
     */
    searchDoctorByID() {
        var id = readLineSync.questionInt("Enter Doctor ID: ")
        var idAt = -1;
        try {
            for (let i = 0; i < this.jsonDoctor.Doctor.length; i++) {
                if (this.jsonDoctor.Doctor[i].ID == id)
                    idAt = this.jsonDoctor.Doctor.indexOf(this.jsonDoctor.Doctor[i]);
            }
            if (idAt == -1)
                console.log("Doctor Not Found....!!!");
            else {
                console.log("Doctor Found....!!!\n");
                console.log("\tDoctor's Details: ");
                this.singleDoctor(idAt);
            }
            return idAt;
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    }
    /**
     * @description : search doctor by specialization.
     */
    searchDoctorBySpecialization() {
        var specialization = this.sringValidation("Doctor's Specialization");
        var specializationAt = -1;
        try {
            for (let i = 0; i < this.jsonDoctor.Doctor.length; i++) {
                if (this.jsonDoctor.Doctor[i].Specialization == specialization)
                    specializationAt = this.jsonDoctor.Doctor.indexOf(this.jsonDoctor.Doctor[i]);
            }
            if (specializationAt == -1)
                console.log("Doctor Not Found....!!!");
            else {
                console.log("Doctor Found....!!!\n");
                console.log("\tDoctor's Details: ");
                this.singleDoctor(specializationAt);
            }
            return specializationAt;
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    }
    /**
     * @description : to display information of doctor,
     * @param {number} index : index position of doctor in json file.
     */
    singleDoctor(index) {
        try {
            console.log("\t\t~ Name : " + this.jsonDoctor.Doctor[index].Name);
            console.log("\t\t~ ID : " + this.jsonDoctor.Doctor[index].ID);
            console.log("\t\t~ Specialization : " + this.jsonDoctor.Doctor[index].Specialization);
            console.log("\t\t~ Availability :- " + this.jsonDoctor.Doctor[index].Availability);
            console.log("\t\t~ Current Patients :- " + this.jsonDoctor.Doctor[index].NoOfPatients);
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    }
    /**
     * @description : to display all Doctor information.
     */
    allDoctors() {
        console.log("\n\t\t\t\t\t*** All Doctor Details ***\n");
        console.log("\t-----------------------------------------------------------------------------------------------------------------------------------------");
        console.log("\t|\t Doctor Name \t|\t Doctor ID \t|\t  Specialization \t|\t Availability \t|\t Current Patient \t|");
        console.log("\t-----------------------------------------------------------------------------------------------------------------------------------------");
        try {
            for (let i = 0; i < this.jsonDoctor.Doctor.length; i++) {
                console.log("\t|\t " + this.jsonDoctor.Doctor[i].Name + "\t"
                    + "\t|\t " + this.jsonDoctor.Doctor[i].ID + "\t"
                    + "\t|\t " + this.jsonDoctor.Doctor[i].Specialization + "\t\t"
                    + "\t|\t " + this.jsonDoctor.Doctor[i].Availability + "\t"
                    + "\t|\t " + this.jsonDoctor.Doctor[i].NoOfPatients + "\t\t\t|");
            }
        } catch (error) {
            console.log("* ERROR: " + error);
        }
        console.log("\t-----------------------------------------------------------------------------------------------------------------------------------------");
    }
}