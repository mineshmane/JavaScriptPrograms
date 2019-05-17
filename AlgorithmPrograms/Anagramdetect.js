/************************************************************************************************
* Execution : 1. default node cmd> node Anagramdetect.js 
* 
* Purpose :To check Strings are angrams or not
* 
* @file : Anagramdetect.js
* @module : 
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 13-05-2019
*    
*************************************************************************************************/

function anagram() {

    var utility = require('../AlgorithmPrograms/AlgoUtility');

    var result =utility.anagramDetection();

    return result;
} module.exports = anagram();