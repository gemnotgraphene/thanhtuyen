import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import komatsu from "../../Assets/Projects/komatsu.png";
import seeproject from "../../Assets/Projects/seeproject.png";
import ecosmart from "../../Assets/Projects/ecosmart.jpg";
import wizer2 from "../../Assets/Projects/wizer2.png";
import jfehaihan from "../../Assets/Projects/jfehaihan.jpg";
import auroradiary from "../../Assets/Projects/auroradiary.png";
import denso from "../../Assets/Projects/denso.jpeg";
import wood from "../../Assets/Projects/wood.jpg";
import machine from "../../Assets/Projects/machine.jpeg";

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
              imgPath={wizer2}
              isBlog={false}
              title="INFT6900_IT Project: WIZER_Education/Awareness Training Application"
              description="The Wizer application is a web-based platform for education and training through customizable modules. It supports students, module owners, and administrators with features like dynamic content delivery, testing, progress tracking, and feedback. Fully responsive, it ensures accessibility across devices, enabling flexible learning and awareness-raising in a secure environment."
              ghLink="https://github.com/gemnotgraphene/wizerdemo.git"
              demoLink="https://wizerdemo1.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auroradiary}
              isBlog={false}
              title="Aurora Diary Application: INFT6009 Cloud Computing and Mobile Applications for the Enterprise"
              description="Aurora Diary is an application designed to help users capture and preserve invaluable memories and great information. Aurora Diary allows users to quickly jot down notes and save essential details, write complete diary entries if desired, and attach photos for a more personalized experience. It helps one to capture life’s events easily. Aurora Diary will be friendly for recording, writing down critical information, or reflecting. With the above features, Aurora Diary becomes a handy tool for anyone who intends to preserve their life journey in some meaningful, organized way."
              ghLink="https://github.com/gemnotgraphene/AuroraDiary11"
              demoLink="https://youtu.be/4Iu-UaO39EE?si=BlJmh9rt4tKyMj4T"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecosmart}
              isBlog={false}
              title="Ecosmart_myUniHackathon"
              description="EcoSmart is an app designed to promote sustainable habits among students by rewarding eco-friendly actions like recycling and conserving energy. It raises environmental awareness, tracks individual and campus-wide impacts, and supports university sustainability goals. Through gamification and real-time insights, EcoSmart fosters positive change and encourages participation in green initiatives."
              ghLink="https://github.com/gemnotgraphene/Ecosmart_myUniHackathon"
              demoLink="https://youtu.be/4Iu-UaO39EE?si=BlJmh9rt4tKyMj4T"              
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jfehaihan}
              isBlog={false}
              title="Knowledge Bridge: Advancing Engineering Education Through Vietnam-Japan Collaboration"
              description="In collaboration with HAI HAN Intellectual Property and JFE Steel Corporation (Japan), this project translated technical training materials on advanced steel pipe pile construction for Vietnamese students. Conducted in 2016–2017, it supported Japan’s ODA initiatives, focusing on seismic design, fatigue analysis, and Hanoi Metro Line 2, fostering Vietnam-Japan educational collaboration."
              demoLink="https://thanhtuyen.vercel.app/project/project5" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seeproject}
              isBlog={false}
              title="Advanced Infrastructure Reinforcement and Seismic Protection: Vietnam-Japan Collaboration on Innovative Engineering Solutions"
              description="TCollaborating with Vantin Translation and SE Corporation (Japan), this project translated advanced technical materials on seismic protection, reinforced concrete, and innovative anchoring technologies for infrastructure safety and development in Vietnam."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://thanhtuyen.vercel.app/project/project6"  
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={komatsu}
              isBlog={false}
              title="K-PAPS System: Enhanced Operational and Maintenance Protocols for Metal Mold Operations"
              description="This project focuses on optimizing the Komatsu K-PAPS system for metal mold operations. It encompasses parameter display, data storage, and error diagnostics, emphasizing streamlined maintenance and enhanced usability. The initiative ensures improved precision and operational efficiency, advancing manufacturing processes while reducing downtime."
              
              demoLink="https://thanhtuyen.vercel.app/project/project4"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={denso}
              isBlog={false}
              title="Enhancing Automotive Safety and Efficiency with Advanced DENSO Technologies"
              description="This project, in collaboration with SNU Translation Company, explores DENSO's innovative automotive technologies. It focuses on fuel-efficient systems, safety features like AEB, adaptive HMI, and emission-reducing catalysts. The project aims to enhance environmental sustainability and road safety through intelligent design, aligning with future mobility trends."
              
              demoLink="https://thanhtuyen.vercel.app/project/project3"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wood}
              isBlog={false}
              title="Streamlined Technical Skill Assessments: Precision Testing for Machining and Carpentry"
              description="This project, in collaboration with Vantin Translation Company (Vietnam), delivers translated guidelines for skill assessments in machining and carpentry. It ensures accuracy in instructions, adherence to safety protocols, and standardized testing environments. The translated documents streamline evaluations, supporting the training and certification of professionals in technical industries."
              
              demoLink="https://thanhtuyen.vercel.app/project/project2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={machine}
              isBlog={false}
              title="Streamlined Operational Safety and Precision Guidelines for Die-Casting and Press Machinery"
              description="A comprehensive guide outlining operational procedures, safety principles, and management protocols for die-casting and press machinery. It emphasizes equipment safety, process optimization, and quality assurance, ensuring effective machinery operation, production consistency, and compliance with industrial standards. The guide also includes detailed workflows and preventative measures."
              
              demoLink="https://thanhtuyen.vercel.app/project/project1"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
