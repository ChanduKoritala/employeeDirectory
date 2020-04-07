import React from 'react';
import "./style.css";

function Sort(props) {
    return (
        <select className= "select" defaultValue ="Sort" onChange= {props.handleSort}>
        <option value= "Name">Sort by Ascending Order</option>
        <option value= "Date Of Birth">Sort by Descending Order</option>
        </select>
    )
};

export default Sort;
