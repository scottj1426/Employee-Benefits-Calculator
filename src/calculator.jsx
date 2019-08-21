import React, { Component } from "react";
import { Input, Form, Button } from "semantic-ui-react";

class calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: '',
      dependentName:[],
      numberOfDependants: 0,
      calculatedCost: 0, 
      employeeSalary: 0,
      employeePaycheck: 0
    };
    //binds to connect functions to use
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDependantChange = this.handleDependantChange.bind(this);
    this.calculateBenefitDeduction = this.calculateBenefitDeduction.bind(this);
  }
  //handles employee name being entered
  handleNameChange(event) {
    this.setState({
      employeeName: event.target.value
    });
    console.log(this.state);
  }
    //handles employee name being entered
  handleDependantChange(event) {
    this.setState({
      numberOfDependants: event.target.value
    });
    console.log(event.target.value);
  }
  // calculates total benefits costs
  calculateBenefitDeduction() {
    var dependantCost = this.state.numberOfDependants * 500;
    var cost = 1000 + dependantCost;
    var test = this.state.dependentName.map((d)=> d.charAt(0));

    if(this.state.employeeName.charAt(0) === 'A' || this.state.employeeName.charAt(0) === 'a') {
      cost = cost - (1000 * 0.10);
    }

    test.forEach(function(item,index,array) {
      if(item === 'A' || item === 'a'){
        var discount = 500 * 0.10;
        cost = cost - discount;
      }
      else {
        return cost;
      }
    });
    // set salry variables after cost totaled, then calculate
    var salarywD = 52000 - cost;
    var payCheckWD = ((52000 - cost) / 26);
    payCheckWD.toFixed(2);

    this.setState({
        calculatedCost: cost,
        employeeSalary: salarywD,
        employeePaycheck: payCheckWD,
    });
  }
  // sets state dependant name to itself for values
  addDependent(){
    this.setState({dependentName: [...this.state.dependentName, '']})
  }
  // handles dependent name being entered from input
  handleDep(e, index){
    this.state.dependentName[index] = e.target.value;
    this.setState({dependentName: this.state.dependentName})
    console.log(this.state.dependentName)
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

          {
            this.state.dependentName.map((dep, index) => {
              return (
                <div key={index}>
                  <Input
                  placeholder="name of dependent"
                  value={dep}
                  onChange={(e)=> this.handleDep(e, index)}
                  />
                </div>
              )
            })
          }
        </Form>
        <div>
          <Button onClick={this.calculateBenefitDeduction}>Calculate Cost</Button>
          <Button onClick={(e)=> this.addDependent(e)}>Add Dependent</Button>
        </div>
        <div>
            <h2>
                Calculated benefits for {this.state.employeeName} for 2019 is ${this.state.calculatedCost}
                <br></br>
                Calulated Yearly Salary after Benefits deductions ${this.state.employeeSalary}
                <br></br>
                Calculated Paycheck after Benefits deductions ${this.state.employeePaycheck.toFixed(2)}
            </h2>
        </div>
      </div>
    );
  }
}

export default calculator;
