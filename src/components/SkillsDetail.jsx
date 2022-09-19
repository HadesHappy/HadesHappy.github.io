import { useState, React } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import Container from "react-bootstrap/esm/Container";

const SkillsDetail = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container>
          <br></br>
          <h2 className="lead" align="center">
            <b>- Skills Detail -</b>
          </h2>
          <br></br>
          <Zoom>
            <div className="skills-detail">
              <div className="row skills-detail-content">
                <div className="col-lg-3">
                  <div className="progress">
                    <span className="skill-detail">
                      UX & UI Design <i className="val">98%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="98"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "98%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill-detail">
                      Python/Django/Flask <i className="val">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill-detail">
                      HTML & CSS & Styled Component <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill-detail">
                      Bootstrap && TailWindCSS <i className="val">95%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill-detail">
                      Javascript & Typescript <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill-detail">
                      Reactjs & Nextjs <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="progress">
                    <span className="skill-detail">
                      Vue & Nuxtjs <i className="val">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill-detail">
                      Nodejs & Expressjs <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>  
                    <div className="progress">
                    <span className="skill-detail">
                      AngularJS & Angular <i className="val">85%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill-detail">
                      PHP/Laravel <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill-detail">
                      Nestjs <i className="val">83%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="83"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "83%" }}
                      ></div>
                    </div>
                  </div>

                </div>

                <div className="col-lg-3">
  

                  <div className="progress">
                    <span className="skill-detail">
                      Rust <i className="val">92%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="92"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill-detail">
                      NFT - marketplace/mint <i className="val">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
           
                  <div className="progress">
                    <span className="skill-detail">
                      Solana <i className="val">96%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="96"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "96%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill-detail">
                      Web3 <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="99"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                
                  <div className="progress">
                    <span className="skill-detail">
                      MySQL & PostgreSQL <i className="val">98%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="98"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "98%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill-detail">
                      MongoDB <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="progress">
                    <span className="skill-detail">
                      Github & GitLab && Bitbucket <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill-detail">
                      Trello & Jira <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill-detail">
                      Docker & Kubernetes <i className="val">86%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="86"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "86%" }}
                      ></div>
                    </div>
                  </div>
               
                  <div className="progress">
                    <span className="skill-detail">
                      Google Cloud <i className="val">93%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="93"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "93%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </Container>
      </Fade>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default SkillsDetail;
