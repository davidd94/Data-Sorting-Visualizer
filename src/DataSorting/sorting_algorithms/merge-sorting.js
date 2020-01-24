/*
Description: Merge sorting method will be using Recursion to break down the array into half until it
reaches its base case of a single index of data which will merge into other individual data. Merging further
with other previously merged data. Repeat until final arrays is merged into one sorted array.
*/
const mergeSorting = (data) => {
    console.log('merge sorting started...');
    const animations = [];
    const dataMain = data.slice();
    const dataCopy = data.slice();
    if (dataMain.length <= 1) {
        return dataMain;
    };

    mergeSortingHelper(dataMain, dataCopy, 0, dataMain.length - 1, animations);

    return [animations, dataMain];
};

const mergeSortingHelper = (dataMain, dataCopy, startIdx, endIdx, animations) => {
    // recursion base condition or else recursive calls will never end
    if (startIdx === endIdx) {
        return;
    };

    const middleIndx = Math.floor((startIdx + endIdx) / 2); // rounds to the base integer number
    
    // perform recursive calls to reach to our base case of single index datas
    mergeSortingHelper(dataCopy, dataMain, startIdx, middleIndx, animations); // left split array
    mergeSortingHelper(dataCopy, dataMain, middleIndx + 1, endIdx, animations); // right split array
    mergeData(dataMain, dataCopy, startIdx, middleIndx, endIdx, animations);
};

const mergeData = (dataMain, dataCopy, startIdx, middleIdx, endIdx, animations) => {
    let k = startIdx; // independent index from 0 -> original data.length
    let i = startIdx;
    let j = middleIdx + 1;
    // comparing the left half with right half
    while (i <= middleIdx && j <= endIdx) {
        // comparison values. need to push them once to change their colors from default to comparison
        animations.push([i, j]);
        // comparison values. need to push them a second time to revert their colors back to default
        animations.push([i, j]);

        if (dataCopy[i] <= dataCopy[j]) {
            animations.push([k, dataCopy[i]]);
            dataMain[k] = dataCopy[i];
            k += 1;
            i += 1;
        } else {
            animations.push([k, dataCopy[j]]);
            dataMain[k] = dataCopy[j];
            k += 1;
            j += 1;
        };
    };

    // merging the rest of left half when right half finished before left
    while (i <= middleIdx) {
        // comparison values. need to push them once to change their colors from default to comparison
        animations.push([i, i]);
        // comparison values. need to push them a second time to revert their colors back to default
        animations.push([i, i]);
        // Replacing the value at k index in the main data with the i index value
        animations.push([k, dataCopy[i]]);
        dataMain[k] = dataCopy[i];
        k += 1;
        i += 1;
    };

    // merging the rest of the right when the left half finished before right
    while (j <= endIdx) {
        // comparison values. need to push them once to change their colors from default to comparison
        animations.push([j, j]);
        // comparison values. need to push them a second time to revert their colors back to default
        animations.push([j, j]);
        // Replacing the value at k index in the main data with the i index value
        animations.push([k, dataCopy[j]]);
        dataMain[k] = dataCopy[j];
        k += 1;
        j += 1;
    };
};


const mergeWithoutAnimations = (array) => {
    if (array.length === 1) return array;
    const middleIdx = Math.floor(array.length / 2);
    const firstHalf = mergeWithoutAnimations(array.slice(0, middleIdx));
    const secondHalf = mergeWithoutAnimations(array.slice(middleIdx));
    const sortedArray = [];
    let i = 0;
    let j = 0;

    while (i < firstHalf.length && j < secondHalf.length) {
        if (firstHalf[i] < secondHalf[j]) {
            sortedArray.push(firstHalf[i++]);
        } else {
            sortedArray.push(secondHalf[j++]);
        };
    };

    while (i < firstHalf.length) {
        sortedArray.push(firstHalf[i++]);
    };

    while (j < secondHalf.length) {
        sortedArray.push(secondHalf[j++]);
    };

    return sortedArray;
};

export default mergeSorting;