import {useState} from "react"; 
import Header from './components/Header';
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  //create a state for dark and light mode
  const [darkMode, setDarkMode] = useState(false);

  return (
  <div className={darkMode && "dark"}>
    <Header darkMode = {darkMode} setDarkMode={setDarkMode}/>
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  
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
