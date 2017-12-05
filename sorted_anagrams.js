/*
	For each of 3 string arrays containing words, print a sorted array of anagrams found in other arrays
*/

function find_anagrams(arr1, arr2, arr3) {
	let map1 = makeMap(arr1);
	let map2 = makeMap(arr2);
	let map3 = makeMap(arr3);


	let a1anagrams = [];
	let a2anagrams = [];
	let a3anagrams = [];

	a1anagrams = a1anagrams.concat(...get_anagrams(map1, map2), ...get_anagrams(map1, map3));
	a2anagrams = a1anagrams.concat(...get_anagrams(map2, map1), ...get_anagrams(map2, map3));
	a3anagrams = a1anagrams.concat(...get_anagrams(map3, map1), ...get_anagrams(map3, map1));

	return { 1: a1anagrams, 2: a2anagrams, 3: a3anagrams };
}

function get_anagrams(map1, map2) {
	let keys1 = Object.keys(map1);
	let anagrams = new Set([]);

	keys1.forEach(key => {
		if (map2[key]) {
			anagrams.add(map2[key]);
		}
	});

	return anagrams;
}

function makeMap(arr) {
	let m = {};
	arr.forEach(word => {
		let value = word_to_ascii(word);
		if (!m[value]) m[value] = new Set([]);
		m[value].add(word);
	});

	return m;
}

function word_to_ascii(word) {
	let value = 0;
	for (let i = 0; i < word.length; i++) {
		value += word[i].charCodeAt(0);
	}
	return value;
}

let input = [
	[ 'one', 'two', 'three' ],
	[ 'neo', 'twii', 'wot' ],
	[ 'eon', 'three', 'tow' ]
];

console.log(find_anagrams(...input));
