const assert = require('chai').assert;
const result = require('../../week2/DataStructure/UnorderedList');
describe('positive', function () {
    it('file is found ', function () {
        assert.isNotNull(result, ' file is not found ');
    })
})