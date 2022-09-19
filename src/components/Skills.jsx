import React from "react";
import { Slide } from "react-awesome-reveal";
import skillsLight from "../media/skills-light.svg";
import skillsDark from "../media/skills-dark.svg";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faDocker,
  faNode,
  faHtml5,
  faJs,
  faAmazon,
  faPhp,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const Skills = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <div id="padding" style={{ padding: "35px" }}></div>
      <br></br>
      <Slide>
        <Container>
          <Row>
            <Col lg={4} xs={8}>
              <h1 className="display-3 skill-h">
                <br />
                <nobr>
                  I can work
                  <span className="with"> with</span>{" "}
                </nobr>
              </h1>
              <img
                src={darkMode ? skillsDark : skillsLight}
                alt="skills"
                className="skills-img img-fluid animated"
              />
            </Col>
            <Col lg={1} xs={2}>
              <br></br>
              <Card className="nbcard">
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon
                    className="skill"
                    size="2x"
                    icon={faPython}
                  />
                </Button>
                <br />
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon className="skill" size="2x" icon={faHtml5} />
                </Button>
                <br />
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon className="skill" size="2x" icon={faJs} />
                </Button>
                <br />
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon className="skill" size="2x" icon={faReact} />
                </Button>
                <br />
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon
                    className="skill"
                    size="2x"
                    icon={faDocker}
                  />
                </Button>
                <br />
              </Card>
            </Col>
            <Col lg={2} xs={2}>
              <br></br>
              <Card className="nbcard">
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <p align="center" className="skill-txt">
                    C
                  </p>
                </Button>
                <br />
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon
                    className="skill"
                    size="2x"
                    icon={faCss3Alt}
                  />
                </Button>
                <br />
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon className="skill" size="2x" icon={faNode} />
                </Button>
                <br />
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon
                    className="skill"
                    size="2x"
                    icon={faAmazon}
                  />
                </Button>
                <br />
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon className="skill" size="2x" icon={faPhp} />
                </Button>
                <br />
              </Card>
            </Col>
            <Col lg={5} xs={10}>
              <br></br>
              <Card className="skill-nbcard">
                <Card.Body>
                  <Card.Title>Programming Languages</Card.Title>
                  <Card.Text>
                    Python, JavaScript, Go, C Programming, C++, PHP
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="skill-nbcard">
                <Card.Body>
                  <Card.Title>Technologies</Card.Title>
                  <Card.Text>
                    HTML, CSS, Bootstrap, Natural Language Processing, ReactJs,
                    NodeJs, VueJs, AngularJs Docker, Cloud Firestore,Python,
                    Django, Django Rest Framework, Solnana, Solidity, Golang,
                    SQLite, AWS, Web3.js, Blockchain, ethereum, PostgreSQL,
                    Tailwind
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="skill-nbcard">
                <Card.Body>
                  <Card.Title>Others</Card.Title>
                  <Card.Text>
                    MS office, Graphic Designing,Google Ads API, Stripe
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
          <hr></hr>
        </Container>
      </Slide>
    </div>
  );
};

export default Skills;
