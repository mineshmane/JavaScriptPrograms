function unOrder() {


    var read = require('readline-sync');
    var ulist = require('../DataStructure/UnLinkedList');
    var util = require('../DataStructure/DataStructureUtility');
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
        let answer = read.question();


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
        // return arr;

    } catch (error) {
        console.log(" error excption");
    }
}
module.exports = unOrder();