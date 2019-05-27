var read = require('readline-sync');

module.exports = {
    /**
    * @description this method is for write test file using path
    * @param filepath , data
    * @returns nothing
    */

    writeFile(filePath, data) {
        const fs = require('fs');
        fs.writeFile(filePath, data, function (err) {
            if (err) {
                return console.log(err);
            }

        });
    },
    /**
    * @description this method is for print prime in formate
    * @param Integer array 
    * @returns priunted prime numbers
    */

    prime() {
        constructor()
        {
            var status = 1;
            var num = 3;
            var arr = [178];

            var i, j;
        }
        console.log("First 1000 prime numbers are:");
        for (i = 0; i <= 166;) {
            for (j = 2; j <= Math.sqrt(num); j++) {
                if (num % j == 0) {
                    //
                    status = 0;
                    break;
                }
            }
            if (status != 0) {

                arr[i] = num;
                i++;

            }

            status = 1;
            num++;

        }
        return arr;
    },


    /**
    * @description this method is for find prime nuymber
    * @param Integer array 
    * @returns prie numbers
    */

    getPrimeNumber(number) {
        if (number <= 1000) {
            for (var i = 1; i <= number; i++) {
                var temp = 0;
                for (var j = 2; j < i - 1; j++) {
                    if (i % j == 0) {
                        temp = temp + 1;
                    }
                }
                if (temp == 0) {
                    console.log("Prime Number:" + i);
                }
            }
            return number;
        }
        else {
            console.log("Number is out of range")
        }
    },
    /**
    * @description this method is for to check number is prime or not
    * @param Integer array 
    * @returns true false
    */
    isPrime(num) {
        try {
            if (num == 0 || num == 1)
                return false;
            for (let i = 2; i < num; i++) {
                if (num % i == 0)
                    return false;
            }
            return true;
        }
        catch (e) {
            console.log(e.message);
        }
    },
    /**
       * @description this method is for find prime numbers
       * @param Integer array 
       * @returns prime numbers
       */
    findPrimeNumber(num) {
        try {
            console.log("Prime number must be in the range of 0-1000");
            for (let i = 0; i <= num; i++) {
                if (this.isPrime(i))
                    console.log(i);
            }
        }
        catch (e) {
            console.log(e.message);
        }
    },
    /**
    * @description this method is for check number is palindrome or not 
    * @param Integer array 
    * @returns ttrue or false
    */
    isNumberPalindrome(n1) {
        try {
            var string = "";
            n1 = n1 + "";

            for (let i = 0; i < n1.length; i++) {
                string = n1.charAt(i) + string;
            }
            if (string == n1) {
                return true;
            }
            return false;
        }
        catch (e) {
            console.log(e.message);
        }
    },
    /**
    * @description this method is for find is angram method for string anagram or not
    * @param Integer array
    * @returns true /false
    */

    isAnagram(s1, s2) {
        try {
            var format = /[a-zA-Z0-9]/;
            var result;
            if (format.test(s1) && format.test(s2)) {
                if (s1.length !== s2.length) {
                    result = false;
                }
                var sorts1 = s1.toString().split("").sort().join("");
                var sorts2 = s2.toString().split("").sort().join("");
                result = sorts1 === sorts2;
                if (result == true) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                console.log("enter only letters or alphabets");
            }
        }
        catch (e) {
            console.log(e.message);
        }
    },
    /**
    * @description this method is for number is Anagram palindrome checking
    * @param Integer number
    * @returns Anagram Paklindrome Numbers
    */

    isAnagramPalindrome() {
        try {
            console.log("Prime number in the range 0-1000 which are anagram and palindrome ");
            var arr = [];
            for (let i = 0; i < 1000; i++) {
                if (this.isPrime(i)) {
                    arr.push(i);
                }
            }
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (this.isAnagram(arr[i], arr[j])) {
                        console.log(arr[i] + " and " + arr[j] + " are anagram");
                        if (this.isNumberPalindrome(arr[i])) {
                            console.log(arr[i] + " is palindrome");
                        }
                        if (this.isNumberPalindrome(arr[j])) {
                            console.log(arr[j] + " is Palindrome");
                        }
                    }
                }
            }
        }
        catch (e) {

            console.log(e.message);

        }
    },
    /**
    * @description this method is for find the facttorials fopr binary tree
    * @param Integer number
    * @returns factorialnumber 
    */
    factorial(num) {
        let fact = 1;;

        for (i = 1; i <= num; i++) {
            fact = fact * i;
        }

        return fact;
    },
    /**
    * @description this method is for binary trees
    * @param Integer number
    * @returns number of binary trees
    */
    binaryTree(nodes) {
        if (nodes >= 1 && nodes <= 85) {
            var no_of_trees = Math.floor((this.factorial(2 * nodes)) / (this.factorial(nodes + 1) *
                this.factorial(nodes)));
            console.log(no_of_trees);
        } else {
            console.log(" number should be between 1 to 1000");

        }

        return no_of_trees;
    },

    /**
    * @description this method is for print the calendar in 2D format
    * @param Integer month and year
    * @returns 2d printed calendar 
    */
    calender(month, year) {

        let util = require('util');
        let months = [" ", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
            "November", "December"]
        let days = ["  sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        let monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        if (month == 2 && this.isLeapYear(year))
            monthDays[month] = 29;


        let startday = this.dayOfWeek(month, 1, year);

        console.log("            " + months[month] + " - " + year);
        // week days
        console.log(days[0] + "  " + days[1] + "  " + days[2] + "  " + days[3] + "  " + days[4] + "  " + days[5] + "  " + days[6]);

        var j;

        row = 0;
        var numberofDays = monthDays[month];

        util.print(" ")
        // print number of spaces till starting date
        for (j = 0; j <= startday * 5; j++) {
            util.print(" ");
        }
        for (let i = 1; i <= numberofDays; i++) {
            if (i < 10)
                // date is less than 10 print 
                util.print(" " + i + "   ");
            else {
                // if date is greater than 9
                util.print(" " + i + "  ");
            }

            if ((startday + i) % 7 == 0) {
                //for changing the line.
                console.log();
                util.print("  ");
            }
        }
        console.log("\n\n");
        return startday;

    },
    /**
    * @description this method is for check year is leap or not
    * @param Int  year 
    * @returns true /false
    */
    isLeapYear(year) {
        try {
            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
                console.log(year, " is leap year")
                return true;
            } else {

                return false;
            }
        } catch (error) {
            console.log(error);
        }

    },
    /**
    * @description this method is for calculate the starting day of month
    * @param date
    * @returns starting Day of Month
    */

    dayOfWeek(month, date, year) {
        try {
            // console.log(date, " ", month, " ", year);
            if (month == 2) {
                var a = Math.floor((14 - month) / 12);
                var y = year - a;
                var m = month + 12 * a - 2;
                var d = (date + y +
                    Math.floor(y / 4) -
                    Math.floor(y / 100) +
                    Math.floor(year / 400) +
                    Math.floor((31 * m) / 12)) % 7;

            } else {
                var a = Math.floor((14 - month) / 12);
                var y = year - a;
                var m = month - 2;
                var d = (date + y +
                    Math.floor(y / 4) -
                    Math.floor(y / 100) +
                    Math.floor(year / 400) +
                    Math.floor((31 * m) / 12)) % 7;

            }
            // var v = Math.floor((14 - month) / 12)
            // var y0 = year - v
            // var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400)
            // var m0 = month + 12 * Math.floor((14 - month) / 12) - 2
            // var d0 = (date + x + Math.floor((31 * m0) / 12)) % 7
            // d0 = Math.floor(d0)
            // return d0;

            // return d;
            //  console.log(" day ", d," a  ",a," y ",y," m ",m," x ",x);


            return d;

        } catch (error) {
            console.log("error");
        }
    },

    /**
     * @description this method is for number is prime or not 
     * @param Integer array 
     * @returns return array
     */
    checkPrime(s1, s2) {
        var count = 0, flag = 0, k = 0;
        var array = [];
        for (var i = s1; i <= s2; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 0;
                    count++;
                    break;
                }
                else {
                    flag = 1;
                }
            }
            if (flag == 1) {
                array[k++] = i;


            }
        }
        return array;
    },

    /**
    * @description this method is for primeAnagram numbers
    * @param Integer array 
    * @returns prime anagrams
    */
    findAnaPrime(initial, final) {
        var primes = this.findPrime(initial, final);
        var n = primes.length;
        var anaPrimes = [];
        var h = 0;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (this.checkAnagram2(primes[i], primes[j])) {
                    anaPrimes[h++] = primes[i];
                    anaPrimes[h++] = primes[j];
                }
            }
        }
        return anaPrimes;
    },

    /**
    * @description this method is for numbers are angagrams or not 
    * @param Integer array
    * @returns anagram numbers
    */
    checkAnagram2(str1, str2) {
        let unsortedStr1 = "" + str1;
        let unsortedStr2 = "" + str2;
        if (unsortedStr1.length != unsortedStr2.length) {
            return false;
        }
        sortedStr1 = this.sort1(unsortedStr1);
        sortedStr2 = this.sort1(unsortedStr2);
        let b = this.check(sortedStr1, sortedStr2);
        if (b == true) {
            return true;
        }
        else {
            return false;
        }
    },

    /**
     * @description this method is for find prime numbers
     * @param Integer number
     * @returns  prime integers
     */
    findPrime(s1, s2) {
        var count = 0, flag = 0, k = 0;
        var prime = [];
        for (var i = s1; i <= s2; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 0;
                    count++;
                    break;
                }
                else {
                    flag = 1;
                }
            }
            if (flag == 1) {
                prime[k++] = i;
            }
        }
        return prime;
    },

    /**
    * @description this method is for cheak char of string 1 and 2 not equal string 2 character
    * @param string 
    * @returns true false
    */
    check(s1, s2) {
        for (let i = 0; i < s1.length; i++) {
            if (s1.charAt(i) != s2.charAt(i)) {
                return false;
            }
        }
        return true;
    },

    /**
    * @description this method is for sorting 
    * @param string 
    * @returns sorted string
    */
    sort1(str) {
        let ch = str.split('');
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j < str.length; j++) {
                if (ch[i] > ch[j]) {
                    let t = ch[i];
                    ch[i] = ch[j];
                    ch[j] = t;
                }
            }
        }
        var sortedStr = "";
        for (let i = 0; i < ch.length; i++) {
            sortedStr += ch[i];
        }
        return sortedStr;
    },
     /**
    * @description this method is for hashtable index generating purpose
    * @param int value 
    * @returns in value
    */
    hash(str) {
        var index = Math.floor(str % 11);

        return index;
    },

     /**
    * @description this method is for user input character all alphabets validation
    * @param string 
    * @returns true or false
    */
    allLetter(inputtxt) {
        var letters = /^[A-Za-z]+$/;
        if (inputtxt.match(letters)) {
            console.log('Your name have accepted : you can try another');
            return true;
        }
        else {
            console.log('Please input alphabet characters only');
            return false;
        }
    }






}