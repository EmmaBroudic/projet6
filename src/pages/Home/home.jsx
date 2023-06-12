import Imagetop from '../../components/Image-top/image-top.jsx';
import Main from '../../components/Main/main.jsx';
import '../../index.css';

function Home() {
  return (
    <div className = "app-container">
      <Imagetop />
      <Main />
    </div>
  );
}

export default Home;

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
