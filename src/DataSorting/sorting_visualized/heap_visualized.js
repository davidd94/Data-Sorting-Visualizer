const ANIMATION_SPEED_MS = 50;
const PRIMARY_COLOR = 'lightblue';
const COMPARISON_COLOR = 'red';
const SWAP_COLOR = 'limegreen';
const IN_PROGRESS_COLOR = '#ee7bf6';
const COMPLETE_COLOR = 'limegreen';


const heapVisualized = (animations, sorted_data, setArrayData, setSorting, sortSpeed) => {
    for (let i = 0; i < animations.length; i++) {
        const dataBars = document.getElementsByClassName('array-bars');
        const ADJUSTED_ANIMATIONSPEED_MS = (ANIMATION_SPEED_MS / ((sortSpeed === 0 ? 5 : sortSpeed) / 10));
        const comparison = animations[i].comparison; // contains two comparison indexes
        const swap = animations[i].swap; // contains [index1, index1 value, index2, index2 value]
        const maxheapswap = animations[i].maxheapswap; // contains [lowest index, lowest value, maxheap index, max value]
        
        // displays the array comparisons in red
        if (comparison) {
            setTimeout(() => {
                dataBars[comparison[0]].style.background = COMPARISON_COLOR;
                dataBars[comparison[1]].style.background = COMPARISON_COLOR;
            }, i * ADJUSTED_ANIMATIONSPEED_MS);
            
            // revert back to default colors
            setTimeout(() => {
                dataBars[comparison[0]].style.background = PRIMARY_COLOR;
                dataBars[comparison[1]].style.background = PRIMARY_COLOR;
            }, (i + 1) * ADJUSTED_ANIMATIONSPEED_MS);
        };
        
        // displays floating the lowest number to the bottom of the heap tree
        if (swap) {
            setTimeout(() => {
                dataBars[swap[0]].style.background = SWAP_COLOR;
                dataBars[swap[0]].style.height = `${swap[1]}px`;

                dataBars[swap[2]].style.background = SWAP_COLOR;
                dataBars[swap[2]].style.height = `${swap[3]}px`;
            }, (i + 1) * ADJUSTED_ANIMATIONSPEED_MS);
            
            // revert back to default colors
            setTimeout(() => {
                dataBars[swap[0]].style.background = PRIMARY_COLOR;
                dataBars[swap[2]].style.background = PRIMARY_COLOR;
            }, (i + 2) * ADJUSTED_ANIMATIONSPEED_MS);
        };
        
        // displays the swapping of lowest number with the max heap number
        if (maxheapswap) {
            setTimeout(() => {
                dataBars[maxheapswap[0]].style.background = SWAP_COLOR;
                dataBars[maxheapswap[0]].style.height = `${maxheapswap[1]}px`;

                dataBars[maxheapswap[2]].style.background = SWAP_COLOR;
                dataBars[maxheapswap[2]].style.height = `${maxheapswap[3]}px`;
            }, (i + 1) * ADJUSTED_ANIMATIONSPEED_MS);
            
            // revert back to default colors
            setTimeout(() => {
                dataBars[maxheapswap[0]].style.background = PRIMARY_COLOR;
                dataBars[maxheapswap[2]].style.background = IN_PROGRESS_COLOR;
            }, (i + 2) * ADJUSTED_ANIMATIONSPEED_MS);
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
            }, (i + 2) * ADJUSTED_ANIMATIONSPEED_MS);
        };
    };
};


export default heapVisualized;