import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="DarkTurquoise"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello, and welcome to my personal website!
              
              <br />
              <br />My name is <strong className="blue">Thanh Tuyen Nguyen</strong>, and I am an aspiring researcher with a strong foundation in Information Technology and a deep passion for innovation and knowledge discovery.
              <br />
              <br />
              I recently graduated with a <strong className="blue">Master of Information Technology</strong> with <strong className="blue">Distinction</strong> from the <strong className="blue">University of Newcastle</strong>, where I developed expertise in areas such as application development, cloud computing, and sustainable technologies. Throughout my academic journey, I have engaged in impactful projects, including <strong className="blue">EcoSmart (myUni Hackathon), Aurora Diary Apllication (INFT6009), Wizer Web-Application (INFT6900)</strong> , which have fueled my interest in creating solutions that address real-world challenges.
                            <br />
              <br />
              My current focus lies in advancing research in <strong className="blue">Edge Intelligence</strong> and <strong className="blue">Iot</strong> in <strong className="blue">Software Systems</strong>, where computational tasks are shifted closer to the <strong className="blue">data source</strong>, reducing reliance on centralized <strong className="blue">cloud services</strong>. By combining <strong className="blue">machine learning models</strong>, distributed systems, and <strong className="blue">energy-efficient algorithms</strong>, I aim to develop <strong className="blue">applications</strong> that are optimized for resource-constrained <strong className="blue">IoT devices</strong> IoT devices while maintaining performance and functionality.
              As I prepare to embark on a <strong className="blue">PhD program</strong>, I am eager to contribute to <strong className="blue">cutting-edge research</strong> that bridges theory and practice.
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gemnotgraphene"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=61568999193627"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/thanhtuyencs163/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gemnotgraphene/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
