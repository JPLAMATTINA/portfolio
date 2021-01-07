import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";
import "./contact.css";

const Contact = () => {

  const[t]=useTranslation("global");



  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-style pb-3">{t("title.contact")}</h1>
      <Jumbotron className="contact">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:jplamattina@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="jplamattina@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/jplamattina/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/JPLAMATTINA" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-secondary" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>      
            <div className="m-2">
              <a href="https://twitter.com/jplamattina" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/juanpablo.lamattina/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href={`https://api.whatsapp.com/send?phone=5491164492145&text=${t("wp.message")}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline-success" title="Say hello on Wp">
                  <i className="fab fa-whatsapp-square"></i> Whatsapp
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a href="https://www.instagram.com/tallerv3d/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-secondary" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> Instagram
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Contact;