import logo from './logo.svg';
import './App.css';

import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Dictionary Search Engine</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by MaNawPhyu</small>
        </footer>
        
      </div>
      
    </div>
  );

}



