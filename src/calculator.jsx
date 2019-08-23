import React, { Component } from "react";
import { Input, Form, Button } from "semantic-ui-react";

class calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: '',
      dependentName:[],
      numberOfDependents: 0,
      calculatedCost: 0, 
      employeeSalary: 0,
      employeePaycheck: 0
    };
    //binds to connect functions to use
    this.handleEmployeeName = this.handleEmployeeName.bind(this);
    this.handleDependentName = this.handleDependentName.bind(this);
    this.calculateBenefitDeduction = this.calculateBenefitDeduction.bind(this);
  }
  //handles employee name being entered
  handleEmployeeName(event) {
    this.setState({
      employeeName: event.target.value
    });
  }
  //handles employee name being entered
  handleDependentName(event) {
    this.setState({
      numberOfDependents: event.target.value
    });
  }
  // calculates total benefits costs
  calculateBenefitDeduction() {
    var dependentCost = this.state.numberOfDependents * 500;
    var cost = 1000 + dependentCost;
    var dependentNameLetterCatch = this.state.dependentName.map((d)=> d.charAt(0));

    if(this.state.employeeName.charAt(0) === 'A' || this.state.employeeName.charAt(0) === 'a') {
      cost = cost - (1000 * 0.10);
    }

    dependentNameLetterCatch.forEach(function(item,index,array) {
      if(item === 'A' || item === 'a'){
        var discount = 500 * 0.10;
        cost = cost - discount;
      }
      else {
        return cost;
      }
    });
    // define salary variables after cost totaled, then calculate
    var salaryWithDeductions = 52000 - cost;
    var paycheckWithDeductions = ((52000 - cost) / 26);
    paycheckWithDeductions.toFixed(2);
    //set new values for state
    this.setState({
        calculatedCost: cost,
        employeeSalary: salaryWithDeductions,
        employeePaycheck: paycheckWithDeductions,
    });
  }
  // sets state dependent name to itself for values
  addNewDependent(){
    this.setState({dependentName: [...this.state.dependentName, '']})
  }
  // handles dependent name being entered from input
  handleDependent(e, index){
    this.state.dependentName[index] = e.target.value;
    this.setState({dependentName: this.state.dependentName})
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
            onChange={this.handleEmployeeName}
          />
          <Input
            value={this.state.numberOfDependents}
            placeholder="# of Dependents"
            type="text"
            onChange={this.handleDependentName}
          />

          {
            this.state.dependentName.map((dep, index) => {
              return (
                <div key={index}>
                  <Input
                  placeholder="name of Dependent"
                  value={dep}
                  onChange={(e)=> this.handleDependent(e, index)}
                  />
                </div>
              )
            })
          }
        </Form>
        <div>
          <Button onClick={this.calculateBenefitDeduction}>Calculate Cost</Button>
          <Button onClick={(e)=> this.addNewDependent(e)}>Add Dependent</Button>
        </div>
        <div>
            <h2>
                Calculated benefit cost for {this.state.employeeName} for 2019 is ${this.state.calculatedCost}
                <br></br>
                Calulated yearly salary after benefit deductions ${this.state.employeeSalary}
                <br></br>
                Calculated paycheck after benefit deductions ${this.state.employeePaycheck.toFixed(2)}
            </h2>
        </div>
      </div>
    );
  }
}

export default calculator;
