/* 
Description: Bubble sorting method involves comparing two numbers at a time (bubble) and swaps if the first
number is higher for the condition that you want to move the highest number to the end first. That means
that for each iteration, you will decrease the interation end index length by 1. Eventually, highest number
will be stacked towards the end while the lowest number gets sorted out towards the starting index.
*/

const bubbleSorting = (data) => {
    console.log('bubble sorting started...');
    const animations = [];
    /* 
    REQUIRED to make a copy of the existing un-ordered data to prevent setTimeOut attempting to organized
    a already mutated organized data after any React re-renderings
    */
    const dataCopy = data.slice();
    if (data.length <= 1) {
        return data;
    };

    bubbleSortingHelper(dataCopy, 0, dataCopy.length - 1, animations);

    return [animations, dataCopy];
};

const bubbleSortingHelper = (dataCopy, startIdx, endIdx, animations) => {
    if (startIdx === endIdx) {
        return;
    };
    // moving the highest number to the right of the array per iteration by swapping
    for (let i = startIdx; i < endIdx; i++) { // linear time complexity --> O(n)
        for (let j = startIdx; j < endIdx - i; j++) { // linear time complexity --> O(n)
            const animation = {}; // constant time complexity --> O(1)
            animation.comparison = [j, j + 1]; // constant time complexity --> O(1)
            if (dataCopy[j + 1] < dataCopy[j]) { // constant time complexity --> O(1)
                // swap values
                animation.swap = [j + 1, j]; // constant time complexity --> O(1)
                [dataCopy[j], dataCopy[j + 1]] = [dataCopy[j + 1], dataCopy[j]]; // constant time complexity --> O(1)
            };
            animations.push(animation);  // constant time complexity --> O(1)
        };
    };
};

// combining all time complexity: O(n) * O(n) * 6*O(1) which simplifies into: O(n^2)


export default bubbleSorting;