


function prime() {
    var read = require('readline-sync');
    var Prime = require('../DSUtil/DataStructureUtility');
    //var show = require('util');
    var primes = [[], [], [], [], [], [], [], [], [], []];
    var initial = 1;
    var final = 100;

    try {

        if (index == -1 || index > 10) {
            console.log("prime numbers not calculated for this range ");
        }
        else {
            console.log(' Prime Numbers in the given range are \n');
            for (var index = 0; index < 10; index++) {
                primes[index] = Prime.checkPrime(initial, final);//put the prime numbers in array 
                initial = initial + 100;//change start index of value by 100
                final = final + 100;//change end value by 100 
            }
            var start = 0;
            var end = 100;

            //This condition checks the prime number range from starting to ending values 

            for (let index1 = 0; index1 < 10; index1++) {

                console.log("[" + "[" + start + "-" + end + "]" + " " + "[" + primes[index1] + "]" + "]");

                start = start + 100;
                end = end + 100;
                console.log();
            }
            
        }
    }
    catch (err) {
        console.log('error');
    }

    return [initial, final];
}
module.exports = prime();
