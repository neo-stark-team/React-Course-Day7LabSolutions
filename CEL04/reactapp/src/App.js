import { PureComponent, useState } from 'react';

class Display extends PureComponent {
  render() {
    console.log("Display was rendered at", new Date().toLocaleTimeString());
    //This is rendered with out rerendereing parent component
    return <h3>Greeting {this.props.name} !</h3>;

  }
}

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  return (
    <>
      <label>
        Enter Your Name {': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Enter Your Age {': '}
        <input value={age} onChange={e => setAge(e.target.value)} />
      </label>
      <Display name={name} />
    </>
  );
}