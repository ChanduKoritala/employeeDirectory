import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
      <div className="card" key={props.employee.id}>
        <div className="content">
          <ul>
            <ol className="empID">
              <strong>Employee ID:</strong>  {props.employee.id}
            </ol>
            <li>
              <strong>Name:</strong> {props.employee.name}
            </li>
            <li>
              <strong>Occupation: </strong> {props.employee.occupation}
            </li>
            <li>
              <strong>Location: </strong> {props.employee.location}
            </li>
            <li>
              <strong>DOB: </strong> {props.employee.dob}
            </li>
          </ul>
        </div>
      </div>
  );
}

export default EmployeeCard;
