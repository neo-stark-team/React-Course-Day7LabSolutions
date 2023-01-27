import { PureComponent, useState } from 'react';

class Welcome extends PureComponent {
  render() {
    //This is rendered with out rerendereing parent component
    return <h3>Welcome {this.props.name} !</h3>;

  }
}

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

    return (
      <>
        <input
          value={name}
          onChange={e => setName(e.target.value)} />
        <Welcome name={name}/>
        <button onClick={this.handleAgeChange}> 
          + AGE
        </button>
        <p> Your AGE is {this.state.age}.</p>
      </>
    )
  
}
