/************************************************************************************************
* Execution : 1. default node cmd> node OrderedList.js 
* 
* Purpose :Operation on Test file read write add data delete data using linkedlist programs
* 
* @file : OrderedList.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 25-05-2019
*
*************************************************************************************************/

function orderedList() {

	try {
		var read = require('readline-sync');
		var ulist = require('../DSUtil/LinkedList');
		var util = require('../DSUtil/DataStructureUtility');
		var fileStream = require('fs');

		var ll = new ulist.LinkedList;
		var string = fileStream.readFileSync('/home/admin1/unorder.txt', 'UTF-8');
		var arr = string.split(' ');

		var sortarr = arr.sort(function (a, b) { return a - b });

		for (let i = 0; i < sortarr.length; i++) {

			ll.add(arr[i]);
		}
		console.log("list is: ");
		ll.show();
		console.log(ll.sizeOfList());

		ll.sizeOfList();


	

		console.log("enter the value you want to search in file");

		var SEARCH = read.questionInt();// calling method to scan user word
		var search=ll.search(SEARCH);
		if (ll.search(SEARCH) == true) // calling search method to check condition
		{
			console.log(SEARCH + " number is found in file");
			console.log("removing number from flie");

			ll.remove(SEARCH); // deleting the word
			ll.show();// display element

			var word = ll.getData(); // calling method to store elements in a single variable

			util.writeFile('/home/admin1/unorder.txt', word);

			console.log(" list elements are: ");

			ll.show();
		} else {
			console.log("number is not found in file");
			do {
				console.log("where you want to add the number ");
				console.log("Enter 1.Add at First");
				console.log("Enter 2.Add at Specific Position");
				console.log("Enter 3.Add at Middle");
				console.log("Enter 4.Add at Last");
				var ch = read.questionInt();
			} while (ch > 4 || ch < 0)
			switch (ch) {
				case 1:
					ll.insertAtFirst(SEARCH);
					break;
				case 2:
					console.log("Enter Postiion ");
					var pos = read.question();
					ll.insertAtPosition(pos, SEARCH);
					break;
				case 3:
					ll.insertAtMiddle(SEARCH);
					break;
				case 4:
					ll.add(SEARCH);
					break;
			}
			ll.show();
			var word = ll.getData();// converting list words to a string
			util.writeFile('/home/admin1/unorder.txt', word);
			console.log(" list elements are: ");
			ll.show();
		}

	} catch (error) {
		console.log("filenot found error: ");
	}
	return[string,SEARCH,ch,search]
} module.exports = orderedList();