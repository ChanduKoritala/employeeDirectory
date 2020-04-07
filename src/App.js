import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FilterBox from "./components/FilterBox"
import employees from "./employee.json";
import Sort from "./components/Sort"

class App extends Component {
  // Setting this.state.employee to the employee json array 
  state = {
    employees,
  };

  

  filterEmployeeByLocation = (location = "adelaide") => {
    let filterLocation = employees.filter((employee) => {
      console.log(this);
      return employee.location.toLowerCase().includes(location)
    })
    this.setState({ employees: filterLocation })
  }

  handleInput = (e) => {
    let location = e.target.value;
    this.filterEmployeeByLocation(location);
  }

  handleSort = (e) => {
    let sortedEmployees = [...employees];
    sortedEmployees.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })

  }

    // Map over this.state.employee and render a EmployeeCard component for each employee object
    render() {
      return (
        <Wrapper>
          <Title>Employee Directory</Title>
          <FilterBox handleInput={this.handleInput} />
          <Sort handleSort={this.handleSort} />
          {this.state.employees.map(employee => <EmployeeCard employee={employee} />)}
        </Wrapper>
      );
    }
  }

  export default App;
