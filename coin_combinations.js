/*
Given a list of coin denominations and a total value, find all the possible ways you can make that total with the coins.

denominations: [1,2,3]
value: 5
combinations:
	1 1 1 1 1
	1 1 1 2
	1 1 3
	1 2 2
	3 2

total: 5
*/


let map = {};
function calc(total, denoms, index) {
	if (total === 0) return 1; //got it!
	if (index < 0) return 0; //won't work

	let c_denom = denoms[index];
	let ways = 0;

	if (map[total + '_' + c_denom]) return map[total + '_' + c_denom];

	for (let i = 0; i * c_denom <= total; i++) {
		let _local = i * c_denom;
		let remainder = total - _local;
		ways += calc(remainder, denoms, index - 1);
	}

	map[total + '_' + c_denom] = ways;
	return ways;
}

console.log(calc(4, [1,2,3], 2))
