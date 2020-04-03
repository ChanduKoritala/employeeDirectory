import React from "react";
import "./style.css";

function EmployeeCard(props) {
  let employee = props.employee.map((employee, i) => {
    return (
      <div className="card" key={i}>
        <div className="content">
          <ul>
            <ol className="empID">
              <strong>Employee ID:</strong>  {employee.id}
            </ol>
            <li>
              <strong>Name:</strong> {employee.name}
            </li>
            <li>
              <strong>Occupation: </strong> {employee.occupation}
            </li>
            <li>
              <strong>Location: </strong> {employee.location}
            </li>
            <li>
              <strong>DOB: </strong> {employee.dob}
            </li>
          </ul>
        </div>
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
