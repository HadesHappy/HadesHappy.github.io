import { useState, React } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import fla from "../media/FLA.png";
import efe from "../media/EFE.png";
import ebe from "../media/EBE.png";
import dlop from "../media/DLOP.png";
import com from "../media/COM.png";
import ca from "../media/CA.png";
import job from "../media/JOB.png";
import tcd from "../media/WAP.png";
import adwe from "../media/ADWE.png";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

const Projects = ({ darkMode }) => {
  const [show, setShow] = useState(false);

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <div id="padding" style={{ padding: "35px" }}></div>
      <br></br>
      <Fade>
        <Container>
          <br></br>
          <h2 className="lead" align="center">
            <b>- Projects -</b>
          </h2>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={10}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img
                            variant="top"
                            src={tcd}
                            style={{ width: "270px", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              React Weather Application
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Find the current weather and 7 days forecast of
                                any city on earth with this simple little web
                                app.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️ Simple React web application written with jsx
                            that returns the current weather. <br />
                            <br />
                            The app utilizes: <br />
                            OpenWeatherMap's API, OpenWeatherMap's icons for
                            weather icons, create-react-app tool, Axios for easy
                            http requests, Material-ui for styling and design.
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://monitor-weather.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                        style={{ marginRight: "10px" }}
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/KodaKDominus/weather_react_app"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img
                            variant="top"
                            src={com}
                            style={{ width: "270px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              Computer Auction Website
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                A CRUD website for auctioning computers.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️ Computer Auction CRUD application built with
                            Flask that allows users to bid, review,
                            login/register, post new listings, manage listings,
                            search by keyword, and keep a watch list.
                            <br />
                            The website is responsive and uses Bootstrap.
                            <br />
                            Internal server errors and page not found errors are
                            also handled appropriately. <br />
                            The project was developed with a team using Git.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://iab207-assessment-3.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                        style={{ marginRight: "10px" }}
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/KodaKDominus/com_auction_project"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img
                            variant="top"
                            src={ca}
                            style={{ width: "270px", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">CharitAble</Card.Title>
                            <Card.Text>
                              <p align="center">
                                A Fundraising Web App where people can start a
                                fundraiser for free
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️Developed a Fundraising Web App where people can
                            start a fundraiser for free and also contribute to
                            other ongoing fundraisers.
                            <br></br>This website can connect you to different
                            Blood Banks as a Donor and Patient.
                            <br />
                            <br></br>Tech Stack - ReachJs, Bootstrap, Cloud
                            Firestore
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://charit-able.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                        style={{ marginRight: "10px" }}
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/Tejaswi-Chaudhari/CharitAble"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
            </Row>
          </Zoom>
          <br></br>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img
                            variant="top"
                            src={efe}
                            style={{ width: "270px", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              Euphorus Frontend
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Country Happiness Application Front End
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️ React application that displays country happiness
                            data. Uses a REST API I created that holds country
                            data collected from the World Happiness Report
                            initiative. Users can register, login and view
                            happiness data by country. <br />
                            Users can filter the data by year, country and
                            search limit. <br />
                            AG Grid and Chart.js were used to present the data.
                            <br />
                            <br></br>Tech Stack - HTML, CSS, JavaScript
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://trusting-babbage-96d918.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                        style={{ marginRight: "10px" }}
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/KodaKDominus/euphorus_front"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img
                            variant="top"
                            src={ebe}
                            style={{ width: "270px", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              Euphorus Backend
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Country Happiness API Back End
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️ This project was the backend for assignment 1 in
                            CAB230 which required us to build endpoints to
                            satisfy a predefined Swagger document. <br />
                            It is an API that serves country happiness data.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://salty-refuge-23420.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                        style={{ marginRight: "10px" }}
                      >
                        View Website
                      </Button>
                    </a>
                    <a
                      href="https://github.com/KodaKDominus/euphorus_back"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View GitHub Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img
                            variant="top"
                            src={dlop}
                            style={{ width: "270px", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              Solve problem with dlops
                            </Card.Title>
                            <Card.Text>
                              <p align="center">Dlops AI landing page</p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️ We are a network of designers, software
                            engineers, data scientists and marketers whose
                            passion for digital technologies binds us together
                            to form this network of talents with abundant and
                            diverse capabilities to tackle the most complex
                            applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://dlopsai.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                        style={{ marginRight: "10px" }}
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/KodaKDominus/dlop_ai_landing"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
            </Row>
          </Zoom>
          <br></br>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img
                            variant="top"
                            src={fla}
                            style={{ width: "270px", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              Apartments Site.
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                This project advertise apartments by using
                                Google Ads API service
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️ It uses Google Ads API service. <br />
                            Clients just register on the flair and add
                            apartments as properties to advertise their
                            apartments. <br />
                            To advertise registered property it should be
                            enabled and each enabled property is called project.
                            <br />
                            One project have several campaigns. <br />
                            Campaign is the way how to advertise property.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://www.getflair.io/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>

              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img
                            variant="top"
                            src={job}
                            style={{ width: "270px", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">Job platform</Card.Title>
                            <Card.Text>
                              <p align="center">
                                This project is platform which advertise jobs.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️Developed a job market platform in Node.js with
                            MongoDBand React.js.
                            <br />
                            🖋️Created the "Payment Integration" using Chargebee.
                            <br />
                            🖋️Integrated Stripe API to make payments.
                            <br />
                            🖋️Developed admin dashboard to manage users,
                            projects
                            <br />
                            🖋️Developed a messaging app using Socket.io
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://www.getflair.io/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img
                            variant="top"
                            src={adwe}
                            style={{ width: "270px", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              Advertisement Website
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                I had a project in progress and the client
                                wanted to ¦nish it in urgent.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️ Worked as a part of an Agile team in the
                            development of an enterprise service bus for
                            Amsterdam Airport.
                            <br />
                            🖋️ Designed and developed multiple OSGI modules for
                            integration with external and internal systems.
                            <br />
                            🖋️ Redesigned and refactored a system making it more
                            maintainable and highly testable.
                            <br />- Introduced guidelines for unit testing on a
                            project.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://alphacoders.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
            </Row>
          </Zoom>
        </Container>
      </Fade>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default Projects;
