/*
	Given a decimal number m. Convert it in binary string and apply n iterations, in each iteration 0 becomes 01 and 1 becomes 10. Find kth character in the string after nth iteration.
*/

function get_kth(number, iterations, k) {
	let bin = number.toString(2);
	let padded = bin;
	for (let i = 0; i < iterations; i++) {
		let _padded = '';
		for (let j = 0; j < padded.length; j++) {
			let _c = _padded[j];
			if (_c == '0') {
				_padded += '01';
			} else {
				_padded += '10';
			}
		}
		padded = _padded;
	}

	return padded[k];
}


console.log(get_kth(5, 3, 5));
