import React, {useState} from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import { MD5 } from 'crypto-js';

function App() {

  const [pass, setPass] = useState('');


  const [md5Pass, setMd5Pass] = useState("");

  const CryptoPass = () => {
    setMd5Pass(MD5(pass).toString());
    setPass('');
  }

  return (
    <div className="App">
      <h1 className="title"> Passwords CryptoJs.MD5 🐱‍💻 </h1>
      <p className="description">Enter the password ⬇️</p>
      <div className="crypto">
        <Input placeholder="Password" value={pass} setValue={setPass} />
        <Button onClick={() => CryptoPass()} text="Crypto🐱‍💻" />
      </div>
      <div className="result">
        <h2>Your hash:</h2>
        <h2 className="hash">{md5Pass}</h2>
      </div>
    </div>
  );
}

export default App;
