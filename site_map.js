/*
input
log = [
  { 'user': 'A', 'page': 1},
  { 'user': 'B', 'page': 5},
  { 'user': 'A', 'page': 2},
  { 'user': 'A', 'page': 1},
  { 'user': 'B', 'page': 2},
  { 'user': 'C', 'page': 7},
  { 'user': 'C', 'page': 3},
  { 'user': 'A', 'page': 3},
  { 'user': 'C', 'page': 1},
]

please implement
discover_site_map(log)

discover_site_map returns a representation of the links between pages, using whatever data structure you think is suitable:
1 -> 2, 3
2 -> 1
3 -> 1
5 -> 2
7 -> 3
*/

const assert = require('assert');

function discover_site_map(log) {
	let site_map = {};
	let user_map = {};

	for (let i = 0; i < log.length; i++) {
		let user_log = log[i];
		if (!site_map[user_log.page]) {
			site_map[user_log.page] = new Set([]);
		}
		if (!user_map[user_log.user]) {
			user_map[user_log.user] = user_log.page;
		}

		if (user_map[user_log.user] != user_log.page) {
			site_map[user_map[user_log.user]].add(user_log.page);
			user_map[user_log.user] = user_log.page;
		}
	}

	return site_map;
}

let log = [
  { 'user': 'A', 'page': 1},
  { 'user': 'B', 'page': 5},
  { 'user': 'A', 'page': 2},
  { 'user': 'A', 'page': 1},
  { 'user': 'B', 'page': 2},
  { 'user': 'C', 'page': 7},
  { 'user': 'C', 'page': 3},
  { 'user': 'A', 'page': 3},
  { 'user': 'C', 'page': 1},
];

let out = {
	'1': new Set([2, 3]),
	'2': new Set([1]),
	'3': new Set([1]),
	'5': new Set([2]),
	'7': new Set([3])
}

assert.deepEqual(discover_site_map(log), out);
