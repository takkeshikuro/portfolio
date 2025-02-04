import StarsCanvas from './Stars';

import '../styles/App.css';
import Banner from './Banner';
import Projects from './Project';
import About from './About';
import Resume from './Resume';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div className="App">

      <StarsCanvas />
      <Banner />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
