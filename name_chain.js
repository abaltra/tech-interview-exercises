/*
Given a list of names, sort them such that each name is followed by a name which starts with the last character of the previous name
ex:
input: [Luis, Hector, Selena, Emmanuel, Amish]
output: [Emmanuel, Luis, Selena, Amish, Hector]

*/

function sorter(names) {
	let starts = {};
	let ends = {};
	let total = names.length;

	for (let i = 0; i < names.length; i++) {
		let name = names[i];
		starts[name[0].toLowerCase()] = name;
		ends[name[name.length - 1].toLowerCase()] = name;
	}

	let starter = null;

	for (let i = 0; i < names.length; i++) {
		let name = names[i];
		if (!ends[name[0].toLowerCase()]) {
			starter = name;
			break;
		}
	}

	let i = 1;
	let ret = [starter];
	let current = starter;
	while (i < total) {
		let name = starts[current[current.length - 1].toLowerCase()];
		ret.push(name);
		current = name;
		i++;
	}

	return ret;
}

let input = ['Luis', 'Hector', 'Selena', 'Emmanuel', 'Amish']
console.log(sorter(input))
