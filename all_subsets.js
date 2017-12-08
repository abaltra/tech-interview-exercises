/*
Given an array of numbers, print all subsets of the array
*/

function all_subsets(arr) {
	let subsets = [];
	helper(arr, subsets, 0);
}

function helper(all_numbers, subset, index) {
	if (index === all_numbers.length) {
		console.log(subset);
		return;
	}

	subset[index] = null;
	helper(all_numbers, subset, index + 1);
	subset[index] = all_numbers[index];
	helper(all_numbers, subset, index + 1);
}

all_subsets([1,2,3])
