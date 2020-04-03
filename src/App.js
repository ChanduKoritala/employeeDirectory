import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employee from "./employee.json";

class App extends Component {
  // Setting this.state.employee to the employee json array
  state = {
    employee
  };

  filterLocation = id => {
    // Filter this.state.employee for employee with an id not equal to the id being removed
    const employee = this.state.employee.filter(employee => employee.id === id);
    // Set this.state.employee equal to the new employee array
    this.setState({ employee });
  };

  
  // Map over this.state.employee and render a EmployeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
          <EmployeeCard
            employee= {this.state.employee}
          />
      </Wrapper>
    );
  }
}

export default App;
