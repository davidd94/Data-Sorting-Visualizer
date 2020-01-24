const ANIMATION_SPEED_MS = 50;
const PRIMARY_COLOR = 'lightblue';
const COMPARISON_COLOR = 'red';
const SWAP_COLOR = 'limegreen';
const IN_PROGRESS_COLOR = '#ee7bf6';
const PARTITION_COLOR = 'darkblue';
const COMPLETE_COLOR = 'limegreen';


const quickVisualized = (animations, sorted_data, setArrayData, setSorting, sortSpeed) => {
    for (let i = 0; i < animations.length; i++) {
        const dataBars = document.getElementsByClassName('array-bars');
        const comparison = animations[i].comparison; // comparing [currentIndex, endIndex(pre-pivot index)]
        const swap = animations[i].swap; // swap data [index to swap, swap value]
        const partition = animations[i].partition; // [partition post-index, partition pre-index]
        const completed = animations[i].complete;
        const ADJUSTED_ANIMATIONSPEED_MS = (ANIMATION_SPEED_MS / ((sortSpeed === 0 ? 5 : sortSpeed) / 10));
        
        // displays the array comparisons in red
        if (comparison) {
            setTimeout(() => {
                dataBars[comparison[0]].style.background = COMPARISON_COLOR;
                dataBars[comparison[1]].style.background = COMPARISON_COLOR;
            }, i * ADJUSTED_ANIMATIONSPEED_MS);
            
            
            setTimeout(() => {
                dataBars[comparison[0]].style.background = PRIMARY_COLOR;
                dataBars[comparison[1]].style.background = PRIMARY_COLOR;
            }, (i + 1) * ADJUSTED_ANIMATIONSPEED_MS);
        };
        
        // displays the swapping of numbers if current number is <= to the pivot num
        if (swap) {
            const swapIdx = swap[0];
            const swapHeight = swap[1];
            const swapIdx2 = swap[2];
            const swapHeight2 = swap[3];
            setTimeout(() => {
                dataBars[swapIdx].style.background = SWAP_COLOR;
                dataBars[swapIdx].style.height = `${swapHeight}px`;

                dataBars[swapIdx2].style.background = SWAP_COLOR;
                dataBars[swapIdx2].style.height = `${swapHeight2}px`;
            }, i * ADJUSTED_ANIMATIONSPEED_MS);
            
            setTimeout(() => {
                dataBars[swapIdx].style.background = PRIMARY_COLOR;
                dataBars[swapIdx2].style.background = PRIMARY_COLOR;
            }, (i + 1) * ADJUSTED_ANIMATIONSPEED_MS);
        };
        
        // displays the partitions being placed within each sub indexed arrays
        if (partition) {
            const endIdx = partition[2];
            const endIdxHeight = partition[3];
            const partitionIdx = partition[0];
            const partitionIdxHeight = partition[1];
            setTimeout(() => {
                dataBars[endIdx].style.height = `${endIdxHeight}px`;
                dataBars[endIdx].style.background = PARTITION_COLOR;

                dataBars[partitionIdx].style.height = `${partitionIdxHeight}px`;
                dataBars[partitionIdx].style.background = PARTITION_COLOR;
            }, i * ADJUSTED_ANIMATIONSPEED_MS);
            
            setTimeout(() => {
                dataBars[endIdx].style.background = PRIMARY_COLOR;
                dataBars[partitionIdx].style.background = PRIMARY_COLOR;
            }, (i + 1) * ADJUSTED_ANIMATIONSPEED_MS)
        };

        if (completed) {
            const endIdx = completed[0]
            setTimeout(() => {
                for (let i = 0; i < endIdx; i++) {
                    dataBars[i].style.background = IN_PROGRESS_COLOR;
                    dataBars[i].style.background = IN_PROGRESS_COLOR;
                };
            }, i * ADJUSTED_ANIMATIONSPEED_MS);
        };

        // blinking animation when sorting is completed
        if (i === animations.length - 1) {
            setTimeout(() => {
                for (let i = 0; i < dataBars.length; i++) {
                    dataBars[i].style.background = COMPLETE_COLOR;
                    setTimeout(() => {
                        dataBars[i].style.background = IN_PROGRESS_COLOR;
                        //setArrayData(sorted_data);
                        setSorting(false);
                    }, 1500);
                };
            }, (i + 3) * ADJUSTED_ANIMATIONSPEED_MS);
        };
    };
};


export default quickVisualized;