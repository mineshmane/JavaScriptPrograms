/************************************************************************************************
* Execution : 1. default node cmd> node BinaryTree.js 
* 
* Purpose :To find Number of Binareysearch tree 
* 
* @file : BinaryTree.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 18-05-2019
*
*************************************************************************************************/
function binary() {
    try {
        let utility = require("../DSUtil/DataStructureUtility");
        let readline = require("readline-sync");
        // read numbers of nodes
        let nodes = parseInt(readline.question("Enter of nodes: "));
        if (isNaN(nodes) || nodes < 1) {
            throw "Enter valid number of nodes"
        } else {
            // calculate number of trees.
            var result = utility.binaryTree(nodes);
        }
        return [nodes, result];

    } catch (err) {
        console.log(err)
    }
}
module.exports = binary();