import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent} from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";

//css import
import './timeline.css'

// projects
import L_ProjectOne from "../../assets/img/projects/projectOne.svg";
import L_ProjectTwo from "../../assets/img/projects/projectTwo.svg";

//skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
//import L_SASS from "../../assets/img/skills/sass-1.svg";
//import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_VERCEL from "../../assets/img/skills/vercel.svg";
//import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
//import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
//import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
//import L_EXPRESS from "../../assets/img/skills/express.svg";
//import L_MONGODB from "../../assets/img/skills/mongodb.svg";
//import L_MSSQL from "../../assets/img/skills/mssql.svg";
//import L_GIT from "../../assets/img/skills/git-icon.svg";
//import L_HEROKU from "../../assets/img/skills/heroku.svg";
//import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
//import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
//import L_JAVA from "../../assets/img/skills/java.svg";

//translate
import { useTranslation } from "react-i18next";





const TimeLine = () => {

  const[t]=useTranslation("global");

    return (
      <div id="projects">
        <h1 className="pt-3 text-center font-style pb-3">{t("title.projects")}</h1>
        <Timeline>
          <Events>

               {/* Projecto CV-RESUME */}

              <ImageEvent
                      date="01/12/2020"
                      className="text-center"
                      text={t("project.project2nd")}
                      src={L_ProjectTwo}
                      alt="React ToDo App"
                    >
                      <div className="d-flex justify-content-between flex-column mt-1"><div>
                          <Accordion>
                            <Card>
                              <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                              >
                                {t("project.details")}
                              </Accordion.Toggle>

                              <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                  <strong>{t("project.desc")}:</strong> {t("project.text1")}
                                  <hr />
                                  <strong>{t("project.features")}:</strong>
                                  <ul className="list-styles pt-1">
                                    <li>{t("project.list3")}</li>
                                    <li>{t("project.list4")}</li>
                                    <li>{t("project.list5")}</li>
                                  </ul>
                                  <hr />
                                  <strong>{t("project.tech")}:</strong>
                                  <ul>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={L_HTML5}
                                          alt="HTML 5"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        HTML5
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={L_CSS3}
                                          alt="CSS 3"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        CSS3
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={L_REACT}
                                          alt="React"
                                          rounded
                                          className="image-style1 m-1"
                                        ></Image>{" "}
                                        React
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={L_VERCEL}
                                          alt="Vercel"
                                          rounded
                                          className="image-style1 m-1"
                                        ></Image>{" "}
                                        Vercel
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={L_REACT_BOOTSTRAP}
                                          alt="Vercel"
                                          rounded
                                          className="image-style1 m-1"
                                        ></Image>{" "}
                                        React-Bootstrap
                                      </span>
                                    </li>
                                    
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                          </Accordion>
                        </div>
                        <div className="text-left d-flex justify-content-between flex-nowrap text-center ">
                          <UrlButton  className="boton"
                            href=""
                            target="_blank"
                          >
                          {t("project.live")}
                          </UrlButton>
                          <UrlButton 
                            href="https://github.com/JPLAMATTINA/portfolio"
                            target="_blank"
                          >
                          {t("project.code")}
                          </UrlButton>
                        </div>
                      </div>
              </ImageEvent>

              {/*Proyecto 2*/}

              <ImageEvent 
                      date="23/10/2020"
                      className="text-center"
                      text={t("project.project1st")}
                      src={L_ProjectOne}
                      alt="App Clima" 
                    >
                      <div className="d-flex justify-content-between flex-column mt-1"><div>
                          <Accordion>
                            <Card>
                              <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                              >
                                {t("project.details")}
                              </Accordion.Toggle>

                              <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                  <strong>{t("project.desc")}:</strong> {t("project.text")}
                                  <hr />
                                  <strong>{t("project.features")}:</strong>
                                  <ul className="list-styles pt-1">
                                    <li>{t("project.list")}</li>
                                    <li>{t("project.list1")}</li>
                                    <li>{t("project.list2")}</li>
                                  </ul>
                                  <hr />
                                  <strong>{t("project.tech")}:</strong>
                                  <ul>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={L_HTML5}
                                          alt="HTML 5"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        HTML5
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={L_CSS3}
                                          alt="CSS 3"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        CSS3
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={L_REACT}
                                          alt="React"
                                          rounded
                                          className="image-style1 m-1"
                                        ></Image>{" "}
                                        React
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={L_MATERIALUI}
                                          alt="Material-UI"
                                          rounded
                                          className="image-style1 m-1"
                                        ></Image>{" "}
                                        Material-UI
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={L_VERCEL}
                                          alt="Vercel"
                                          rounded
                                          className="image-style1 m-1"
                                        ></Image>{" "}
                                        Vercel
                                      </span>
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                          </Accordion>
                        </div>
                        <div className="text-left d-flex justify-content-between flex-nowrap text-center">
                          <UrlButton
                            href="https://appclima-jplamattina.vercel.app/"
                            target="_blank"
                          >
                            {t("project.live")}
                          </UrlButton>
                          <UrlButton
                            href="https://github.com/JPLAMATTINA/appClima-react"
                            target="_blank"
                          >
                            {t("project.code")}
                          </UrlButton>
                        </div>
                      </div>
              </ImageEvent>
          </Events>
        </Timeline>
      </div>
      
    )
}

export default TimeLine;