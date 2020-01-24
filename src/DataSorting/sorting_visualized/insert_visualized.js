const ANIMATION_SPEED_MS = 10;
const PRIMARY_COLOR = 'lightblue';
const COMPARISON_COLOR = 'red';
const SHIFT_COLOR = 'limegreen';
const INSERT_COLOR = 'darkblue';
const IN_PROGRESS_COLOR = '#ee7bf6';
const COMPLETE_COLOR = 'limegreen';


const insertVisualized = (animations, sorted_data, setArrayData, setSorting, sortSpeed) => {
    for (let i = 0; i < animations.length; i++) {
        const dataBars = document.getElementsByClassName('array-bars');
        const comparison = animations[i].comparison;
        const shift = animations[i].shift;
        const insert = animations[i].insert;
        const ADJUSTED_ANIMATIONSPEED_MS = (ANIMATION_SPEED_MS / ((sortSpeed === 0 ? 5 : sortSpeed) / 10));
        
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

        // shifts the row of numbers to the right as it searches where to insert
        if (shift) {
            const shiftIdx = shift[0];
            const shiftHeight = shift[1];
            setTimeout(() => {
                dataBars[shiftIdx + 1].style.height = `${shiftHeight}px`;
                dataBars[shiftIdx].style.background = SHIFT_COLOR;
            }, i * ADJUSTED_ANIMATIONSPEED_MS);
            
            // reverting the shifted color back to default after a short period
            setTimeout(() => {
                dataBars[shiftIdx].style.background = PRIMARY_COLOR;
            }, (i + 1) * ADJUSTED_ANIMATIONSPEED_MS);
        };
        
        // when search completes, it contains an insert index and a value
        if (insert) {
            const insertIdx = insert[0];
            const insertHeight = insert[1];
            setTimeout(() => {
                dataBars[insertIdx].style.height = `${insertHeight}px`;
                dataBars[insertIdx].style.background = INSERT_COLOR;
            }, i * ADJUSTED_ANIMATIONSPEED_MS);

            // reverting the inserted color back to default after a short period
            setTimeout(() => {
                dataBars[insertIdx].style.background = PRIMARY_COLOR;
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


export default insertVisualized;