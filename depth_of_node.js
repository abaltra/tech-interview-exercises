/*
Given a binary tree, find it's depth
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

function depth_of_node(root, current_level = 1) {
	if (!root) return current_level;

	return Math.max(depth_of_node(root.left, current_level + 1), depth_of_node(root.right, current_level + 1));
}

let root = new Node('a');
root.addLeft(new Node('b'));
root.addRight(new Node('c'));
root.left.addLeft(new Node('d'));
root.left.addRight(new Node('e'));
root.left.left.addRight(new Node('f'));

console.log(depth_of_node(root));
