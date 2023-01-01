import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [helloText, setHelloText] = useState('');

  const handleClick = async () => {
    console.log('CLICKED');
    try {
      await axios
        .get('http://scoobygang.win:5000/hello')
        .then((result) => {
          if (result.status === 200) {
            setHelloText(result.data);
          }
        })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I DID IT ! 
        </p>
        {helloText !== '' ? helloText : <button onClick={() => handleClick()}>CLICK ME</button>} 
      </header>
    </div>
  );
}

export default App;