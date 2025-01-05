import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function project3() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Project: <strong className="blue">Enhancing Automotive Safety and Efficiency with Advanced DENSO Technologies</strong>
        </h1>
        <p style={{ color: "blue" }}>
          A comprehensive exploration of DENSO's automotive solutions focusing on safety, sustainability, and advanced vehicle technologies.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6}>
            <img
              src={require("../../Assets/Projects/denso.jpeg")}
              alt="denso"
              className="img-fluid"
            />
          </Col>
          <Col md={6} className="project-details">
            <h2>Overview</h2>
            <p style={{ textAlign: "justify" }}>
              This project delves into DENSO's cutting-edge technologies, offering solutions for improved road safety, reduced emissions, and optimized vehicle performance. Through the integration of advanced sensors, safety mechanisms, and eco-friendly systems, it aims to align with future mobility and environmental goals.
            </p>
            <h2>Key Features</h2>
            <ul>
              <li><strong>Advanced Safety Mechanisms:</strong> Integration of features like AEB and adaptive HMI to enhance driver safety.</li>
              <li><strong>Eco-Friendly Technologies:</strong> Emission-reducing catalysts and optimized fuel systems to minimize environmental impact.</li>
              <li><strong>Real-Time Diagnostics:</strong> Sophisticated systems for error detection and prompt resolution.</li>
              <li><strong>Enhanced Usability:</strong> User-centric designs for intuitive vehicle operation and maintenance.</li>
            </ul>
          </Col>
        </Row>

        <h1 className="content-heading">
          Topics in <strong className="blue">Advanced DENSO Technologies</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={10}>
            <ol>
              <li><strong>Emission Control Systems:</strong> Advanced catalysts for reducing harmful emissions.</li>
              <li><strong>Vehicle-to-Everything (V2X) Communication:</strong> Seamless connectivity for safer and smarter transportation.</li>
              <li><strong>Driver Assistance Systems:</strong> Features like adaptive cruise control and lane-keeping assistance.</li>
              <li><strong>Autonomous Driving Protocols:</strong> Laying the foundation for safer autonomous mobility.</li>
              <li><strong>Energy Optimization:</strong> Efficient energy management systems for fuel-saving and hybrid vehicles.</li>
              <li><strong>Human-Machine Interface (HMI):</strong> Advanced interfaces for improved driver interaction and control.</li>
              <li><strong>Sustainability Initiatives:</strong> Technologies focused on reducing the carbon footprint.</li>
            </ol>
          </Col>
        </Row>

        <h2>Links</h2>
        <ul>
          <li>
            <a href="https://drive.google.com/drive/folders/1k7IL1nH7oJVInL1flE5AvmduJ5aCUx6H?usp=sharing">
              Project Documentation
            </a>
          </li>
        </ul>
      </Container>
    </Container>
  );
}

export default project3;
