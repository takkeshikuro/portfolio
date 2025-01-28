import '../styles/Home.css';
import Type from './Type';

function Home() {
	return (<section className='Home-page'>
            <h1>Welcome to my Portfolio</h1>
            <div className='Home-type'>
                  <Type />
            </div>
      </section>);
};

export default Home;