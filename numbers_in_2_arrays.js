/*
Given any number of arrays containing numbers, write a function which
finds the numbers that appear in exactly two arrays.

arrays = [
    [6, 2, 2, 0, 4],
    [5, 0, 2, 6, 7, 1],
    [6, 7, 9, 9],
]

find_in_two(arrays) should return [2, 0, 7]
*/
const assert = require('assert');

function exactly_two(arrays) {
	let number_map = {};

	for (let i = 0; i < arrays.length; i++) {
		let array = arrays[i];
		let seen = {};
		for (let j = 0; j < array.length; j++) {
			let number = array[j];
			if (!number_map[number]) number_map[number] = 0;
			if (!seen[number]) {
				number_map[number]++;
				seen[number] = 1;
			}
		}
	}

	let keys = Object.keys(number_map);
	let ret = new Set([]);

	for (let i = 0; i < keys.length; i++) {
		let key = keys[i];
		if (number_map[key] === 2) {
			ret.add(Number(key));
		}
	}

	return [...ret];
}

let arrays = [
    [6, 2, 2, 0, 4],
    [5, 0, 2, 6, 7, 1],
    [6, 7, 9, 9],
];

assert.deepEqual(exactly_two(arrays), [0, 2, 7]);
