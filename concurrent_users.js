/*
Given the following list of objects {user, loginTime, logoutTime}. What is the maximum number of concurrent users logged in at the same time?

Input:
[
  {user: A, login: 1, logout: 3},
  {user: B, login: 3, logout: 4},
  {user: C, login: 1, logout: 2},
  {user: D, login: 123123123, logout: 987987987},
  {user: E, login: 1, logout: 3}
]

Output:
3
*/

function max_concurrent_users(list) {
	let starts = [];
	let ends = [];

	list.forEach(log => {
		starts.push(log.login);
		ends.push(log.logout);
	});

	let sorter = (a, b) => {
		if (a == b) return 0;
		if (a < b) return -1;
		else return 1;
	}

	starts.sort(sorter);
	ends.sort(sorter);

	let i = 0;
	let j = 0;
	let count = 0;
	let max = 0;

	while (i < starts.length && j < ends.length) {
		if (starts[i] < ends[j]) {
			count++;
			i++;
			max = Math.max(count, max);
		} else {
			count--;
			j++;
		}
	}

	return max;

}

let input = [
  {user: 'A', login: 1, logout: 3},
  {user: 'B', login: 3, logout: 4},
  {user: 'C', login: 1, logout: 2},
  {user: 'D', login: 123123123, logout: 987987987},
  {user: 'E', login: 1, logout: 3}
];

console.log(max_concurrent_users(input));
