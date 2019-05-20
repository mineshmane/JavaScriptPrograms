
function unordered() {
    var list = require('../DataStructure/LinkedList');
    var filestream = require('fs');
    var readline = require('readline-sync');
    var writeUtil = require('./DataStructureUtility');
    try {

        var string = filestream.readFileSync('/home/admin1/unorder.txt', 'UTF-8');
        //console.log(typeof(string))
        var array = string.split(' ');

        var unordList = new list.LinkedList;

        for (let i = 0; i < array.length; i++) {
            unordList.add(array[i]);
        }
        unordList.show();

        var answer = readline.question("Enter the word do you want to search  ");
        if (!isNaN(answer)) {
            console.log("input should be in string form ");
            //  return;
        }
        else {
            if (unordList.search(answer)) {
                unordList.remove(answer);
            }
            else {

                
                unordList.add(answer);
            }
        }

        unordList.show();

        var word = unordList.getData();
        console.log("word=", word);
        writeUtil.writeFile('/home/admin1/unorder.txt', word);
        console.log("Linked list elements are ");
        unordList.show();

        if (unordList === null) {
            throw "File is empty";
        }
        return array;
    }

    catch (e) {
        console.log("Error");
    }
}

module.exports = unordered();

