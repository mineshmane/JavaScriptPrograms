const assert = require('chai').assert;
const R = require('../../week2/DataStructure/BinaryTree');
describe('Binary Tree test positive  ', function () {
    it('Number of nodes are valid ', function () {
        var result = R[0];
        assert.isTrue(result >= 1 && result <= 85, 'Nodes should be between 1 to 85 only');
    });

    it('output is valid  ', function () {
        var result = R[1];
        assert.isTrue(result <= 1.0633537029222739e+48, 'Maximum number of trees are  1.0633537029222739e+48 ');
    });
});

describe('Binary Tree testing Negative  ', function () {
    it('Number of nodes are not valid ', function () {
        var result = R[0];
        assert.isTrue(result <= 1 || result >= 85, 'Number of node are valid ');
    });

    it('output is not  valid  ', function () {
        var result = R[1];
 
        assert.isUndefined(result , 'number of tree are valid ');
    });
});