/*
Given a file containing n words, given a word w and a number k. Find the k words that precede the word w.

ex:
aaa,
bbb,
ccc,
booking,
alpha,
beta,
gamma

for k = 3 and w = booking, the result is aaa, bbb, ccc, booking
for k = 2 and w = beta, the result is booking, alpha, beta

Try to keep the space complexity under O(n)
*/

function get_previous_words(source, w, k) {
	let index = 0;
	let delayed_index = 0;

	while(index < source.length) {
		let word = source[index];
		if (word == w) break;

		index++;
		if (index > k) delayed_index++;
	}

	let ret = [];
	for (let i = delayed_index; i <= index; i++) {
		ret.push(source[i]);
	}

	return ret;
}

let input = ['aaa', 'bbb', 'ccc', 'booking', 'alpha', 'beta', 'gamma'];

console.log(get_previous_words(input, 'booking', 3))
console.log(get_previous_words(input, 'beta', 2))
