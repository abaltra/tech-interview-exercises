/*
	Dynamic programming question about coin change, expected result was minimum number of coins with the coin types
*/

function minimum_number(denominations, value, map={}) {
	if (value === 0) return 0;

	if (map[value]) return map[value];
	let smallest = 100000;
	for (let i = 0; i < denominations.length; i++) {
		let coin = denominations[i];
		if (coin <= value) {
			let _small = minimum_number(denominations, value - coin, map);
			smallest = Math.min(_small + 1, smallest);
		}
	}
	map[value] = smallest;
	return smallest;
}

console.log(minimum_number([9, 6, 5, 3, 2, 1], 1234));
