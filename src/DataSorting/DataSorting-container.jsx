import React, { useState, useEffect } from 'react';

import DataSortingPresent from './DataSorting-present.jsx';
import bubbleSorting from './sorting_algorithms/bubble-sorting.js';
import bubbleVisualized from './sorting_visualized/bubble_visualized.js';
import selectionSorting from './sorting_algorithms/selection-sorting.js';
import selectionVisualized from './sorting_visualized/selection_visualized.js';
import quickSorting from './sorting_algorithms/quick-sorting.js';
import quickVisualized from './sorting_visualized/quick_visualized.js';
import insertSorting from './sorting_algorithms/insert-sorting.js';
import insertVisualized from './sorting_visualized/insert_visualized';
import mergeSorting from './sorting_algorithms/merge-sorting.js';
import mergeVisualized from './sorting_visualized/merge_visualized.js';
import heapSorting from './sorting_algorithms/heap-sorting.js';
import heapVisualized from './sorting_visualized/heap_visualized.js';


const DataSortingContainer = () => {
    const dataBars = document.getElementsByClassName('array-bars');

    const [arrayData, setArrayData] = useState();
    const [sortSelection, setSortSelection] = useState('');
    const [sortValue, setSortValue] = useState(50);
    const [sortSpeed, setSortSpeed] = useState(50);
    const [sorting, setSorting] = useState(false);
    const [timeComplex, setTimeComplex] = useState('');
    
    useEffect(() => {
        console.log('starting data visualizer... container');
        const init_array_data = resetArray(50);
        setArrayData(init_array_data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // basic client-facing functions
    const resetArray = (amt, append=false) => {
        const array = [];
        let value = ((amt ? amt : sortValue) * 3) + 30;
        if (append) {
            value = ((amt ? amt : sortValue) * 3);
        };

        for (let i = 0; i < (value); i++) {
            array.push(randomNumberGenerator(10, 500));
        };

        for (let i = 0; i < dataBars.length; i++) {
            dataBars[i].style.backgroundColor = 'lightblue';
        }

        return array;
    };

    const randomNumberGenerator = (min, max) => {
        const randomNumber = Math.round((Math.random() * max) + min);
        return randomNumber;
    };

    const generateRandomArray = (sortVal) => {
        let generate_array = resetArray(sortVal);
        setArrayData(generate_array);
    };
    
    const setSortType = (sortType) => {
        let timeComplexity = '';
        if (sortType === 'bubble') {
            timeComplexity = 'O( n\u00B2 )';
        } else if (sortType === 'merge') {
            timeComplexity = 'O( n * log(n) )';
        } else if (sortType === 'selection') {
            timeComplexity = 'O( n\u00B2 )';
        } else if (sortType === 'heap') {
            timeComplexity = 'O( n * log(n) )';
        } else if (sortType === 'quick') {
            timeComplexity = 'O( n * log(n) )';
        } else if (sortType === 'insert') {
            timeComplexity = 'O( n\u00B2 )';
        };

        sortSelection === sortType ? setSortSelection('') : setSortSelection(sortType);
        sortSelection === sortType ? setTimeComplex('') : setTimeComplex(timeComplexity);
    };
    
    const setSortVal = (sortVal) => {
        if (sortValue !== sortVal) {
            setSortValue(sortVal);
            let array_length = (sortVal * 3) + 30;
            let curr_array_length = arrayData.length;
            
            if (array_length < curr_array_length) {
                let sliced_data = arrayData.slice(0, array_length);
                setArrayData(sliced_data);
            } else if (array_length > curr_array_length) {
                let current_sort_value = ((curr_array_length - 30) / 3);
                let new_sort_value = sortVal - current_sort_value;
                let new_array_data = resetArray(new_sort_value, true);
                let curr_array_data = arrayData;
                
                new_array_data.map((data) => {
                    curr_array_data.push(data);
                });

                setArrayData(curr_array_data);
            }
        };
    };

    const startSorting = () => {
        if (sortSelection === 'heap' && sorting === false) {
            setSorting(true);
            startHeap();
        } else if (sortSelection === 'merge' && sorting === false) {
            setSorting(true);
            startMerge();
        } else if (sortSelection === 'quick' && sorting === false) {
            setSorting(true);
            startQuick();
        } else if (sortSelection === 'selection' && sorting === false) {
            setSorting(true);
            startSelection();
        } else if (sortSelection === 'bubble') {
            setSorting(true);
            startBubble();
        } else if (sortSelection === 'insert' && sorting === false) {
            setSorting(true);
            startInsert();
        };
    };
    
    const startBubble = () => {
        const [animations, sorted_data] = bubbleSorting(arrayData); // returns only indexes of comparisons and swaps
        // passing useState() setter to visual func to change sorting state after setTimeOut visuals are completed
        bubbleVisualized(animations, sorted_data, setArrayData, setSorting, sortSpeed);
    };

    const startSelection = () => {
        const [animations, sorted_data] = selectionSorting(arrayData);
        selectionVisualized(animations, sorted_data, setArrayData, setSorting, sortSpeed);
    };

    const startMerge = () => {
        const [animations, sorted_data] = mergeSorting(arrayData);
        mergeVisualized(animations, sorted_data, setArrayData, setSorting, sortSpeed);
    };

    const startInsert = () => {
        const [animations, sorted_data] = insertSorting(arrayData);
        insertVisualized(animations, sorted_data, setArrayData, setSorting, sortSpeed);
    };

    const startQuick = () => {
        const [animations, sorted_data] = quickSorting(arrayData);
        quickVisualized(animations, sorted_data, setArrayData, setSorting, sortSpeed);
    };

    const startHeap = () => {
        const [animations, sorted_data] = heapSorting(arrayData);
        heapVisualized(animations, sorted_data, setArrayData, setSorting, sortSpeed);
    };
    
    return (
        <>
            <DataSortingPresent arrayData={arrayData}
                                setSortType={setSortType}
                                genArray={generateRandomArray}
                                sortSelection={sortSelection}
                                startSorting={startSorting}
                                setSortVal={setSortVal}
                                setSortSpeed={setSortSpeed}
                                sorting={sorting}
                                sortValue={sortValue}
                                timeComplex={timeComplex} />
        </>
    );
};


export default DataSortingContainer;