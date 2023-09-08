import {useState} from "react"; 
import Header from './components/Header';


import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ReactGA from 'react-ga';
const TRACKING_ID = "G-GDEC05280Z"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  //create a state for dark and light mode
  const [darkMode, setDarkMode] = useState(true);

  return (
  <div className={darkMode && "dark"}>
    <Header darkMode = {darkMode} setDarkMode={setDarkMode}/>
    <main className= "text-gray-900 dark:text-white bg-white dark:bg-gray-900">
  
      <Hero/>
      <Services/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>

    </main>
  </div>
  );
}

export default App;
