module.exports = {
    /**
    * @description this method is for print the prime numbers between given range 
    * @param integer number range
    * @returns print primenumbers
    */

    printPrimeNumbers(lowest, highest) {
        try {
            var number = 0;
            var divisor = 0;
            var count = 0;
            for (number = lowest; number < highest; number++) {
                var flag = 0;
                for (divisor = number; divisor >= 1; divisor--) {
                    if (number % divisor == 0) {
                        flag = flag + 1;
                    }
                }
                if (flag == 2) {
                    console.log(number, " primeNumber");
                    count++;
                }
            }
            console.log(" Total Prime Numbers between", lowest, " and ", highest, " are : ", count);
        } catch (error) {
            console.log("error");
        }
    },
    /**
        * @description this method is for print the prime numbers between given range 
        * @param integer number range
        * @returns print primenumbers
        */
    anagramDetection() {
        try {
            var read = require('readline-sync');

            var firstString = read.question("Enter First String: ");
            var secondString = read.question("Enter second String: ");

            var format = /[a-zA-Z]/;
            var str_Len = firstString.length;
            var str_Length = secondString.length;
            var count = 0;
            var flag = 0;
            console.log(" strlen1", str_Len);
            if (format.test(firstString) && format.test(secondString)) {
                if (str_Len != str_Length) {
                    console.log(" its is not anagram");
                } else {
                    for (var i = 0; i < str_Len; i++) {

                        for (var j = 0; j < str_Length; j++) {
                            if (secondString[j].toLowerCase() == firstString[i].toLowerCase()) {
                                console.log(" str1", secondString[j], " ===", " str2", firstString[i]);
                                count++;
                                break;
                            }
                        }
                    }

                    if (count == str_Len) {
                        console.log(" Strig is anagram ");
                        flag = flag + 1;

                    } else {
                        console.log("string is not angram");

                    }
                }

            } else {
                console.log(" only For String Not for digits ");

            }
        }
        catch (error) {
            console.log(" Exception : ")

        }
        console.log(" flg", flag);

        return [str_Len, str_Length, firstString, secondString, flag];
    },

    /**
        * @description this method is for calculate day of week 
        * @param parameters are date month and year
        * @returns return day of week
        */
    dayOfWeek(date, month, year) {
        try {
            console.log(date, " ", month, " ", year);
            var a = Math.floor((14 - month) / 12);
            var y = year - a;
            var m = month + 12 * a - 2;
            var d = (date + y + Math.floor(y / 4) - Math.floor(y / 100) +
                Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;

            return d;

        } catch (error) {
            console.log("error");
        }
    },

    /****************************************************************************
       * @description this method is for calculate Monthly payment
       * @param parameters are rate of Interest R, Principal ,and Year
       * @returns return payment
       */
    Payment(principal, Year, Rate) {
        try {
            var n = 12 * Year;
            var r0 = Rate / (12 * 100);
            var payment = Math.floor(principal * r0 / (1 - Math.pow((1 + r0), -n)));
            return payment;
        } catch (error) {
            console.log("error");
        }
    },

    /***************************************************************************
       * @description this method is for calculate Square root of positive number 
       * @param integer number
       * @returns squre root
       */

    sqrt(c) {

        try {
            var t = c;
            var epsilon = 1e-15;
            while (Math.abs(t - c / t) > epsilon * t) {
                t = (c / t + t) / 2;
            }
            return t;

        } catch (error) {
            console.log("error");
        }
    },

    /*******************************************************************************************************
       * @description this method is for convert temperautre fahrenheit to celcius and celcius tofahrenheit 
       * @param Integre temperature 
       * @returns converrted temprature 
       */

    convertTemperature(t) {
        try {
            var read = require('readline-sync');

            var convert;
            if (t == 'c' || t == 'C') {
                var temp = read.question(" Enter temp in celcius : ");

                convert = Math.floor((temp * 9 / 5) + 32);
                console.log(" In celcius tempertaure ", temp, " in fahrenheit is : = ", convert);
            }
            if (t == 'f' || t == 'F') {
                var temperature = read.question(" Enter temperture in fahrenheit : ")
                convert = Math.floor((temperature - 32) * 5 / 9);
                console.log("In fahrenheit temperature is ", temperature, " in celcius is := ", convert);
            } else {
                console.log(" please enter correct input C or F");

            }
            return convert;
        } catch (error) {
            console.log("error");
        }
    },

    /*******************************************************************************
      * @description this method is used for binary search integer value 
      * @param Integre array
      * @returns search element 
      */
    binarySearchForInt(array, searchkey) {
        try {
            var higherIndex = array.length - 1;
            var lowerIndex = 0;
            var middle;
            while (lowerIndex <= higherIndex) {

                middle = Math.floor((lowerIndex + higherIndex) / 2);

                if (array[middle] === searchkey) {

                    return middle;
                } else if (array[middle] < searchkey) {

                    lowerIndex = middle + 1;

                } else {
                    higherIndex = middle - 1;
                }
            }
            return -1;
        } catch (error) {
            console.log("error ");
        }
    },

    /*************************************************************************
      * @description this method is used for binary search String value 
      * @param String array
      * @returns search element 
      **/
    binarySearchForString(array, searchkey) {
        try {
            var higherIndex = array.length - 1;
            var lowerIndex = 0;
            var middle;
            while (array[middle] != searchkey && lowerIndex < higherIndex) {

                middle = Math.floor((lowerIndex + higherIndex) / 2);

                if (array[middle] === searchkey) {

                    return middle;
                } else if (array[middle] < searchkey) {

                    lowerIndex = middle + 1;

                } else {

                    higherIndex = middle - 1;
                }
            }
            return -1;
        } catch (error) {
            console.log("error ");
        }
    },


    /*************************************************************************
      * @description this method is used for insertion sort String value 
      * @param String array
      * @returns sorted array 
      **/
    insertionSortForString(array) {
        try {
            var hole, i;
            var value;
            for (i = 1; i < array.length; i++) {
                value = array[i];
                hole = i;
                while (hole > 0) {
                    if (value.localeCompare(array[hole - 1]) > 0) {
                        break;
                    }
                    array[hole] = array[hole - 1];
                    hole = hole - 1;
                }
                array[hole] = value;
            }
            console.log(" Sorted array of string: ");
            for (i = 0; i < array.length; i++) {
                console.log(array[i]);
            }
        } catch (error) {
            console.log(" Error ");
        }

    },

    /*************************************************************************
     * @description this method is used for insertion sort String value 
     * @param String array
     * @returns sorted array 
     **/
    insertionSortForInt(array) {
        try {
            var hole, i, value;
            for (i = 1; i < array.length; i++) {
                value = array[i];
                hole = i;
                while (hole > 0) {
                    if (value > array[hole - 1]) {
                        break;
                    }
                    array[hole] = array[hole - 1];
                    hole = hole - 1;
                }
                array[hole] = value;
            }
            return array;

        } catch (error) {
            console.log(" error");
        }
    },

    /*************************************************************************
      * @description this method is used for bubble Sort String value 
      * @param String array
      * @returns sorted array 
      **/


    bubbleSortForString(array) {
        try {
            var i, j, temp;
            for (i = 0; i < array.length; i++) {
                for (j = 0; j < array.length - 1 - i; j++) {
                    if (array[j].localeCompare(array[j + 1]) > 0) { //compare two strings j and j+1
                        temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
            console.log("Sorted array of string: ", array.join(" "));

        } catch (error) {
            console.log("Error ");
        }
    },

    /*************************************************************************
      * @description this method is used for bubble Sort Integer value 
      * @param Integer  array
      * @returns sorted array 
      **/
    bubbleSortForInt(array) {
        try {
            for (var i = 0; i < array.length; i++) {
                for (var j = 0; j < array.length; j++) {
                    if (array[j] > array[j + 1]) {
                        var temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
            return array;
        } catch (error) {
            console.log(" error ");
        }

    },

    /*************************************************************************
      * @description to find guessed number 
      * @param  integer 
      * @returns find guessed element 
      **/

    find(powerOftwo) {
        try {
            var read = require('readline-sync');

            var low = 0, high = powerOftwo - 1, mid;
            while (low != high) {
                mid = Math.floor((low + high) / 2);
                console.log("Enter  1 if no is between " + low + " - " + mid + "\nEnter 2 if no is between "
                    + (mid + 1) + " - " + high);
                var answer = read.question();
                mid = Math.floor((low + high) / 2);
                if (answer == 1)
                    high = mid;
                else
                    low = mid + 1;
            }
            console.log(" gueessed number", low);
            return low;
        } catch (error) {
            console.log(" error");
        }
    },

    /*************************************************************************
      * @description this method for convert change in number of notes for vending machine 
      * @param Intger Array
      * @returns Number of notes 
      **/
    changeConverter(value) {
        try {
            var notes = ["1000", "500", "100", "50", "20", "10", "5", "2", "1"];

            var total = 0;
            for (var i = 0; i < notes.length; i++) {
                if (value / notes[i] != 0) {
                    var NumberofNotes = Math.floor(value / notes[i]);
                    total = total + NumberofNotes;
                    console.log(notes[i] + " Rs notes :" + NumberofNotes);// ith number of notes
                    value = value % notes[i];
                }
            }
            console.log("Notal notes : " + total); // count total notes
        } catch (error) {
            console.log(" wrong input")
        }
        return total;
    },

    /*************************************************************************
      * @description this method is used for bubble Sort String value 
      * @param String array
      * @returns sorted array 
      **/

    sort(arr, lowIndex, highIndex) {
        try {
            if (lowIndex < highIndex) {
                // Find the middle point
                var middle = Math.floor((lowIndex + highIndex) / 2);
                // Sort first and second halves
                this.sort(arr, lowIndex, middle);
                this.sort(arr, middle + 1, highIndex);
                // Merge the sorted halves
                this.Merge(arr, lowIndex, middle, highIndex);
            }
        } catch (error) {
            console.log("error ");
        }
        return arr;
    },

    /*************************************************************************
      * @description this method is used for bubble Sort String value 
      * @param String array
      * @returns sorted array 
      **/
    Merge(sortArray, lowIndex, middle, highIndex) {
        //// Calculate length of two sub arrays
        var leftSize = middle - lowIndex + 1;
        var rightSize = highIndex - middle;
        // new two sub arrays
        var LeftArray = [leftSize];
        var RightArray = [rightSize];
        //// move strings from left of middle in Left sub array
        for (var i = 0; i < leftSize; i++) {
            LeftArray[i] = sortArray[lowIndex + i];
        }
        //console.log(LeftArray)
        //// move strings from right of mid in Right sub array
        for (var j = 0; j < rightSize; j++) {
            RightArray[j] = sortArray[middle + 1 + j];
        }
        //// Merge the temporary arrays
        var i = 0, j = 0;
        //// Initial index of merged sub array array
        var k = lowIndex;
        while (i < leftSize && j < rightSize) {
            if (LeftArray[i].localeCompare(RightArray[j]) < 0) {// sorting condition checking here
                sortArray[k] = LeftArray[i];
                i++;
            } else {
                sortArray[k] = RightArray[j];
                j++;
            }
            k++;
        }
        //// Copy remaining elements of L[] if any
        while (i < leftSize) {
            sortArray[k] = LeftArray[i];
            i++;
            k++;
        }
        //// Copy remaining elements of R[] if any */
        while (j < rightSize) {
            sortArray[k] = RightArray[j];
            j++;
            k++;
        }
        var result = sortArray;
        return result;
    }











}