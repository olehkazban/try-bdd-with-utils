var assert = require('assert'),
	utils = require('../utils');

describe('Utils', function() {

	describe('#sort()', function() {
		it('should sort given array by provided rule in comparator function', function() {
			assert.equal(utils.sort([2, 1, 3, 0]), [0, 1, 2, 3]);
		});
	});

	describe('#capitalize()', function() {
		it('should make first letter of given string upper case', function() {
			assert.equal(utils.capitalize('just do it!'), 'Just do it!');
		});
	});

	//TODO: Add your specs

});