const assert = require('chai').assert;
const result = require('../../week2/DataStructure/BalancedParentheses');
describe('balancedaparenthees Tseting cases', function () {
    it('string not empty', function () {
        assert.isNotEmpty(result, 'string is emty it should be not empty');
    });
});