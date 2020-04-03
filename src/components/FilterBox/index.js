import React from 'react';
import "./style.css";

function FilterBox(props) {
    return (
        <div>
            <input onChange = {props.handleInput} type = "text" placeholder= "Enter a Location(Adelaide, Melbourne, Sydney, Brisbane))"/>
        </div>
    )
}

export default FilterBox;
