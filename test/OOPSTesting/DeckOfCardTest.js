const assert = require('chai').assert;
const Result = require('../../week3/OOpUtility');

describe('distributed card () positive testing', function () {
    it('first player cards are 9 then pass', function () {
        var res = Result.distributingCards();
        var rs = res[0].length;


        assert.isTrue(rs == 9, ' output is wrong ');
    })

    it('second player 9 card then pass ', function () {
        var res = Result.distributingCards();
        var rs = res[1].length;

        assert.isTrue(rs == 9, ' 9 should be distributed ');
    })
    it('Third player cards are 9 then pass', function () {
        var res = Result.distributingCards();
        var rs = res[2].length;

        assert.isTrue(rs == 9, ' output is wrong ');
    })

    it('Fourth player 9 card then pass ', function () {
        var res = Result.distributingCards();

        assert.isTrue(res[3].length == 9, ' 9 should be distributed ');
    })

})
describe(' deckofCard method() Positive tset', function () {
    it('total cards are 52 ', function () {
        var res2 = Result.deckOfCards();
        var res = res2.length;
        assert.isTrue(res == 52)
    })
})