import logo from './logo.png';
import React from 'react';
import { getFooterCopy, getFullYear } from './utils';
import './App.css';

function App() {
  return (
    <>
      <div className='App-header'>
        <img src={logo} alt='logo'></img>
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>email</label>
        <input id='email' name='email' type='text'></input>
        <label htmlFor='password'>password</label>
        <input id='password' name='password' type='password'></input>
        <button>OK</button>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </>
    
  );
}

export default App;
