/*
	Given a matrix of size NM. Make a method that shifts each row K times to the left and prints the result
*/


function rotate_matrix(matrix, times) {
	for (let i = 0; i < matrix.length; i++) {
		let row = matrix[i];
		matrix[i] = row.slice(times).concat(row.slice(0, times));
	}

	return matrix;
}

console.log(rotate_matrix([[1, 2, 3], [4, 5, 6]], 2))
