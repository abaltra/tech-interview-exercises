/*
	Identify whether four sides can form a square, a rectangle or neither.
	input: [
		[[1, 3], [3, 4]],
		[[4, 3], [2, 1]],
		[[1, 4], [4, 5]],
		[[5, 4], [3, 1]]
	]
*/

function line_length(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x2 - x1, 2)	+ Math.pow(y2 - y1, 2));
}

function slope(x1, y1, x2, y2) {
	return (y2 - y1) / (x2 - x1);
}

function valid_square(lines) {
	let length1 = line_length(lines[0][0][0], lines[0][0][1], lines[0][1][0], lines[0][1][1])
	let length2 = line_length(lines[1][0][0], lines[1][0][1], lines[1][1][0], lines[1][1][1])
	let length3 = line_length(lines[2][0][0], lines[2][0][1], lines[2][1][0], lines[2][1][1])
	let length4 = line_length(lines[3][0][0], lines[3][0][1], lines[3][1][0], lines[3][1][1])

	let slope1 = slope(lines[0][0][0], lines[0][0][1], lines[0][1][0], lines[0][1][1])
	let slope2 = slope(lines[1][0][0], lines[1][0][1], lines[1][1][0], lines[1][1][1])
	let slope3 = slope(lines[2][0][0], lines[2][0][1], lines[2][1][0], lines[2][1][1])
	let slope4 = slope(lines[3][0][0], lines[3][0][1], lines[3][1][0], lines[3][1][1])

	if ((slope1 === slope2 && slope3 === slope4) ||
		(slope1 === slope3 && slope2 === slope4) ||
	 	(slope1 === slope4 && slope2 === slope3)) {
			//we have a candidate
			if (length1 === length2 && length2 === length3 && length3 === length4 && length4 === length1) {
				console.log('square!');
			} else {
				console.log('rectangle!');
			}
		} else {
			console.log('something else');
		}
}

let input = [
	[[1, 1], [2, 2]],
	[[2, 2], [3, 1]],
	[[3, 1], [2, 0]],
	[[2, 0], [1, 1]]
];

valid_square(input)
