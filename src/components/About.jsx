import React from "react";
import { Fade } from "react-awesome-reveal";
import "./styles.css";
import connectLight from "../media/connect-light.png";
import connectDark from "../media/connect-dark.png";
import resume from "../media/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSlack,
  faSkype,
  faTelegram,
  faGoogle,
  faDiscord,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const About = ({ darkMode }) => {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  return (
    <div>
      <div id="padding" style={{ padding: "35px" }}></div>
      <br></br>
      <br></br>
      <Fade>
        <Container align="center">
          <Row>
            <Col lg={8} align="center">
              <Card className="nbcard">
                <Card.Body>
                  <Card.Title>
                    <h2 className="lead">Let's have an introduction!</h2>
                  </Card.Title>
                  <br></br>
                  <Card.Text>
                    <p>
                      I'm a Full Stack & Blockchain developer with 7+ years of
                      web application development experience. I believe in
                      client satisfaction. I need an opportunity to prove my
                      skills. Just a talk and we can have a better understanding
                      and can work together for a long time. I have also working
                      experience with <strong>Model View Controller</strong>{" "}
                      (MVC) and have been involved in maintaining versions of
                      source code using <strong>GIT</strong>. I am up for
                      challenges that take me by surprise and make my head hurt.
                      I'm comfortable working on any domain if I find the
                      project is worth it. You can imagine me focused on the
                      laptop screen and typing or taking down notes. Apart from
                      technical things, I enjoy good books and verses, and I
                      have a good eye for <strong>Art</strong>. Now that you
                      know me a bit, please feel free to drop a text because{" "}
                      <strong>Communication is a two-way street.</strong>
                    </p>
                  </Card.Text>
                  <a href={resume} target="_blank" rel="noreferrer noopener">
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                      className="a"
                      style={{ marginRight: "10px" }}
                    >
                      <FontAwesomeIcon
                        className="dark"
                        size="lg"
                        icon={faFile}
                      />{" "}
                      View Resume
                    </Button>
                  </a>
                  <a href={resume} download>
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                      className="a"
                    >
                      <FontAwesomeIcon
                        className="dark"
                        size="lg"
                        icon={faFile}
                      />{" "}
                      Download Resume
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} align="center">
              <Card className="nbcard">
                <Card.Body>
                  <Card.Title>
                    <h2 className="lead">Let's Connect!</h2>
                  </Card.Title>
                  <br></br>
                  <Row>
                    <Col lg={1} xs={8}></Col>
                    <Col lg={3} xs={8}>
                      <a
                        href="https://github.com/KodaKDominus"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="skills-btn"
                        >
                          <FontAwesomeIcon
                            className="skill"
                            size="2x"
                            icon={faGithub}
                          />
                        </Button>
                      </a>
                    </Col>
                    <Col lg={3} xs={8}>
                      <a
                        href="https://t.me/kodakatsuro"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="skills-btn"
                        >
                          <FontAwesomeIcon
                            className="skill"
                            size="2x"
                            icon={faTelegram}
                          />
                        </Button>
                      </a>
                    </Col>
                    <Col lg={3} xs={8}>
                      <a
                        href="https://codepen.io/KodaKDominus"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="skills-btn"
                        >
                          <FontAwesomeIcon
                            className="skill"
                            size="2x"
                            icon={faCodepen}
                          />
                        </Button>
                      </a>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col lg={1} xs={8}></Col>
                    <Col lg={3} xs={8}>
                      <a
                        href="kodakatsuro@gmail.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="skills-btn"
                        >
                          <FontAwesomeIcon
                            className="skill"
                            size="2x"
                            icon={faGoogle}
                          />
                        </Button>
                      </a>
                    </Col>
                    <Col lg={3} xs={8}>
                      <a
                        href="https://join.skype.com/invite/wDpwy4t21eVg"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="skills-btn"
                        >
                          <FontAwesomeIcon
                            className="skill"
                            size="2x"
                            icon={faSkype}
                          />
                        </Button>
                      </a>
                    </Col>
                    <Col lg={3} xs={8}>
                      <a
                        href="https://discord.gg/43FU8bau"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="skills-btn"
                        >
                          <FontAwesomeIcon
                            className="skill"
                            size="2x"
                            icon={faDiscord}
                          />
                        </Button>
                      </a>
                    </Col>
                  </Row>
                  <img
                    src={darkMode ? connectDark : connectLight}
                    alt="connect"
                    className="connect-img img-fluid animated"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
          <hr></hr>
          <br></br>
        </Container>
      </Fade>
    </div>
  );
};

export default About;
