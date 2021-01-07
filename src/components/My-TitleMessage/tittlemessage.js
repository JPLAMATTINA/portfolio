import React from 'react';
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import { useTranslation } from "react-i18next";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

// cambiar a EM para que sea mas resposive en vez de px
const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  font-family:"monserrat";
  
  strong {
    font-size: 1.25em;
  }
  div {
    font-family: "Monserrat";
    color: #fbdf7e;
    /*
    background: -webkit-linear-gradient(#ff8f79, #fbdf7e);
    background-clip: text;
   -webkit-text-fill-color: transparent;
    */
     font-weight: 100px;
    letter-spacing: 2px;
     .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;


function TitleMessage() {

  const [t, i18n] = useTranslation("global");

  <DropdownButton id="dropdown-basic-button" title="Lenguage">
    <Dropdown.Item onClick={() => i18n.changeLanguage("es")} href="#/action-1">SPANISH</Dropdown.Item>
    <Dropdown.Item onClick={() => i18n.changeLanguage("en")} href="#/action-2">ENGLISH</Dropdown.Item>
  </DropdownButton>;
  return (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mx-auto">
            {[t("name.greeting")]}
            <br />
            <span>
              <strong>Juan Pablo La Mattina</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: [t("message.message"), t("message.messageOne"), t("message.messageTwo")],
                autoStart: true,
                loop: true,
                delay: 50
              }} />
          </div>
        </div>
      </div>
    </MyTitleMessage>

  );
}

export default TitleMessage;
