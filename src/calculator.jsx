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
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDependantChange = this.handleDependantChange.bind(this);
    this.calculateBenefitDeduction = this.calculateBenefitDeduction.bind(this);
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
    // console.log(event.target.value);
  }

  calculateBenefitDeduction() {
    let dependantCost = this.state.numberOfDependants * 500;
    let cost = 1000 + dependantCost;

    var salarywD = 52000 - cost;
    var payCheckWD = ((52000 - cost) / 26);
    payCheckWD.toFixed(2);

    var test = this.state.dependentName.map((d)=> d.charAt(0));
    // add in logic from Repl to check dependantsName for A for any number

    test.forEach(function(item,index,array) {
      if(item === 'A' || item === 'a'){
        var discount = 500 * 0.10;
        cost = cost - discount;
      }
      else {
        return cost;
      }
    });
    // if(this.state.employeeName.charAt(0) === 'A' || test[0] === 'A' ) {
    //     var discount = parseInt(cost * 0.10);
    //     cost = cost - discount;
    // }
    this.setState({
        calculatedCost: cost,
        employeeSalary: salarywD,
        employeePaycheck: payCheckWD,
    });


    // console.log(test);
  }

  addDependent(){
    this.setState({dependentName: [...this.state.dependentName, '']})
  }

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
                Calulated Yearly Salary after Benefits deductions {this.state.employeeSalary}
                <br></br>
                Calculated Paycheck after Benefits deductions {this.state.employeePaycheck.toFixed(2)}
            </h2>
        </div>
      </div>
    );
  }
}

export default calculator;
