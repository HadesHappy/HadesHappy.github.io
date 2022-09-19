import { useState, React } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import Container from "react-bootstrap/esm/Container";

const SkillsDetail = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <div id="padding" style={{ padding: "35px" }}></div>
      <br />
      <Fade>
        <Container>
          <br></br>
          <h2 className="lead" align="center">
            <b>- My Services -</b>
          </h2>
          <br></br>
          <Zoom>
            <section
              id="services"
              className="services text-center section-padding"
            >
              <div className="container mb-80">
                <div className="row services-items">
                  <div className="col-lg-4">
                    <div className="item">
                      <span className="icon-tools"></span>
                      <h5>Fast Development</h5>
                      <p>
                        I will develop the product in high quality, timly maner<br />
                        高品質でタイムリーに製品を開発します
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 bord">
                    <div className="item">
                      <span className="icon-mobile"></span>
                      <h5>Responsive Design</h5>
                      <p>It will be responsive design for every devices<br />
                        あらゆるデバイスに対応するレスポンシブデザインになります</p>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="item">
                      <span className="icon-puzzle"></span>
                      <h5>API Integration</h5>
                      <p>
                        I will integrate with API from the backend in real time<br />
                        リアルタイムでバックエンドから API と統合します
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="item">
                      <span className="icon-layers"></span>
                      <h5>Clean Code</h5>
                      <p>
                        My code will be clean, maintainable, scalable and
                        structurable<br />
                        私のコードは、きれいで、保守可能で、スケーラブルで、構造化可能です
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 bord">
                    <div className="item">
                      <span className="icon-camera"></span>
                      <h5>Pixel Perfect</h5>
                      <p>I am really strong at pixel perfect with hawk eyes<br /> 
                        鷹の目でピクセルパーフェクトが本当に強い</p>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="item">
                      <span className="icon-strategy"></span>
                      <h5>Unlimited Support</h5>
                      <p>
                        I will support to scale && maintain the websites in further with my pleasure<br />
                        喜んでウェブサイトの拡張と維持をサポートします
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
