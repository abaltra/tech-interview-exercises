/*
	implement BFS. Return depth of node
*/

class Node {
	constructor(value) {
		this.value = value;
		this.children = [];
	}

	addChild(node) {
		this.children.push(node);
	}
}

function bfs(root, value) {
	if (!root) return false;

	let queue = [root];

	let level = 1;
	while (queue.length > 0) {
		let count = queue.length;
		while (count > 0) {
			let node = queue.pop();
			if (node.value === value) return { level };
			for (let i = 0; i < node.children.length; i++) {
				queue.push(node.children[i]);
			}
			level ++;
		}
	}
}

let root = new Node('a');
root.addChild(new Node('b'));
root.addChild(new Node('c'));
root.children[0].addChild(new Node('d'));
root.children[0].addChild(new Node('e'));
root.children[0].children[0].addChild(new Node('f'));

console.log(bfs(root, 'f'));
