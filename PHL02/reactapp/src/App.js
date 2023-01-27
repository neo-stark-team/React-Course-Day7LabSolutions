import { Component } from 'react';

export default class App extends Component {
  state = {
    name: 'IamNEO',
    age: 15,
  };
//set the default value
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleAgeChange = (e) => {
    this.setState({
      age: this.state.age + 1 
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button onClick={this.handleAgeChange}> 
          + AGE
        </button>
        <p>Welcome, {this.state.name}. Your AGE is {this.state.age}.</p>
      </>
    );
  }
}