import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import seeproject from "../../Assets/Projects/seeproject.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import jfehaihan from "../../Assets/Projects/jfehaihan.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "Blue" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jfehaihan}
              isBlog={false}
              title="Knowledge Bridge: Advancing Engineering Education Through Vietnam-Japan Collaboration"
              description="In collaboration with HAI HAN Intellectual Property and JFE Steel Corporation (Japan), this project translated technical training materials on advanced steel pipe pile construction for Vietnamese students. Conducted in 2016–2017, it supported Japan’s ODA initiatives, focusing on seismic design, fatigue analysis, and Hanoi Metro Line 2, fostering Vietnam-Japan educational collaboration."
              demoLink="http://localhost:3000/project/project5" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seeproject}
              isBlog={false}
              title="Advanced Infrastructure Reinforcement and Seismic Protection: Vietnam-Japan Collaboration on Innovative Engineering Solutions"
              description="TCollaborating with Vantin Translation and SE Corporation (Japan), this project translated advanced technical materials on seismic protection, reinforced concrete, and innovative anchoring technologies for infrastructure safety and development in Vietnam."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="http://localhost:3000/project/project6"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
