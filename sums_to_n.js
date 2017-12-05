/*
	Identify whether there exists a pair of numbers in an array such that their sum is equal to N
*/
const assert = require('assert');

function adds_to_n(arr, n) {
	let m = {};
	for (let i = 0; i < arr.length; i++) {
		let number = arr[i];
		let remainder = n - number;

		if (m[number]) return true;
		m[remainder] = 1;
	}

	return false;
}

assert.equal(adds_to_n([1,2,3], 5), true);
assert.equal(adds_to_n([1,2,3], 6), false);
