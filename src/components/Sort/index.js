import React from 'react';
import "./style.css";

function Sort(props) {
    return (
        <select className= "select" defaultValue ="Sort" onChange= {props.handleSort}>
        <option value= "Name">Name</option>
        <option value= "Date Of Birth">DateOfBirth</option>
        </select>
    )
};

export default Sort;
