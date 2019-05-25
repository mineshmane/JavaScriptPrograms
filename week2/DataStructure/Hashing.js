var read = require('readline-sync');
var ulist = require('../DSUtil/LinkedList');
var util = require('../DSUtil/DataStructureUtility');
var fileStream = require('fs');



try {
	var slot = [[], [], [], [], [], [], [], [], [], [], []];

	slot = new ulist.LinkedList;


	for (let i = 0; i < 11; i++) {
		slot[i] = new ulist.LinkedList;
	}
//	console.log(slot);


	var string = fileStream.readFileSync('/home/admin1/unorder.txt', 'UTF-8');
	var strArray = string.split(' ');

	//console.log(strArray);


	for (let i = 0; i < strArray.length; i++) {
		let slotNum = util.hash(strArray[i]);
		console.log(" hsh called", slotNum);

		slot[slotNum].add(strArray[i]);
		console.log(slot[slotNum]);
	}

	console.log();


	for (let i = 0; i < 11; i++) {
		console.log(i + "==> :\n");
		slot[i].show();

	}

	console.log("Enter the String to search:");
	var key = read.questionInt();
	var slotNumber =util.hash(key);
	var value = slot[slotNumber].search(key);
	if (value == true) {
		console.log("\nElement found at slot " + slotNumber + " and deleted\n");
		slot[slotNumber].remove(key);
	} else {
		console.log("\nElement not found but added " + key + " at slot " + slotNumber + "\n");
		slot[slotNumber].add(key);
	}
	console.log();

	for (let i = 0; i < 11; i++) {
		console.log(i + "==> ");
		slot[i].show();
	}

	var st = " ";
	for (let i = 0; i < 11; i++) {
		st = st + slot[i].toString();
	}
	var word = slot.getData();
	//console.log("word=", word);

	util.writeFile('/home/admin1/unorder.txt', word);

	slot.show();
	

} catch (e) {
	console.log("error");

}

