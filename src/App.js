import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Home,
  About,
  Skills,
  SkillsDetail,
  Contact,
  Footer,
  Services,
  Loader,
  CryptoProjects,
  Projects,
} from "./components";

import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import "./components/styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timerloader = setTimeout(() => {
      setLoading(false);
    }, 2300);
    return () => clearTimeout(timerloader);
  }, [loading]);
  return (
    <div>
      {loading === false ? (
        <Router>
          <div className="App" data-theme={darkMode ? "dark" : "light"}>
            <Route path="/">
              <Navbar
                style={{
                  position: "fixed",
                  zIndex: "10",
                  width: "100%",
                }}
                expand="lg"
                className="navbar"
                data-theme={darkMode ? "dark" : "light"}
              >
                <Navbar.Brand href="#home" className="navname">
                  Welcome!
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#about" className="link">
                      About me
                    </Nav.Link>
                    <Nav.Link href="#skills" className="link">
                      Skills
                    </Nav.Link>
                    <Nav.Link href="#projects" className="link">
                      Projects
                    </Nav.Link>
                    <Nav.Link href="#cryptoprojects" className="link">
                      Crypto Projects
                    </Nav.Link>
                    <Nav.Link href="#services" className="link">
                      Services
                    </Nav.Link>
                    <Nav.Link href="#contact" className="link">
                      Contact
                    </Nav.Link>
                  </Nav>
                  <Button
                    onClick={toggleDarkMode}
                    variant={darkMode ? "outline-light" : "outline-dark"}
                  >
                    {darkMode ? "Light Mode" : "Dark Mode"}{" "}
                    <FontAwesomeIcon
                      className="dark"
                      size="lg"
                      icon={faAdjust}
                      spin
                    />
                  </Button>
                </Navbar.Collapse>
              </Navbar>
              <hr></hr>
              <div id="home">
                <Home darkMode={darkMode} />
              </div>
              <div id="about">
                <About darkMode={darkMode} />
              </div>
              <div id="skills">
                <Skills darkMode={darkMode} />
                <SkillsDetail darkMode={darkMode} />
              </div>
              <div id="services">
                <Services darkMode={darkMode} />
              </div>
              <div id="cryptoprojects">
                <CryptoProjects darkMode={darkMode} />
              </div>

              <div id="projects">
                <Projects darkMode={darkMode} />
              </div>
              <div id="contact">
                <Contact darkMode={darkMode} />
              </div>
              <Footer />
            </Route>
            <br></br>
          </div>
        </Router>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
