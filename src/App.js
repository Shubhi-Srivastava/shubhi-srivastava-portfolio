import { useState, useEffect } from "react";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home'
import Projects from "./views/Projects";
import LoadingScreen from "./components/LoadingScreen";
import Skills from "./views/Skills";
import Education from "./views/Education";
import ExperienceSection from "./views/ExperienceSection";




function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
  
      <>

        {!loading ? (
          <div >
            <Navbar />
            <Home />
            <About />
            
            <Education />
            <ExperienceSection />
            <Skills />
            <Projects />
            <Contact />
          </div>

        ) : (
          <LoadingScreen />
        )}
      </>
   

  );
}

export default App;
