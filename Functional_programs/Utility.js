module.exports = {
    /**
    * @description this method is for replace string and print it 
    * @param string 
    * @returns replaced string 
    */
    replaceString(string) {
        try {

            var read = require('readline-sync');
            var string2 = read.question("Enter UserName\n");
            if (string2.length > 3) {
                var string = string.replace("<<UserName>>", string2);

                console.log("After Replacement :", string);
            } else {
                console.log("string len should be the greater than three")
            }
        } catch (error) {
            console.log();

        }
        return string2;
    },



    /**
    * @description this method is for find the triplets
    * @param Integer array 
    * @returns triplet numbers and number of pairs are tripltes
    */
    findTriplets(array) {
        try {
            var counter = 0;

            console.log(" print number of distinct triplet paires ");
            for (var i = 0; i < array.length - 2; i++) {

                for (var j = i + 1; j < array.length - 1; j++) {

                    for (var k = j + 1; k < array.length; k++) {
                        if (Number(array[i]) + Number(array[j]) + Number(array[k]) == 0) {
                            console.log(array[i], " + ", +array[j], " + ", +array[k], "= 0");
                            counter++;
                        }
                    }
                }
            }
            console.log(counter, " paires are triplets  ");
        } catch (error) {
            console.log(error.findTriplets)
        }
        return counter;
    },
    /**
    * @description this method is for calculate the percentage of heads and tails  
    * @param integer number of times coin fliped  
    * @returns percentage of coin heads and percentage of coin tails
    */

    coinPercentage(numberOfFlip) {
        try {
            var head = 0;

            if (numberOfFlip > 0) {
                for (var i = 1; i <= numberOfFlip; i++) {
                    var num = Math.random(numberOfFlip);
                    if (num <= 0.5) {
                        head++;
                    }
                }
                var totalheadper = 100 * (head / numberOfFlip);
                console.log("Head Percentage: ", totalheadper);
                var tailper = 100 - totalheadper;
                console.log("Tails Percentage : ", tailper);
            } else {
                console.log(" number should be positivee Integeer ");
            }

        } catch (error) {
            console.log(" error");
        }
        return [totalheadper, tailper, numberOfFlip];
    },


    /**
    * @description this method is for find the Euclidean Distance
    * @param two parameters x and y Integer
    * @returns EclideanDistance 
    */
    findDistance(x, y) {
        try {
            if (x != 0 && y != 0) {
                var xpow = x * x;
                var ypow = y * y;
                var total = xpow + ypow;
                var dist = Math.sqrt(total);
                console.log("Euclidean diststance: ", +dist);
            } else {

                console.log(" please enter x and y it shouldnot be zero or null :");
            }
        } catch (error) {
            console.log(" exception ")
        }
        return dist;

    },

    /**
    * @description this method is for prints Nth harmonic number series
    * @param integer number 
    * @returns Nth harmonic number
    */

    printHarmonicNumbers(number) {
        try {
            var harmonic = 1;
            if (number > 0) {
                for (var i = 2; i <= number; i++) {
                    console.log(" ", harmonic);
                    harmonic += 1 / i;
                }
            } else {
                console.log(" number should be greater than zero")
            }
        } catch (error) {
            console.log("error");
        }
        return harmonic;
    },

    /**
    * @description this method is for checking year is leap or not 
    * @param integer number 
    * @returns nothing
    */
    checkLeapYear(year) {
        var flag = 0;
        try {
            if (year > 999 && year < 10000)
                if (((year % 4 == 0) && (year % 100 != 0)) ||
                    (year % 400 == 0)) {
                    console.log(year, " is leap year  ");
                    flag = flag + 1;
                } else {

                    console.log(year, " is not leap year");
                } else {
                console.log("invalid year");
            }

        } catch (error) {
            console.log("error");
        }
        return flag;
    },


    /**
    * @description this method is for print power of  twotable
    * @param integer number 
    * @returns 
    */

    PowerofTwo(power) {
        var value = 0;
        var count = 0;
        try {
            if (power < 31 && power > 0) {
                // repeat i equals to number
                for (i = 1; i <= power; i++) {

                    value = Math.pow(2, i);
                    console.log(i + "th    power value  " + value);
                    count++;

                }
            } else {
                console.log("please Enter the number  less than 31 and greater than 0");
            }
        } catch (error) {
            console.log("err");
        }
        return count;
    },

    /**
    * @description this method is for print 2D array
    * @param column row
    * @returns row,column
    */
    twoDarray(row, column) {
        try {
            var read = require('readline-sync');
            var arr = [];
            for (var i = 0; i < row; i++) {
                arr[i] = [];

                for (var j = 0; j < column; j++) {

                    var arr_element = parseInt(read.question("Enter the value : "));
                    arr[i][j] = arr_element;

                }
            }
            for (var i = 0; i < row; i++) {
                console.log(arr[i].join(" "));

            }

        } catch (error) {
            console.log("error");
        }
    },

    /**********************************************************************************
    * @descriptionThis Mehtod is for calculate the whether chill using temp and windspeed
    * @param integer temperature and windspeed
    * @returns w chill whether
    */
    windChill(temp, windspeed) {
        try {
            var w = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow(windspeed, 0.16);
        } catch (error) {
            console.log(" Error")

        }

        return w;
    },
    /**
    * @descriptionThis Mehtod is for calculate the root of Quadratic equation
    * @param integer temperature and windspeed
    * @returns w chill whether
    */

    findRoot(a, b, c) {

        try {
            var delta = b * b - 4 * a * c;


            // if delta is greater than zero condition for real and different roots
            // Determinant
            if (delta > 0) {
                var root1 = (-b + Math.sqrt(delta)) / (2 * a);
                var root2 = (-b - Math.sqrt(delta)) / (2 * a);

                console.log(" delta is greater than zero ")
                console.log("root1 = ", root1, " and root2 = ", root2);

            }
            // if delta is equals to zero then Condition for real and equal roots
            else if (delta == 0) {
                console.log("delta is equals to zero ");

                root1 = root2 = -b / (2 * a);

                console.log("root1 = root2 = %.2f;", root1);
            }
            // If delta is less than zero then roots are not real
            else {
                console.log(" delta is les  than zeero it in negative")
                var realPart = -b / (2 * a);
                var imaginaryPart = Math.sqrt(-delta) / (2 * a);

                console.log("root1 = ", realPart, imaginaryPart, "i", "   root2 = ", realPart,
                    imaginaryPart, "i");
            }
        } catch (error) {
            console.log(" error ")
        }
        return delta;

    }




}