console.log('KnapSack!');

// Items Weight and Corresponding Values

const weight = [3, 9, 2, 1, 7, 3];

const value =  [5, 7, 4, 3, 5, 2];

const capacity = 10; // Max capacity to carry in KnapSack.


// Inside of a 2D array, Store the result of an Item, Capacity pair to avoid repeating

let results = [];

for (let i = 0; i < capacity; i ++) 

	results.push([]);

				// Current Item index and Capacity
const knapSack = (item, capacity) => {

	// If value was found before, return it. No need to find it again.
	if (results[item][capacity]) return results[item][capacity];



}



