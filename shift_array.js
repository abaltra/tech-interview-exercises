/*
just one question: shift an array to the right by n positions such that the right most indexes are become the first ones and the first ones move ahead.
like:
1 2 3 4 5 --> shift by 2 --> 4 5 1 2 3
*/

const assert = require('assert');

function shift_by_n(array, n) {
	let right = array.slice(n + 1);
	let left = array.slice(0, n + 1);

	return [...right, ...left]
}

assert.deepEqual(shift_by_n([1,2,3,4,5], 2), [4,5,1,2,3]);
