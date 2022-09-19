import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import helloLight from "../media/hello-light.png";
import helloDark from "../media/hello-dark.png";
import avatar from "../media/grin.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

const Home = ({ darkMode }) => {
  return (
    <div>
      <div id="padding" style={{ padding: "35px" }}></div>
      <AttentionSeeker shakeX>
        <Row>
          <Col lg={2} xs={12}></Col>
          <Col lg={1} xs={12}>
            <br></br>
            <br></br>
            <img
              src={avatar}
              width="250px"
              height="250px"
              className="rounded-circle"
            ></img>
          </Col>
          <Col lg={9} xs={12}>
            <h1 className="display-3 hello" align="center">
              HELLO!<code> I'm Koda Katsuro</code>
            </h1>
            {/* <h2 className="lead" align="center">
              I
              <span
                class="txt-rotate"
                data-period="2000"
                data-rotate='[ " am a Full-Stack & Blockchain Developer.", " can work with NLP.", " love designing.", " am working on Problem Solving.", " am a learner for life!" ]'
              ></span>
            </h2> */}
            <h2 className="lead" align="center">
              I'm a Full-stack & Blockchain Developer.
            </h2>
            <h5 className="lead-sub" align="center">
              I have good sensitive in Web Design.
            </h5>
            <h5 align="center">
              私の見方では、虹が欲しければ、雨を我慢しなければなりません。
            </h5>
          </Col>
        </Row>
        <Row>
          <Container align="center">
            <Col lg={12} xs={12}>
              <img
                src={darkMode ? helloDark : helloLight}
                alt="hello"
                className="hello-img"
              />
            </Col>
          </Container>
        </Row>
      </AttentionSeeker>
      <br></br>
      <hr></hr>
    </div>
  );
};

export default Home;
