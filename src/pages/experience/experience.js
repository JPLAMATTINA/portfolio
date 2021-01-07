import React from "react";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import "./experience.css";
import L_GCBA from "./../../assets/img/profile/GCBA.svg"
import L_TALLERV3D from "./../../assets/img/profile/TALLERV3D.png"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



  function Flip(event){
    var element = event.currentTarget;
    if (element.className === "flip") {
    if(element.style.transform === "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};

const Experience = () => {

  const[t]=useTranslation("global");


  return (


    <div id="experience">
      <h1 className="pt-3 text-center font-style pb-3">{t("title.experience")}</h1>

      <Container>

        {/*TallerV3D expertise*/}
            <Row >
              <Col md={6}>
              <div className="card-container">
                    <div className="flip" onClick={Flip} >
                        <div className="front">
                          <header className="title-card">
                            <span className="txt-center">{t("expertise.web")}</span>
                              <br/>
                              <span className="txt-center">{t("expertise.design2nd")}</span>
                              <br/>
                            <span className="body-title-style-one">Freelancer</span> 
                            <br/>                      

                          </header>  
                            <Card.Text className="text-center-style">

                              <span className="body-title-style">{t("expertise.duration")}:</span> {t("date.month3")} {t("age.age0")} - {t("date.month0")}
                              <br/>

                            </Card.Text>
                      </div>
                      <div className="back">
                        <Card.Img variant="top" className="img-resize" src={L_TALLERV3D} alt="TallerV3D" />
                      </div>
                    </div>
                  </div>
              </Col>


    {/*GCBA Expertise */}

              <Col md={6}>
              <div className="card-container">
                    <div className="flip" onClick={Flip} >
                        <div className="front">
                          <header className="title-card">
                            <span className="txt-center">{t("expertise.state")}</span>
                              <br/>
                            <span className="body-title-style-one">{t("expertise.job")}</span> 
                            <br/>                      
                            <span className="body-title-style-one">{t("expertise.jobTwo")}</span> 
                            <br/>
                            <br/>
                            <span  className="txt-center-one">{t("expertise.jobThree")}</span>
                            <br/>

                          </header>  
                            <Card.Text className="text-center-style">

                              <span className="body-title-style">{t("expertise.jobFour")}</span>
                              <br/>
                              <span className="body-title-style">{t("expertise.duration")}:</span> {t("date.month3")}  {t("age.age0")} - {t("date.month0")}
                              <br/>

                            </Card.Text>
                      </div>
                      <div className="back">
                        <Card.Img variant="top" className="img-resize" src={L_GCBA} alt="GCBA LOGO" />
                      </div>
                    </div>
                  </div>
              </Col>

            </Row>
        </Container> 
    </div>
  );
};

export default Experience;