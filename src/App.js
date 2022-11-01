import logo from './Andre.png';
import './App.css';

function App() {
  let num = 3**2;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div id="texto">
          <h1>A variável num é: {num}</h1>
        </div>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
