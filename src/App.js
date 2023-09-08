import Hero from './Component/Hero';
import Header from './Component/Header';
import Services from './Component/Services';
import About from './Component/About';
import Portfolio from './Component/Portfolio';


import './index.css';

function App() {
  return (
    <div className="App">
        <Header/>
      <Hero/>
      <Services/>
      <About/>
        <Portfolio />
    </div>
  );
}

export default App;
