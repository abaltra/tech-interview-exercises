/*
You have rating (0-10) of the hotels per user in this format:

scores = [
    {'hotel_id': 1001, 'user_id': 501, 'score': 7},
    {'hotel_id': 1001, 'user_id': 502, 'score': 7},
    {'hotel_id': 1001, 'user_id': 503, 'score': 7},
    {'hotel_id': 2001, 'user_id': 504, 'score': 10},
    {'hotel_id': 3001, 'user_id': 505, 'score': 5},
    {'hotel_id': 2001, 'user_id': 506, 'score': 5}
]

Any given hotel might have more than one score.

Implement a function, get_hotels(scores, min_avg_score) that returns a list of hotel ids that have average score equal to or higher than min_avg_score.

get_hotels(scores, 5) -> [1001, 2001, 3001]
get_hotels(scores, 7) -> [1001, 2001]
*/

const assert = require('assert');

function get_hotels(scores, min_avg_score) {
	let hotels_map = {};
	let ret = new Set([]);
	for (let i = 0; i < scores.length; i++) {
		if (!hotels_map[scores[i].hotel_id]) {
			hotels_map[scores[i].hotel_id] = {
				total_score: 0,
				total_votes: 0,
				current_average: 0
			}

			hotels_map[scores[i].hotel_id].total_score += scores[i].score;
			hotels_map[scores[i].hotel_id].total_votes += 1;
			hotels_map[scores[i].hotel_id].current_average = hotels_map[scores[i].hotel_id].total_score / hotels_map[scores[i].hotel_id].total_votes;

			if (hotels_map[scores[i].hotel_id].current_average >= min_avg_score) {
				ret.add(scores[i].hotel_id);
			} else {
				ret.delete(scores[i].hotel_id)
			}
		}
	}

	return [...ret];
}

let scores = [
    {'hotel_id': 1001, 'user_id': 501, 'score': 7},
    {'hotel_id': 1001, 'user_id': 502, 'score': 7},
    {'hotel_id': 1001, 'user_id': 503, 'score': 7},
    {'hotel_id': 2001, 'user_id': 504, 'score': 10},
    {'hotel_id': 3001, 'user_id': 505, 'score': 5},
    {'hotel_id': 2001, 'user_id': 506, 'score': 5}
]

assert.deepEqual(get_hotels(scores, 5), [1001, 2001, 3001]);
assert.deepEqual(get_hotels(scores, 7), [1001, 2001]);
