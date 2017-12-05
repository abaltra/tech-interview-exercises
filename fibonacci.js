/*
get the nth fibonacci number (recursive and iterative)
*/

function rec_fibo(n) {
	if (n < 2) {
		return 0;
	}

	if (n < 4) {
		return 1;
	}

	return rec_fibo(n - 1) + rec_fibo(n - 2)
}

function iter_fibo(n) {
	if (n <= 1) {
		return 0;
	}

	if (n <= 2) {
		return 1;
	}

	let n_1 = 1;
	let n_2 = 0;

	let count = 1;

	while (count != n) {
			let tmp = n_1 + n_2;
			n_1 = n_2;
			n_2 = tmp;
			count += 1;
	}

	return n_2;
}

console.log(iter_fibo(10))
console.log(rec_fibo(10))
