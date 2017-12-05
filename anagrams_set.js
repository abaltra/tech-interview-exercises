/*
	Given an array of words as Strings you should return another array of Strings, each containing words that are mutual anagrams
*/

function find_anagrams(list) {
	let word_map = {};
	let has_anagrams = [];
	list.forEach(word => {
		let value = word_to_ascii(word);
		if (!word_map[value]) {
			word_map[value] = new Set([]);
		}
		word_map[value].add(word);
	});
	let keys = Object.keys(word_map);
	let ret = [];
	keys.forEach(key => {
		if (word_map[key].size > 1) {
			ret.push(word_map[key]);
		}
	});

	return ret;
}

function word_to_ascii(word) {
	let value = 0;
	for (let i = 0; i < word.length; i++) {
		value += word[i].charCodeAt(0);
	}

	return value;
}

console.log(find_anagrams(['one', 'two', 'neo', 'wto', 'oen', 'wat']))
