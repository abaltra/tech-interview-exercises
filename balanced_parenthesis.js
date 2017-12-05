/*
	Make a function that will say if parenthesis are balanced
*/

function are_balanced(str) {
	let stack = [];
	let index = 0;
	let pairs = {
		'(': ')',
		'{': '}',
		'[': ']'
	};

	while (index < str.length) {
		let c = str[index];
		if (pairs[c]) {
			stack.push(c);
		} else if (c == ')' || c == '}' || c == ']') {
			let paired = stack.pop();
			if (pairs[paired] !== c) {
				return false;
			}
		}
		index++;
	}

	if (stack.length !== 0) return false;

	return true;
}

console.log(are_balanced('((()))[]'));
