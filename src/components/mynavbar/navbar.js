import React, {useState, useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import styled from 'styled-components'
import { useTranslation } from "react-i18next";
import "./navbar.css"

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;

const MyNavbar = () =>{

        //used useState to figured out to hide the navbar when you scroll down and appear when you go up 
        //https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp 

        const [showNavbar, setShowNavbar] = useState(true)
        const [scrollPos, setScrollPos] = useState(0)
       

        const handleScroll = () => {
          setScrollPos(document.body.getBoundingClientRect().top)
          setShowNavbar(document.body.getBoundingClientRect().top > scrollPos)
      //    console.log(` navDisplay > ${navDisplay} || showNavBar ${showNavbar} || scrollPos ${scrollPos}`)
        }

        let navDisplay = showNavbar ? "active" : "hidden"
        useEffect(() => {
          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          }
        })

        //translate 


        const[t, i18n]=useTranslation("global");
    

  return (
        <Transition>
          <div>
           <Navbar 
                fixed= "top"
                expand="md" 
                variant="dark" 
                className={`animate-navbar nav-theme justify-content-between ${navDisplay}`}>


                {/*<Navbar.Brand href="#home">Insertar Img  </Navbar.Brand>*/}

              <DropdownButton id="dropdown-basic-button" title="Language">
                <Dropdown.Item onClick={()=> i18n.changeLanguage("es")} href="#/action-1">🇪🇸 SPANISH</Dropdown.Item>
                <Dropdown.Item onClick={()=> i18n.changeLanguage("en")}  href="#/action-2">🇬🇧 ENGLISH</Dropdown.Item>
              </DropdownButton>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="#home">{t("navbar.home")}</Nav.Link>
                    <Nav.Link href="#about">{t("navbar.about")}</Nav.Link>
                    <Nav.Link href="#experience">{t("navbar.experience")}</Nav.Link>
                    <Nav.Link href="#skills">{t("navbar.skills")}</Nav.Link>
                    <Nav.Link href="#projects">{t("navbar.projects")}</Nav.Link>
                    <Nav.Link href="#contact">{t("navbar.contact")}</Nav.Link>
                 </Nav>
                </Navbar.Collapse>
            </Navbar>
         </div>
        </Transition>
      );
    }
  

export default MyNavbar;