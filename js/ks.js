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
	let result;
	// If value was found before, return it. No need to find it again.
	if (results[item][capacity]) return results[item][capacity];

	// Set result to 0 if item or capacity equal 0.
	// Item is -1?, meaning we went through all items
	// Capacity is 0?, meaning knapsack cannot take in more weight.
	if (item === -1 || capacity === 0) result = 0;

	// When item is too heavy to put in ks, move on to next item.
	else if (weight[item] > capacity) knapsack(item - 1, capacity);

	// Compare the values of moving on to the next item and putting the item in ks.
	// Set result equal to greatest value
	else {
		// Value of next item
		const moveOn = knapsack(item - 1, capacity);
														// Since we put item in ks, subtract weight of item from cap.
		// Value of item in bag + value of next item   // To Find Remaining Capacity
		const putIn = value[item] + knapsack(item - 1, capacity - weight[item]);

		// Compare bothe values and return the greatest.
		result = Math.max(moveOn, putIn);

	}
	// Before returning, store result in array to prevent redundancy.
	results[index][capacity] = result;
	return result;
}



