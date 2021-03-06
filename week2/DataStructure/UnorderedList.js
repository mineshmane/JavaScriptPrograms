/************************************************************************************************
* Execution : 1. default node cmd> mocha test/Unordere.js 
* 
* @Purpose : To search and delete word using file Unorderedlist Program usimng linkelist
* @file : Unoreder.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 22-05-2019
*    
**********************************/

function unOrder() {
    var read = require('readline-sync');
    var ulist = require('../DSUtil/UnLinkedList');
    var util = require('../DSUtil/DataStructureUtility');
    var fileStream = require('fs');
    try {
        var string = fileStream.readFileSync('/home/admin1/unorder.txt', 'UTF-8');
        var arr = string.split(' ');
        // console.log(arr)
        var ll = new ulist.LinkedList;
        for (let i = 0; i < arr.length; i++) {

            ll.insert(arr[i]);
        }
        ll.show();

        console.log(" Enter string Your Want search : ");
        var answer = read.question();

        var found = ll.search(answer);
        if (ll.search(answer)) {
            console.log(" elemten found ");
            console.log(" removing element from ");


            ll.remove(answer);
            console.log(answer, "removed successfully ")
        }
        else {
            console.log("Oops Element is not Found in file: \n");
            console.log(" Adding Element to file : ");


            ll.insert(answer);
        }
        //  ll.show();

        var word = ll.getData();
        //console.log("word=", word);

        util.writeFile('/home/admin1/unorder.txt', word);
        console.log(" list elements are: ");
        ll.show();
        // if (ll === null) {
        //     throw "File is empty";
        // }

    } catch (error) {
        console.log(" error excption");
    }
    return [string, answer, found]
}
module.exports = unOrder();