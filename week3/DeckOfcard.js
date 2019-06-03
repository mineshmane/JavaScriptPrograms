/******************************************************************************
 *  Execution       :cmd> node DeckOfCard.js
 *                      
 *  purpose         :To print shuffle Dexck of card into 4 peopele    
 *
 *  @description    :To print card distributed between 4 players each player 9 cards
 *                    
 *  @file           :DeckOfCard.js
 *  @author         :Minesh Mane (mineshmane94@gmail.com)
 *  @version        :1.0
 *  @since          :1-05-2019
 *
 ******************************************************************************/

var util = require('../week3/OOpUtility');
function deckOfCards() {
    //calling the function
    util.distributingCards();
}
//call to the function
//deckOfCards();
module.exports = deckOfCards();