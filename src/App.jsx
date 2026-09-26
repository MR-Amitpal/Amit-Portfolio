import Navbar from "./components/NavbarTemp"
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



import "./App.css";

function App() {

    return (
        <>
            <Navbar/>
            <main>
              <Home />
              <About />
              <Skills />
              <Projects/>
              <Education />
              <Contact />
            </main>
            <Footer/>
        </>
    );
}

export default App;

