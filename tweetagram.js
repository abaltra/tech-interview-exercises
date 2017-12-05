/*
	Call a function F in a loop. F returns a string of 140 chars. Write to the output 1 when F returns a string with the same letters (basically a permutation) of a string previously returned. (the question was not this well formed)
*/

let seenWords = {};
function has_anagrams(feed) {
	for (let i = 0; i < feed.length; i++) {
		let str = feed[i];
		let value = str_to_ascii(str);
		if (seenWords[value]) {
			console.log(str + ': 1');
		} else {
			seenWords[value] = 1;
		}
	}
}

function str_to_ascii(str) {
	let value = 0;
	for (let i = 0; i < str.length; i++) {
		let c = str[i];
		value += c.charCodeAt(0);
	}
	return value;

}

has_anagrams(['one', 'two', 'eno', 'twat', 'enoe', 'wot']);
