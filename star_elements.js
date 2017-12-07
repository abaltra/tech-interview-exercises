/*
Given an unsorted array. The task is to find all the star and super star elements in the array. Star are those elements which are strictly greater than all the elements on its right side. Super star are those elements which are strictly greater than all the elements on its left and right side.
Note: Assume first element (A[0]) is greater than all the elements on its left side, And last element (A[n-1]) is greater than all the elements on its right side.
*/

function get_stars(arr) {
	let stars_map = {};
	let stars = [];
	let superStars = [];

	let highest_so_far = arr[arr.length - 1];
	stars.push(highest_so_far);
	stars_map[highest_so_far] = 1;

	for (let i = arr.length - 2; i >= 0; i--) {
		let current = arr[i];
		if (current > highest_so_far) {
			stars.push(current);
			stars_map[current + '_' + i] = 1;
			highest_so_far = current;
		}
	}

	highest_so_far = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];
		if (current > highest_so_far) {
			if (stars_map[current + '_' + i]) {
				superStars.push(current);
			}
			highest_so_far = current;
		}
	}

	return superStars;
}

console.log(get_stars([1,2,3,4,3,2,1]));
