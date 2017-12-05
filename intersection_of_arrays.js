/*
	Write algorithm to compute the intersection of two arrays. What is the time complexity of this algorithm (using the big O notation)?
*/

function intersection(arr1, arr2) {
	let intersect = [];
	let f = (a, b) => {
		if (a == b) return 0;
		if (a < b) return -1;
		else return 1;
	};

	arr1.sort(f);
	arr2.sort(f);

	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] == arr2[j]) {
			intersect.push(arr1[i]);
			i++;
			j++;
		} else if (arr1[i] > arr2[j]) {
			j++;
		} else {
			i++;
		}
	}

	return intersect;
}

console.log(intersection([1,2,3,4], [5,3,1,2,7,6,9,4]))
