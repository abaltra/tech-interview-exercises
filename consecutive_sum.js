/*
	Given a list of numbers, find the highest possible sum by consecutive items
	input: [1, 3, -2, 1]
	output: 4
*/

function get_sum(numbers) {
	let global_sum = numbers[0]
	let local_sum = numbers[0];

	for (let i = 1; i < numbers.length; i++) {
		let number = numbers[i];
		local_sum = Math.max(number, local_sum + number);
		global_sum = Math.max(local_sum, global_sum);
		console.log(number, local_sum, global_sum);
	}

	return global_sum;
}

console.log(get_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
