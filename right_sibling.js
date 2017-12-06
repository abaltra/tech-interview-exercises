/*
class Node {
	this.children = Array(Node),
	this.Right = null;
}

Each node represents an element of a tree and specifies a list of immediate children (in order from left to right).
Write a method that, taking in the root node, sets the Right property to the rightmost sibling of a node
*/

class Node {
	constructor(value) {
		this.value = value;
		this.children = [];
		this.right = null;
	}

	addChild(node) {
		this.children.push(node);
	}

	setRight(node) {
		this.right = node;
	}
}

function set_rights(node, parent=null) {
	if (!node) return;

	if (parent) {
		node.setRight(parent.children[parent.children.length - 1]);
	}
	for (let i = 0; i < node.children.length; i++) {
		set_rights(node.children[i], node);
	}
}

let tree = new Node('a');
tree.addChild(new Node('b'));
tree.addChild(new Node('c'));
tree.children[0].addChild(new Node('d'));
tree.children[0].addChild(new Node('e'));
tree.children[0].addChild(new Node('f'));
tree.children[1].addChild(new Node('g'));
tree.children[1].addChild(new Node('h'));

set_rights(tree);
console.log(tree.children[0].children[0])
