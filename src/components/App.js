import StarsCanvas from './Stars';

import logo from '../logo.svg';
import '../styles/App.css';
import Banner from './Banner';
import Projects from './Project';
import About from './About';
import Resume from './Resume';
import Home from './Home';

function App() {
  return (
    <div className="App">

      <StarsCanvas />
      <Banner />
      <Home />
      <About />
      <Projects />
      <Resume />
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
      </header>
    </div>
  );
}

export default App;
