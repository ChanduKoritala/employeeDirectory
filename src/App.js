import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FilterBox from "./components/FilterBox"
import employee from "./employee.json";

class App extends Component {
  // Setting this.state.employee to the employee json array 
  state = {
    employee
  };


  handleInput = (e) => {
    this.setState({employee: e.target.value})
  }
  // Map over this.state.employee and render a EmployeeCard component for each employee object
  render() {
    let filterLocation = this.state.employee.filter((employee) => {
      return employee.location.toLowerCase().includes(this.state.employee.toLowerCase())
    })
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <FilterBox handleInput= {this.handleInput}/>
          <EmployeeCard
            filterLocation= {filterLocation}
          />
      </Wrapper>
    );
  }
}

export default App;
