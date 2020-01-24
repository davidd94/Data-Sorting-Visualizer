import React from 'react';
import { Button } from 'reactstrap';
import { Slider, Tracks, Handles, Rail } from 'react-compound-slider';

import Handle from './sliderbar/slider-handle.jsx';
import Track from './sliderbar/slider-track.jsx';
import { headerStyles, dataStyles, buttonStyles, sliderStyles, railStyles } from './DataSorting-styles.jsx';


const DataSortingPresent = (props) => {
    return (
        <div style={dataStyles.MainContainerStyles}>
            <div style={props.timeComplex ? {...headerStyles, display: 'block'} : {...headerStyles, display: 'none'}}>
                <h2>Time Complexity: <span style={{margin: '0 12px'}}/> {props.timeComplex}</h2>
            </div>
            
            <div style={buttonStyles.ContainerStyles}>
                <div style={dataStyles.DataContainerStyles}>
                    {props.arrayData ? props.arrayData.map((value, index) => {
                        let barSize = 2;
                        if (props.sortValue === 100) {barSize = 2.75} else if (props.sortValue === 90) {barSize = 3.25
                        } else if (props.sortValue === 80) {barSize = 3.75} else if (props.sortValue === 70) {barSize = 4.25
                        } else if (props.sortValue === 60) {barSize = 4.75} else if (props.sortValue === 50) {barSize = 6
                        } else if (props.sortValue === 40) {barSize = 7} else if (props.sortValue === 30) {barSize = 8
                        } else if (props.sortValue === 20) {barSize = 9.5} else if (props.sortValue === 10) {barSize = 11
                        } else {barSize = 13};

                        return (
                            <div className='array-bars' key={`index-${index}`} style={{...dataStyles.BarStyles, height: `${value}px`, width: `${barSize}px`}}>
                            </div>
                        );
                    }) : <div />}
                </div>
                <ul style={buttonStyles.ListStyles}>
                    <li style={buttonStyles.ListItemStyles}>
                        <Button outline color={props.sorting ? "danger" : "info"} onClick={() => props.genArray(props.sortValue)} disabled={props.sorting}>Generate New Array</Button>
                    </li>
                    <li style={buttonStyles.ListItemStyles}><div style={buttonStyles.VerticalDivider}></div></li>
                    <li style={buttonStyles.ListItemStyles}>
                        <Button outline color={props.sorting ? "danger" : "info"} onClick={() => props.setSortType('heap')} active={props.sortSelection === 'heap'} disabled={props.sorting}>Heap Sort</Button>
                    </li>
                    <li style={buttonStyles.ListItemStyles}>
                        <Button outline color={props.sorting ? "danger" : "info"} onClick={() => props.setSortType('insert')} active={props.sortSelection === 'insert'} disabled={props.sorting}>Insert Sort</Button>
                    </li>
                    <li style={buttonStyles.ListItemStyles}>
                        <Button outline color={props.sorting ? "danger" : "info"} onClick={() => props.setSortType('quick')} active={props.sortSelection === 'quick'} disabled={props.sorting}>Quick Sort</Button>
                    </li>
                    <li style={buttonStyles.ListItemStyles}>
                        <Button outline color={props.sorting ? "danger" : "info"} onClick={() => props.setSortType('selection')} active={props.sortSelection === 'selection'} disabled={props.sorting}>Selection Sort</Button>
                    </li>
                    <li style={buttonStyles.ListItemStyles}>
                        <Button outline color={props.sorting ? "danger" : "info"} onClick={() => props.setSortType('bubble')} active={props.sortSelection === 'bubble'} disabled={props.sorting}>Bubble Sort</Button>
                    </li>
                    <li style={buttonStyles.ListItemStyles}>
                        <Button outline color={props.sorting ? "danger" : "info"} onClick={() => props.setSortType('merge')} active={props.sortSelection === 'merge'} disabled={props.sorting}>Merge Sort</Button>
                    </li>
                    <li style={buttonStyles.ListItemStyles}><div style={buttonStyles.VerticalDivider}></div></li>
                    <li style={{...buttonStyles.ListItemStyles, width: '145px', margin: '0 8px'}}>
                        {'Array Size '}
                        <Slider rootStyle={sliderStyles} domain={[0, 100]} step={10} mode={2} values={[50]} disabled={props.sorting}>
                            <Rail>
                                {({ getRailProps }) => (
                                    <div style={railStyles} {...getRailProps()} />
                                )}
                            </Rail>
                            <Handles>
                                {({ handles, getHandleProps }) => (
                                    <div className="slider-handles">
                                        {props.setSortVal(handles[0].value)}
                                        {handles.map(handle => (
                                            <Handle key={handle.id} handle={handle} getHandleProps={getHandleProps} />
                                        ))}
                                    </div>
                                )}
                            </Handles>
                            <Tracks right={false}>
                                { ({ tracks, getTrackProps }) => (
                                    <div className="slider-tracks">
                                        {tracks.map( ({ id, source, target }) => (
                                            <Track key={id} source={source} target={target} getTrackProps={getTrackProps} />
                                        ))}
                                    </div>
                                )}
                            </Tracks>
                        </Slider>
                    </li>
                    <li style={{...buttonStyles.ListItemStyles, width: '145px', margin: '0 8px'}}>
                        {'Sorting Speed'}
                        <Slider rootStyle={sliderStyles} domain={[0, 100]} step={10} mode={2} values={[50]} disabled={props.sorting}>
                            <Rail>
                                {({ getRailProps }) => (
                                    <div style={railStyles} {...getRailProps()} />
                                )}
                            </Rail>
                            <Handles>
                                {({ handles, getHandleProps }) => (
                                    <div className="slider-handles">
                                        {props.setSortSpeed(handles[0].value)}
                                        {handles.map(handle => (
                                            <Handle key={handle.id} handle={handle} getHandleProps={getHandleProps} />
                                        ))}
                                    </div>
                                )}
                            </Handles>
                            <Tracks right={false}>
                                { ({ tracks, getTrackProps }) => (
                                    <div className="slider-tracks">
                                        {tracks.map( ({ id, source, target }) => (
                                            <Track key={id} source={source} target={target} getTrackProps={getTrackProps} />
                                        ))}
                                    </div>
                                )}
                            </Tracks>
                        </Slider>
                    </li>
                    <li style={buttonStyles.ListItemStyles}><div style={buttonStyles.VerticalDivider}></div></li>
                    <li style={buttonStyles.ListItemStyles}>
                        <Button outline color={props.sorting ? "warning" : "info"}
                                onClick={() => props.startSorting()} active={props.sorting}
                                style={props.sortSelection ? {} : {visibility: 'hidden'}}
                                disabled={props.sorting}
                        >{props.sorting ? 'Sorting...' : 'Sort it!'}</Button>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default DataSortingPresent;