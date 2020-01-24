/*
Description: Insert sorting method will be using Recursion to break down the array into half until it
reaches its base case of a single index of data which will merge into other individual data. Merging further
with other previously merged data. Repeat until final arrays is merged into one sorted array.
*/
const insertSorting = (data) => {
    console.log('insert sorting started...');
    if (data.length <= 1) {
        return data;
    };
    const animations = [];
    const dataCopy = data.slice();

    insertSortingHelper(dataCopy, 0, dataCopy.length - 1, animations);

    return [animations, dataCopy];
};

const insertSortingHelper = (dataCopy, startIdx, endIdx, animations) => {
    if (startIdx === endIdx) {
        return;
    };

    for (let i = 1; i < dataCopy.length; i++ ) { // linear time complexity --> O(n)
        let currentIdxValue = dataCopy[i]; // must set the current index value to figure out where to insert
        let currentIdx = i; // must set the current index
        let animation = {};
        while (currentIdx > 0 && currentIdxValue < dataCopy[currentIdx - 1]) { // linear time complexity (DEPENDS HOW SMALL DATA is! It can become log N!) --> O(n)
            // iterate the 'sorted' (left) array starting from the index before current index towards zero
            // to see where the current index number is no longer less than each of the iteration's index number

            dataCopy[currentIdx] = dataCopy[currentIdx - 1]; // each iterations shifts a number to the right
            
            // comparison and shift animations to be pushed here
            animation = {};
            animation.comparison = [currentIdx, currentIdx - 1];
            animation.shift = [currentIdx - 1, dataCopy[currentIdx - 1]];
            animations.push(animation);
            
            currentIdx--;
        };
        dataCopy[currentIdx] = currentIdxValue; // once iteration stops, currentIdx is saved for insertion!
        // once iteration stops, we're ready to insert so animations will be pushed here
        animation = {};
        animation.insert = [currentIdx, currentIdxValue]
        animations.push(animation);

        
    };
};

// combining all time complexity: O(n) * O(n) which simplifies into: O(n^2)

export default insertSorting;