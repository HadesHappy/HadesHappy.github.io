import { useState, React } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import botb from "../media/BOTB.png";
import web3 from "../media/WEB3.png";

import nft from "../media/NFT.png";
import she from "../media/SHE.png";
import nja from "../media/NJA.png";
import blc from "../media/BLC.png";
import sma from "../media/SMA.png";
import dex from "../media/DEX.png";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

const CryptoProjects = ({ darkMode }) => {
  const [show, setShow] = useState(false);

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <div id="padding" style={{ padding: "35px" }}></div>
      <br></br>
      <Fade>
        <Container>
          <br></br>
          <h2 className="lead" align="center">
            <b>- Crypto Projects -</b>
          </h2>
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
                            src={botb}
                            style={{ width: "270", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              eCommerce Website
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Led the development of eCommerce Website and
                                oversaw its deployment and integration with
                                BotB' subsidiary domains.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️Helped the company to migrate from PHP to
                            MEAN-Stack. It resulted in increased code quality,
                            excellent design and increased development speed.
                            <br />
                            <br />
                            🖋️Helped to test and integrate best programming
                            practices like TDD, continuous integration, and code
                            review
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://Botb.com/"
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
                            src={blc}
                            style={{ width: "270", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              Blockchain Platform
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Built from scratch marketplace in Next.js in
                                four months.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️ Design and build patterns of chains and mainly
                            developed cross-chain by Web3.js & Rust.
                            <br />
                            <br />
                            🖋️ Developed an analytics engine for the marketing
                            team to help them understand themarketing ROI.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://trustpad.io/"
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
                            src={she}
                            style={{ width: "270", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              NFT Minting Site
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                My own NTF Minting site built by smart contract.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️ This is one of the mint sites I developed. I
                            developed this site by myself. My role was web
                            designer/builder, smart contract developer. It took
                            me 6 weeks to complete this alone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://www.coolsheepnft.com/"
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
                            src={web3}
                            style={{ width: "270", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              Web3 Crypto App
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                This project demonstrates a basic Hardhat use
                                case.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️ It comes with a sample contract, a test for that
                            contract, a sample script that deploys that
                            contract, and an example of a task implementation,
                            which simply lists the available accounts.
                            <br />
                            <br />
                            Tech Stack - React, Solidity, Blockchain, Ethers,
                            Hardhat
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://web3cryptoapp.vercel.app/"
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
                      href="https://github.com/KodaKDominus/web3_crypto"
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
                            src={nft}
                            style={{ width: "270", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">NFT cars</Card.Title>
                            <Card.Text>
                              <p align="center">
                                NFT marketplace by Solidity, Web3.js and
                                Next.js.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️ Worked on various types of websites using
                            React.js, Angular.js, Vue.js, Node.js, Express.js,
                            Typescript, Next.js and MongoDB.
                            <br />
                            🖋️ Carefully reviewed 20+ customer satisfaction
                            reports on a daily basis to resolve and acknowledge
                            areas of opportunity among sales staff.
                            <br /> 🖋️ Debugged problems with slow loading and
                            greatly increased the e¨ciency of the client's
                            requests.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://nftcars.me/"
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
                            src={nja}
                            style={{ width: "270", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              Ninja Champions
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Ninja Champions are ready for NFT and metaverse.
                                All Ninjas have unique traits and leveled
                                ranking.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️ Worked as a blockchain developer.
                            <br />
                            🖋️ Supported front-end part.
                            <br />
                            🖋️ Implemented generating 10K images randomly with
                            given some artassets using blender and python.
                            <br />
                            🖋️ Integrated with OpenSea using IPFS, All the
                            metadata wasuploaded to IPFS.
                            <br />
                            🖋️ Added presale, public sale and reveal functions
                            to smart contractswritten using solidity
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://ninjachampions.com/"
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
                            src={sma}
                            style={{ width: "270", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">Smaugs</Card.Title>
                            <Card.Text>
                              <p align="center">
                                Digital marketplace for crypto collectibles and
                                non-fungible tokens. Buy, sell, and discover
                                exclusive digital assets.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️ Create your unique NFT very easy Create your own
                            NFT token in a minute. Smaugs Marketplace is a
                            complete custom DeFi, governance, and NFT ecosystem
                            + marketplace.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://nft.smaugs.com/"
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
                            src={dex}
                            style={{ width: "270", marginBottom: "20px" }}
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              CropperFinance
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Invest in early stage projects, trade, earn, and
                                win crypto.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            🖋️ Decentralized Ecosystem that Empowers Projects &
                            Maximizes Yield to move Defi forward on Solana.
                            Swap, Yield Farming, Staking, IDO Launchpad & more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://cropper.finance/"
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

export default CryptoProjects;
