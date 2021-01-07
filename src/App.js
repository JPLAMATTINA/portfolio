import React from 'react';
import Navbar from './components/mynavbar/navbar'
import MyHome from './components/myhome/home'
import About from './pages/about/about'
import Experience from './pages/experience/experience'
import Skills from './pages/Skills/skills'
import TimeLine from "./components/projects/timeline";
import MyTitleMessage from "./components/My-TitleMessage/tittlemessage"
import Contact from "./pages/contact/contact"
import Footer from "./components/footer/footer"

import Fade from 'react-reveal/Fade'
import Container from 'react-bootstrap/Container'
//import Slide from 'react-reveal/Slide'

//import {Parallax} from 'react-parallax'

import './App.css';

function App() {
  return (

      <div className="App" style={{ position: "relative" }}> 
        <Navbar />    
        <MyHome/>
        <MyTitleMessage/>

                      {/*About section*/}

          <Container className="container-box rounded">
            <Fade duration={2500} >
              <About />
            </Fade>
          </Container>

                      {/*Expertise section*/}


          <Container className="container-box rounded">
            <Fade duration={1500} >
            <Experience />
            </Fade>
          </Container>

                      {/*Skills section*/}

          <Container className="container-box rounded">
            <Fade duration={1500} >
              <Skills />
            </Fade>
          </Container>

                      {/*Timeline section*/}

          <Container className="container-box rounded">
              <Fade duration={1500} >
                <TimeLine />
              </Fade>
          </Container>

                      {/*Contact section*/}
                      
          <Container className="container-box rounded">
              <Fade duration={1500} >
                  <Contact />
              </Fade>
          </Container>

                      {/*Footer section*/}
        <Footer />
    </div>
  );
}

export default App;
