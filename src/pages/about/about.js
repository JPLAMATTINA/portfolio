import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from './../../assets/img/profile/jota.png'
import Button from 'react-bootstrap/Button'
import { useTranslation } from "react-i18next";
import L_RESUME from "./../../assets/img/profile/CV.pdf"
import L_PDF from "../../assets/img/skills/PDF.svg";
import L_WP from "../../assets/img/skills/WP.svg";
import L_LINKEDIN from "../../assets/img/skills/Linkedin.svg";
import L_GITHUB from "../../assets/img/skills/github.svg";

import "./about.css"

const About = () => {

  const[t]=useTranslation("global");

        return (
          <div id="about">
            <div className="about">
              <h1 className="text-center font-style pb-3">{t("title.about")}</h1>
              <Container>
                <Row className="pt-3 pb-5 align-items-center">
                  <Col xs={12} md={6}>
                    <Row className="justify-content-center mb-2 mr-2 ">
                      <Image className="profile justify-content-end" alt="profile" src={Profile} roundedCircle fluid />
                    </Row>
                  </Col>
                  <Col xs={12} md={6}>
                    <Row className="align-items-start p-2 about rounded">
                      <div className="textCenter">
                          <br/>
                            {t("description.paragraph")}
                            <br />
                            {t("description.paragraph1")}
                            <br/>
                            {t("description.paragraph2")}
                            <br/>
                            {t("description.paragraph3")}
                      </div>
                   <Col className="d-flex justify-content-center flex-wrap">
                        <div>
                          <a href={`https://api.whatsapp.com/send?phone=5491164492145&text=${t("wp.message")}`} target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-success" title="Say hello on Wp">
                              <i className="fab fa-whatsapp-square"></i> 
                              <Image src={L_WP} rounded className="image-style m-1"></Image>
                            </Button>
                          </a>
                        </div>
                        <div>
                          <a href={L_RESUME} download="CV - Juan Pablo La Mattina.pdf" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-danger">
                            <Image src={L_PDF} rounded className="image-style m-1"></Image>
                            </Button>
                          </a>
                        </div>
                        <div>
                          <a href="https://github.com/JPLAMATTINA" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-secondary">
                              <Image src={L_GITHUB} rounded className="image-style m-1"></Image>
                            </Button>
                          </a>
                        </div>
                        <div>
                          <a href="https://www.linkedin.com/in/jplamattina/" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-primary">
                              <Image src={L_LINKEDIN} rounded className="image-style m-1"></Image>
                            </Button>
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        );
      };

export default About;