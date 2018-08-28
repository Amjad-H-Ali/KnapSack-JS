console.log('KnapSack!');

// Items Weight and Corresponding Values

const weight = [3, 9, 2, 1, 7, 3];

const value =  [5, 7, 4, 3, 5, 2];

const capacity = 10; // Max capacity to carry in KnapSack.


// Inside of a 2D array, Store the result of an Item, Capacity pair to avoid repeating,
// This way, we increase speed of algo to O(n * capacity) from O(n^2)
let results = [];

for (let i = 0; i < capacity; i ++) 

	results.push([]);

				// Current Item index and Capacity
const knapSack = (item, capacity) => {

	// If value was found before, return it. No need to find it again.
	if (results[item][capacity]) return results[item][capacity];

	// Set result to 0 if item or capacity equal 0.
	// Item is -1?, meaning we went through all items
	// Capacity is 0?, meaning knapsack cannot take in more weight.
	if (item === -1 || capacity === 0) result = 0;
	// When item is too heavy to put in ks, move on to next item.
	else if (weight[item] > capacity) knapsack(item - 1, capacity);



}



