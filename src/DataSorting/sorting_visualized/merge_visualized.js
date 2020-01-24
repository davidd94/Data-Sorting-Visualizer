const ANIMATION_SPEED_MS = 10;
const PRIMARY_COLOR = 'lightblue';
const COMPARISON_COLOR = 'red';
const SWAP_COLOR = 'darkblue';
const IN_PROGRESS_COLOR = '#ee7bf6';
const COMPLETE_COLOR = 'limegreen';


const mergeVisualized = (animations, sorted_data, setArrayData, setSorting, sortSpeed) => {
    const ADJUSTED_ANIMATIONSPEED_MS = (ANIMATION_SPEED_MS / ((sortSpeed === 0 ? 5 : sortSpeed) / 10));
    for (let i = 0; i < animations.length; i++) {
        const dataBars = document.getElementsByClassName('array-bars');
        // I have it setup where every two pushed array values are the bar index numbers for color changes
        // and every third pushed array is the actual sorting data
        const comparisonBars = i % 3 !== 2;

        // displays the array comparisons in red
        if (comparisonBars) {
            const [barOneIdx, barTwoIdx] = animations[i];
            // the first set of pushed array will contain the first bar's indexes both arrays (comparison bar)
            const barColor = i % 3 === 0 ? COMPARISON_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                dataBars[barOneIdx].style.background = barColor;
                dataBars[barTwoIdx].style.background = barColor;
            }, i * ADJUSTED_ANIMATIONSPEED_MS);
        } else {
            // the third pushed array value is the actual swapping/sorting
            const [barOneIdx, newHeight] = animations[i];
            setTimeout(() => {
                dataBars[barOneIdx].style.height = `${newHeight}px`;
                dataBars[barOneIdx].style.background = COMPLETE_COLOR;
            }, i * ADJUSTED_ANIMATIONSPEED_MS);
            // reverting the swapped color back to default after a short period
            setTimeout(() => {
                dataBars[barOneIdx].style.background = PRIMARY_COLOR;
            }, (i + 1) * ADJUSTED_ANIMATIONSPEED_MS);
        };

        // blinking animation when sorting is completed
        if (i === animations.length - 1) {
            setTimeout(() => {
                for (let i = 0; i < dataBars.length; i++) {
                    dataBars[i].style.background = COMPLETE_COLOR;
                    setTimeout(() => {
                        dataBars[i].style.background = IN_PROGRESS_COLOR;
                        setArrayData(sorted_data);
                        setSorting(false);
                    }, 1500);
                };
            }, (i + 2) * ADJUSTED_ANIMATIONSPEED_MS);
        };
    };
};


export default mergeVisualized;