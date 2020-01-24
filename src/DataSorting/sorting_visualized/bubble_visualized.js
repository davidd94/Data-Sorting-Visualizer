const ANIMATION_SPEED_MS = 2.5;
const PRIMARY_COLOR = 'lightblue';
const COMPARISON_COLOR = 'red';
const SWAP_COLOR = 'limegreen';
const IN_PROGRESS_COLOR = '#ee7bf6';
const COMPLETE_COLOR = 'limegreen';


const bubbleVisualized = (animations, data_sorted, setArrayData, setSorting, sortSpeed) => {
    const ADJUSTED_ANIMATIONSPEED_MS = (ANIMATION_SPEED_MS / ((sortSpeed === 0 ? 5 : sortSpeed) / 10));
    for (let i = 0; i < animations.length; i++) {
        const dataBars = document.getElementsByClassName('array-bars');
        const comparison = animations[i].comparison;
        const swap = animations[i].swap;

        // displays the array comparisons in red
        if (comparison) {
            setTimeout(() => {
                dataBars[comparison[0]].style.background = COMPARISON_COLOR;
                dataBars[comparison[1]].style.background = COMPARISON_COLOR;
            }, i * ADJUSTED_ANIMATIONSPEED_MS);

            // revert back to default colors
            setTimeout(() => {
                dataBars[comparison[0]].style.background = PRIMARY_COLOR;
                dataBars[comparison[1]].style.background = IN_PROGRESS_COLOR;
            }, (i + 1) * ADJUSTED_ANIMATIONSPEED_MS);
        };
        
        // swapping by changing the bar height values (not real swapping)
        if (swap) {
            setTimeout(() => {
                let swapOneHeight = dataBars[comparison[0]].style.height;
                let swapTwoHeight = dataBars[comparison[1]].style.height;
                dataBars[comparison[0]].style.height = `${swapTwoHeight}`;
                dataBars[comparison[1]].style.height = `${swapOneHeight}`;
                dataBars[comparison[0]].style.background = SWAP_COLOR;
            }, i * ADJUSTED_ANIMATIONSPEED_MS);
            // revert back to default colors
            setTimeout(() => {
                dataBars[comparison[0]].style.background = PRIMARY_COLOR;
            }, (i + 1) * ADJUSTED_ANIMATIONSPEED_MS);
        };

        // blinking animation when sorting is completed
        if (i === animations.length - 1) {
            setTimeout(() => {
                dataBars[comparison[0]].style.background = COMPLETE_COLOR;
                dataBars[comparison[1]].style.background = COMPLETE_COLOR;
                for (let i = 0; i < dataBars.length; i++) {
                    dataBars[i].style.background = COMPLETE_COLOR;
                    setTimeout(() => {
                        dataBars[i].style.background = IN_PROGRESS_COLOR;
                        setSorting(false); // useState() setter invoked
                        setArrayData(data_sorted); // useState() setter to updated the array data AFTER visualized
                    }, 1500);
                };
            }, (i + 1) * ADJUSTED_ANIMATIONSPEED_MS);
        };
    };
};


export default bubbleVisualized;