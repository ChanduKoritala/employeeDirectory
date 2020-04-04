import React from 'react';
import "./style.css";

function FilterBox(props) {
    return (
        <div>
            <input className= "search" onChange={props.handleInput} type="text" size="50" placeholder="Enter a Location to Filter(Adelaide, Melbourne, Sydney, Brisbane))"/>
        </div>
    )
}

export default FilterBox;
