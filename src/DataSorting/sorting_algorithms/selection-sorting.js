/* 
Description: Selection sorting method will be checking for the lowest number for each iteration and swapping 
it with the current iteration's starting index. Thus, each next iteration will increase the start index by 1 
due to having the lowest number swapped/sorted to the current iteration's start index. 
*/
const selectionSorting = (data) => {
    console.log('selection sorting started...');
    const animations = [];
    const dataCopy = data.slice();
    if (data.length <= 1) {
        return data;
    };

    selectionSortingHelper(dataCopy, 0, dataCopy.length, animations);

    return [animations, dataCopy];
};

const selectionSortingHelper = (dataCopy, startIdx, endIdx, animations) => {
    if (startIdx === endIdx) {
        return;
    };
    
    for (let i = startIdx; i < endIdx - 1; i++) { // linear time complexity --> O(n)
        var lowestNumber = dataCopy[i];
        for (let j = i + 1; j < endIdx; j++) { // linear time complexity --> O(n)
            const animation = {};
            animation.comparison = [i, j];
            if (dataCopy[j] < lowestNumber) { // constant time complexity --> O(1)
                // swap current lowest number with the beginning iteration index
                lowestNumber = dataCopy[j];
                animation.swap = [j, i];
                [dataCopy[i], dataCopy[j]] = [dataCopy[j], dataCopy[i]]; // constant time complexity --> O(1)
            };
            animations.push(animation);
        };
    };
};

// combining all time complexity: O(n) * O(n) * 2*O(1) which simplifies into: O(n^2)

export default selectionSorting;