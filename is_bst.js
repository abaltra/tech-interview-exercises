/*
	Write a function that, given a tree, it determines wether it's a BST or not
*/

class Node {
	constructor(value) {
		this.value = value;
	}

	addLeft(node) {
		this.left = node;
	}

	addRight(node) {
		this.right = node;
	}
}

function is_bst(root) {
	let flat = flatten(root);
	let previous = flat[0];
	for (let i = 1; i < flat.length; i++) {
		let current = flat[i];
		if (current < previous) return false;
		previous = current;
	}

	return true;
}

function flatten(root, flat = []) {
	if (!root) return;
	flatten(root.left, flat);
	flat.push(root.value);
	flatten(root.right, flat);

	return flat;
}

let root = new Node(10);
root.addLeft(new Node(5));
root.addRight(new Node(20));
root.left.addLeft(new Node(3));
root.left.addRight(new Node(6));
root.left.left.addRight(new Node(4));

console.log(is_bst(root));
