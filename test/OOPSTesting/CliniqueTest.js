const assert = require('chai').assert;
const clinic = require('../../week3/ClinicUtility');
const fs = require('fs');

var data = fs.readFileSync('/home/admin1/JavaScriptPrograms-master/week3/jsonFile/Clinic.json')
var clinique = JSON.parse(data);

describe('Doctor Search Method', function () {
    it(' mehtod return index of object by Name search', function () {
        var result = clinic.searchDoctorByname(clinique, "Dr Mehta");
        console.log(result);

        assert.isTrue(result == true, '  return true when doctor found');
    });

    it(' mehtod return index of object by ID search', function () {
        var result = clinic.searchDoctByID(clinique, 150);
        console.log(result);

        assert.isTrue(result == true, '  return true when doctor found');
    })
})



describe('Patient Search Method Postive Testing', function () {
    it(' mehtod return index of object by Name search', function () {
        var result = clinic.searchPatientByName(clinique, "minesh");
        console.log(result);

        assert.isTrue(result == true, '  return true when Patient found');
    });

    it(' mehtod return index of object by mobile number search', function () {
        var result = clinic.searchPatientById(clinique, 9999999999);
        console.log(result);

        assert.isTrue(result == true, '  return true when patient found');
    })
})

describe('Doctor Search Method Negative Test cases', function () {
    it(' method  retrun false ', function () {
        var result = clinic.searchDoctorByname(clinique, "Mehta");
        console.log(result);

        assert.isTrue(result == true, '  return true when doctor found');
    });

    it(' mehtod  return false ', function () {
        var result = clinic.searchDoctByID(clinique, 15);
        console.log(result);

        assert.isTrue(result == true, '  return true when doctor found');
    })
})

describe('Patient Search Method Negative Test cases', function () {
    it(' method  retrun false when patient not found by name seach method', function () {
        var result = clinic.searchPatientByName(clinique, "Mehta");
        console.log(result);

        assert.isTrue(result == true, '  return true when doctor found');
    });

    it(' mehtod  return false when mobile number saerch method', function () {
        var result = clinic.searchPatientById(clinique, 15);
        console.log(result);

        assert.isTrue(result == true, '  return true when doctor found');
    })
})


