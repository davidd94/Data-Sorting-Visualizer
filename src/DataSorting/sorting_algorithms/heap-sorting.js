/*
Description: Heap sorting
*/
const heapSorting = (data) => {
    console.log('heap sorting started...');
    if (data.length <= 1) {
        return data;
    };
    const animations = [];
    const dataCopy = data.slice();

    heapSortingHelper(dataCopy, animations);

    return [animations, dataCopy];
};

const heapSortingHelper = (data, animations) => {
    // Build a maxheap
    BuildMaxHeap(data, animations);

    const dataLength = data.length - 1;
    // one by one extract elements by swapping the max heap value with the lowest value
    for (let i = dataLength; i > 0; i--) { // linear time complexity --> O(n)
        [data[0], data[i]] = [data[i], data[0]]; // linear time complexity --> O(n)
        
        let animation = {};
        animation.maxheapswap = [0, data[0], i, data[i]]; // after swapping, data[i] is the max heap val and data[0] is lowest
        animations.push(animation);

        heapifyData(data, i, 0, animations);
    };
};

const BuildMaxHeap = (data, animations) => {
    const dataLength = data.length - 1;
    for (let i = dataLength; i >= 0; i--) { // linear time complexity --> O(n)
        heapifyData(data, dataLength, i, animations);
    };
};

// floats the lowest number to the bottom of the heap tree
const heapifyData = (data, dataLength, index, animations) => {
    /*
    log time complexity --> O(log n)
    I would normally label this function as O(n) time complexity but due to the fact that only half of the
    iterations are fully executed thus making this O(log n). 
    */
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let max = index;
    let animation = {};

    if (left < dataLength && data[left] > data[index]) { // this conditional statement is only executed half of the time
        max = left;
    };

    if (right < dataLength && data[right] > data[max]) { // this conditional statement is only executed half of the time
        max = right;
    };

    if (max !== index) { // this conditional statement is only executed half of the time
        [data[index], data[max]] = [data[max], data[index]];

        animation.comparison = [index, max];
        animation.swap = [index, data[index], max, data[max]]; // linear time complexity --> O(n)
        animations.push(animation);

        heapifyData(data, dataLength, max, animations);
    } else { // this conditional statement is only executed ALL of the time
        animation.comparison = [index, max]; // constant time complexity --> O(1)
        animations.push(animation); // constant time complexity --> O(1)
    };
};

// combining all time complexity: heapSortingHelper O(n) + BuildMaxHeap O(n) + heapifyData O(log n) => O(2n) + O(log n)
// which simplifies to O(n * log n)

export default heapSorting;