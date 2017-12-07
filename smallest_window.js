/*
Given a string detect the smallest window length that contains all the distinct characters of the given string even if it contains repeating elements​.
For eg. A = “aabcbcdbca”, then the result would be 4 as of the smallest window will be “dbca” .

Another example, in “aabcbcdb”, the smallest string that contains all the characters is “abcbcd”.*/

function smallest_window(string) {
	let letter_map = {};
	let letter_count = 0;

	for (let i = 0; i < string.length; i++) {
		let c = string[i];
		if (!letter_map[c]) {
			letter_count++;
			letter_map[c] = 0;
		}
		letter_map[c]++;
	}

	letter_map = {};
	let current_letter_count = 0;
	let index_from_left = 0;
	let left_string = '';
	for (index_from_left = 0; index_from_left < string.length; index_from_left++) {
		let c = string[index_from_left];
		if (!letter_map[c]) {
			current_letter_count++;
			letter_map[c] = 0;
		}
		letter_map[c]++;
		left_string += c;
		if (current_letter_count == letter_count) {
			break;
		}
	}

	current_letter_count = 0;
	let index_from_right = string.length - 1;
	let right_string = '';
	for (index_from_right = string.length - 1; index_from_right >= 0; index_from_right--) {
		let c = string[index_from_right];
	}
}
