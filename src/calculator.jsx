import React, { Component } from "react";
import { Input, Form, Button } from "semantic-ui-react";

const dependantOptions = [
  { key: "1", text: "1", value: "1" },
  { key: "2", text: "2", value: "2" },
  { key: "3", text: "3", value: "3" }
];

class calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: "",
      numberOfDependants: 0,
      calculatedCost: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDependantChange = this.handleDependantChange.bind(this);
    this.calculate = this.calculate.bind(this);
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

  calculate() {
    //6000 is years worth of dependants 500 * 12 months
    //12000 is years worth for employee

    let dependantCost = this.state.numberOfDependants * 6000;
    let cost = 12000 + dependantCost;
 
    if(this.state.employeeName.charAt(0) == 'A'){
        var discount = parseInt(cost * 0.10);
        cost = cost - discount;
    }
    this.setState({
        calculatedCost: cost
      });

    console.log(cost);
  }

  render() {
    return (
      <div>
        <h1>Hi Welcome to The Coding Challenge</h1>
        <Form>
          <Input
            value={this.state.employeeName}
            placeholder="Employee Name"
            type="text"
            onChange={this.handleNameChange}
          />
          <Input
            value={this.state.numberOfDependants}
            placeholder="# of dependants"
            type="text"
            onChange={this.handleDependantChange}
          />
        </Form>
        <div>
          <Button onClick={this.calculate}>Calculate Cost</Button>
        </div>
        <div>
            <h2> 
                Calculated Benefites for {this.state.employeeName} for 2019 is ${this.state.calculatedCost}
            </h2>
        </div>
      </div>
    );
  }
}

export default calculator;
