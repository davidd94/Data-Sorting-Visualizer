/*
Description: Quick sorting method will be using Recursion to PARTITION the CURRENT array into indexed arrays
until reaches its base case of a single index. Each recursive call will first partition the indexed array range
by using an indexed value (pivot) which in this case the right-most value and sort any number within the
partition lower than the pivot to the left and higher to the right. Then recursive call occurs and repeats the
parition process AGAIN.
Just for comparison: Even though quick sort uses recursive calls like merge sort, quick sort does its
sorting before a recursive call whereas merge sort does it the opposite by first sorting on its last recursive
call and goes upwards the tree.
*/
const quickSorting = (data) => {
    console.log('quick sorting started...');
    if (data.length <= 1) {
        return data;
    };

    const animations = [];
    // We have to create a copy of the data for the animations to mutate from
    const dataCopy = data.slice();

    quickSortingHelper(dataCopy, 0, data.length - 1, animations);

    return [animations, dataCopy];
};

const quickSortingHelper = (data, startIdx, endIdx, animations) => {
    if (startIdx >= endIdx) {
        return;
    };

    // this is where quick sort first partitions and roughly sorts itself then returns the partition index
    // for the next recursive call to use as an 'endIdx'
    //const pivotIdx = partitionData(data, startIdx, endIdx, animations);
    const pivotIdx = partitionRandomized(data, startIdx, endIdx, animations);

    // recursive call to partition the array into two. Note that each time a partition index number is
    // determined, it is essentially sorted already thus the recursive calls purposely skips the partition index
    quickSortingHelper(data, startIdx, pivotIdx - 1, animations);
    quickSortingHelper(data, pivotIdx + 1, endIdx, animations);
};

const partitionRandomized = (data, startIdx, endIdx, animations) => {
    const randomPivotIdx = (Math.round(Math.random() * (endIdx - startIdx))) + startIdx;
    // swap random pivot val with end val to work seamlessly with partitionData func.
    /* Randomly picking a pivot point as a oppose to always picking the end index as the pivot point will
    greatly reduce the chance of quick sort hitting its worse-case time complexity scenario of O(n^2).
    Randomly picking pivot points will ensure that the list will more likely be slightly sorted prior starting
    which averages O (n * log n) time complexity.
    */
    if (randomPivotIdx) [data[randomPivotIdx], data[endIdx]] = [data[endIdx], data[randomPivotIdx]];
    return partitionData(data, startIdx, endIdx, animations);
};

const partitionData = (data, startIdx, endIdx, animations) => {
    const pivotValue = data[endIdx];
    let pIndex = startIdx;
    let animation = {};

    // iterating the partitioned array and moving any numbers less than the
    // pivot value (set to end of index of partition)
    for (let i = startIdx; i < endIdx; i++) { // linear time complexity --> O(n)
        // comparing each index with the end index
        animation = {};
        animation.comparison = [i, endIdx];
        if (data[i] <= pivotValue) { // sorts any number less than the pivot number to the left side of array
            [data[i], data[pIndex]] = [data[pIndex], data[i]]; // linear time complexity --> O(n)

            animation.swap = [pIndex, data[pIndex], i, data[i]];
            pIndex++;
        };
        animations.push(animation);
    };
    // after iteration completes, the remaining pivot value must be placed in the last pIndex location
    // which will 'partition' the left (numbers less than pivot) and right (numbers greater then pivot)
    [data[pIndex], data[endIdx]] = [data[endIdx], data[pIndex]]; // linear time complexity --> O(n)

    animation = {};
    if (pIndex === endIdx) {
        animation.complete = [pIndex];
    };
    // adding the partition value being inserted or created
    animation.partition = [pIndex, data[pIndex], endIdx, data[endIdx]];
    animations.push(animation);
    
    
    return pIndex;
};

// combining all time complexity: 

export default quickSorting;