/*
	You have a list of words and a list of hotel reviews, try to sort the hotels based on the number of words from the first list that is exist in the each review. if an hotel has maximum number of 4 words then it should be the highest in the sorting..

	dict: ['good', 'great', 'cheap', 'awesome']
	reviews: [
	{
		hotel_id: 'a',
		review: 'it is pretty good'
	},
	{
		hotel_id: 'b',
		review: 'nah, it sucks'
	},
	{
		hotel_id: 'a',
		review: 'an awesome experience!'
	}
]
*/

function sort_hotels(words, hotels) {
	let d = {};
	words.forEach(word => {
		d[word] = 1;
	});

	let graded_hotels = {};

	hotels.forEach(hotel => {
		if (!graded_hotels[hotel.hotel_id]) {
			graded_hotels[hotel.hotel_id] = {
				score: 0
			}
		}

		hotel.review.split(' ').forEach(word => {
			if (d[word]) {
				graded_hotels[hotel.hotel_id].score ++;
			}
		});
	});

	let ret = [];
	Object.keys(graded_hotels).forEach(hotel_id => {
		ret.push(hotel_id)
	});

	return ret.sort((a, b) => {
		if (graded_hotels[a].score === graded_hotels[b].score) return 0;
		if (graded_hotels[a].score > graded_hotels[b].score) return -1;
		return 1;
	});
}

let dict = ['good', 'great', 'cheap', 'awesome'];
let reviews = [
{
	hotel_id: 'a',
	review: 'it is pretty good'
},
{
	hotel_id: 'b',
	review: 'nah, it sucks'
},
{
	hotel_id: 'a',
	review: 'an awesome experience!'
}];

console.log(sort_hotels(dict, reviews));
