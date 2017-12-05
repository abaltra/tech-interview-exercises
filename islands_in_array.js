/*
	Count number of islands in an array of mxn

	1 0 0 1
	0 0 1 1
	1 0 0 1

	Has 3 islands, m = 4, n = 3
*/

const assert = require('assert');

function get_islands(arr, m, n) {
	let adj_matrix = init_adj_matrix(arr);
	let i_count = 0;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			i_count += expand(arr, adj_matrix, i, j);
		}
	}

	return i_count;
}

function expand(original_arr, adj_matrix, i, j) {
	if (i < 0 ||
			i >= original_arr.length ||
			j < 0 ||
		 	j >= original_arr[i].length ||
			adj_matrix[i][j] ||
		  !original_arr[i][j]) {
		return 0;
	}

	adj_matrix[i][j] = 1;
	expand(original_arr, adj_matrix, i + 1, j);
	expand(original_arr, adj_matrix, i - 1, j);
	expand(original_arr, adj_matrix, i, j + 1);
	expand(original_arr, adj_matrix, i, j - 1);

	return 1;
}

function init_adj_matrix(arr) {
	let adj_matrix = [];
	let n = arr.length;
	let m = arr[0].length;
	for (let i = 0; i < n; i++) {
		let row = [];
		for (let j = 0; j < m; j++) {
			row.push(0);
		}
		adj_matrix.push(row);
	}
	return adj_matrix;
}


assert.equal(get_islands([[1, 0, 1], [0, 0, 0], [0, 1, 0], [1, 1, 1]], 4, 3), 3);
