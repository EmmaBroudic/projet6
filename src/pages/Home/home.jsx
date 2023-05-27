import './home.css';
import Imagetop from '../../components/Imagetop/imagetop.jsx'
import Main from '../../components/Main/main.jsx';

function App() {
  return (
    <div className="app-container">
      <Imagetop />
      <Main />
    </div>
  );
}

export default App;

/*      <header className="App-header">
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
      </header>*/
