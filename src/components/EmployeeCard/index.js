import React from "react";
import "./style.css";
import employee from "./employee.json";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">Name</th>
              <th scope="col">Occupation</th>
              <th scope="col">Location</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {props.id} </td>
              <td> {props.name}</td>
              <td>{props.occupation}</td>
              <td>{props.location}</td>
              <td>{props.dob}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <input onChange= {props.filterLocation} type = "text" placeholder= "Enter a Name to filter"/> 
        
      <button onClick= {props.sortByAscendingOrder}>
        Sort By Ascending Order
        </button> 
      
    </div>
  );
}

export default EmployeeCard;
