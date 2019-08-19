import React, { Component } from "react";
import { Input } from "semantic-ui-react";

class calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: '',
      numberOfDependants: 0,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDependantChange = this.handleDependantChange.bind(this);
  }
  handleNameChange(event) {
    this.setState({
      employeeName: event.target.value
    });
    console.log(this.state);
  }
  handleDependantChange(event) {
    this.setState({
      numberOfDependants: event.target.value
    });
    console.log(this.state);
  }

  calculator(){
  }

  render() {
    return (
      <div>
        <h1>Hi Welcome to The Paylocity Coding Challenge</h1>
        <Input
          value={this.state.employeeName}
          placeholder="Employee Name"
          type="text"
          onChange={this.handleNameChange}
        />
        <Input
          value={this.state.numberOfDependants}
          placeholder="# of Employee Dependants"
          type="text"
          onChange={this.handleDependantChange}
        />
      </div>
    );
  }
}

export default calculator;
