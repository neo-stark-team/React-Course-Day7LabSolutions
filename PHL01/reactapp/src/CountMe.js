import React from 'react';
class CountMe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    componentDidMount() {
     document.title = ` ${this.state.count} times`;
    }
    componentDidUpdate() {
     document.title = ` ${this.state.count} times`;
    }
  
    render() {
      return (
        <div>
          Counting :
          <p> {this.state.count}</p>
          <h6>See Title</h6>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            PRESS
          </button>
        </div>
      );
    }
  }
  export default CountMe;
  