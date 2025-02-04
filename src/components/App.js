import StarsCanvas from './Stars';

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
     
    </div>
  );
}

export default App;
