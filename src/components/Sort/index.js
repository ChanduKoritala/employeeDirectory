import React from 'react';
import "./style.css";

function Sort(props) {
    return (
        <select className= "select" defaultValue ="Sort" onChange= {props.handleSort}>
        <option value= "selectOption">Select any option to sort</option>    
        <option className = "ascending" value= "asc">Sort by Ascending Order</option>
        <option className = "descending" value= "desc">Sort by Descending Order</option>
        </select>
    )
};

export default Sort;
