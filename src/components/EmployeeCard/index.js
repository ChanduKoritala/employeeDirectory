import React from "react";
import "./style.css";
import { render } from "@testing-library/react";

function EmployeeCard(props) {
  let employee = props.employee.map((employee) => {
    render()
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
                <td> {employee.id} </td>
                <td> {employee.name}</td>
                <td>{employee.occupation}</td>
                <td>{employee.location}</td>
                <td>{employee.dob}</td>
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
    
  })
  return (
    <div>
      {employee}
    </div>
  )

}

export default EmployeeCard;
