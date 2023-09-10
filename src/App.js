import Hero from "./Component/Hero";
import Header from "./Component/Header";
import Services from "./Component/Services";
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Loading from "./Component/Loading";
import Process from "./Component/Process";
import Testimonials from "./Component/Testimonials";


import "./index.css";

function App() {
  return (
    <div className="App">
      <Loading />
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Process />
      <Testimonials />
    </div>
  );
}

export default App;
