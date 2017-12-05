/*
	Given an array of N elements in the form [1,2,3,4,...]. Write a method that adds 1 to the number formed by the array elements.
	Ex:
	[1,2,3,4] + 1 = [1,2,3,5]
*/

function add_one_to_array(arr) {
	let carry = 1;
	for (let i = arr.length - 1; i > -1; i--) {
		let d = arr[i];
		if (d + carry > 9) {
			arr[i] = 0;
			carry = 1;
		} else {
			arr[i] = arr[i] + carry;
			carry = 0;
		}
	}

	if (carry == 1) {
		arr = [1].concat(arr);
	}

	return arr;
}

console.log(add_one_to_array([9,9,9,9]))
