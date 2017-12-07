/*
A number is a special number if it’s digits only consist 0, 1, 2, 3, 4 or 5.

Given a number n and we have to find n-th Special Number.
*/

function find_special(n) {
	let special_count = 0;
	let number = 0;
	let special_map = {};
	while (true) {
		if (is_special(number, special_map)) {
			special_count++;
			special_map[number] = true;
		}

		if (special_count === n) {
			return number;
		}
		number++;
	}
}

function is_special(n, special_map) {
	if (n === 0) return true;
	let specials = {
		0: 1,
		1: 1,
		2: 1,
		3: 1,
		4: 1,
		5: 1
	}

	while (n > 0) {
		if (special_map[n]) return true;
		let digit = n % 10;
		n = parseInt(n / 10);
		if (!specials[digit]) return false;
	}

	return true;
}

console.log(find_special(13))
