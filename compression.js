/*
 Write an algorithm to compress a string. It takes subsequent characters and just emits how many times they were seen
*/

function compress(string) {
	let index = 1;
	let current_char = string[0];
	let ret = '';


	let multiplier = 1;
	if (string.length === 1) return string; //edge case
	while (index < string.length) {
		let _char = string[index];

		if (_char != current_char) {
			ret += (current_char + multiplier);
			multiplier = 1;
			current_char = _char;
		} else {
			multiplier++;
		}

		index++;
	}

	ret += (current_char + multiplier)


	return ret;
}

console.log(compress('aaaaaaabcccc'))
