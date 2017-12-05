/*
A good site is one where all pages can be reached in at most N steps from the homepage.
Write a script that validates if a site is "good"

		  a
	b       c
c d f   e
			 f g

We need to find the shortest distance to each distinct node
*/


/*
node = {
	page: id,
	children: array,
	visited: boolean (defaults to false)
}
*/

function is_good_site(hp, depth=3) {
	//homepage would be the root of our site. We need to calculate the highest depth of each children
	let map = {};
	get_depth(hp, 1, map);
	let k = Object.keys(map);
	for (let i = 0; i < k.length; i++) {
		let key = k[i];
		if (map[key] > depth) {
			console.log('bad site!');
			return;
		}
	}
	console.log('booking!');
}

function get_depth(node, currentDepth = 0, visitedMap = {}) {
	if (!node) {
		return 0;
	}

	if (visitedMap[node.page]) {
		if (visitedMap[node.page] < currentDepth) {
			currentDepth = visitedMap[node.page];
		}
	}

	visitedMap[node.page] = currentDepth;
	for (let i = 0; i < node.children.length; i++) {
		get_depth(node.children[i], currentDepth + 1, visitedMap);
	}
}

let tree = {
	page: 'a',
	children: [
		{
			page: 'b',
			children: [
				{
					page: 'c',
					children: []
				},
				{
					page: 'd',
					children: []
				},
				{
					page: 'f',
					children: []
				}
			]
		},
		{
			page: 'c',
			children: [
				{
					page: 'e',
					children: [
						{
							page: 'f',
							children: []
						},
						{
							page: 'g',
							children: []
						}
					]
				}
			]
		}
	]
}

is_good_site(tree);
