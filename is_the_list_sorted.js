/*
	determining if an integer list is sorted
*/

const assert = require('assert');

function is_sorted(arr) {
	if (arr.length < 1) {
		throw 'invalid input';
	}

	let value = arr[0];

	for (let i = 1; i < arr.length; i++) {
		let _v = arr[i];
		if (_v < value) {
			return false;
		} else {
			value = _v;
		}
	}

	return true;
}

assert.equal(is_sorted([1,2,3,4]), true);
assert.equal(is_sorted([1,2,34]), true);
assert.equal(is_sorted([1,2,4,3]), false);
