import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";

function Project4() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Project: <strong className="blue">K-PAPS System: Enhanced Operational and Maintenance Protocols for Metal Mold Operations</strong>
        </h1>
        <p style={{ color: "blue" }}>
          A detailed view of the K-PAPS system focusing on advanced operational protocols and maintenance optimization.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6}>
            <img
              src={require("../../Assets/Projects/komatsu.png")}
              alt="komatsu"
              className="img-fluid"
            />
          </Col>
          <Col md={6} className="project-details">
            <h2>Overview</h2>
            <p style={{ textAlign: "justify" }}>
              The Komatsu K-PAPS system is an advanced solution for metal mold operations, featuring enhanced usability and precision. This project emphasizes operational efficiency through parameter display, data storage, error diagnostics, and streamlined maintenance processes.
            </p>
            <h2>Key Features</h2>
            <ul>
              <li><strong>Parameter Display:</strong> Real-time monitoring of critical operational metrics.</li>
              <li><strong>Data Storage:</strong> Secure and efficient storage of operational data for future analysis.</li>
              <li><strong>Error Diagnostics:</strong> Advanced diagnostics for prompt issue resolution.</li>
              <li><strong>Maintenance Optimization:</strong> Simplified processes for reduced downtime.</li>
            </ul>
          </Col>
        </Row>

        <h1 className="content-heading">
          Topics in <strong className="blue">K-PAPS System</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={10}>
            <ol>
              <li><strong>Metal Mold Drying Interface:</strong> Efficient drying processes with real-time control.</li>
              <li><strong>Data Logging and Analysis:</strong> Comprehensive data logging for enhanced operational insights.</li>
              <li><strong>Error Handling Protocols:</strong> Streamlined diagnostics to minimize downtime.</li>
              <li><strong>Maintenance Scheduling:</strong> Automated scheduling for routine maintenance tasks.</li>
              <li><strong>Customizable Dashboards:</strong> Tailored dashboards for different operational roles.</li>
              <li><strong>Integration with Advanced Equipment:</strong> Seamless compatibility with modern machinery.</li>
              <li><strong>Enhanced Safety Mechanisms:</strong> Advanced features for operational safety.</li>
            </ol>
          </Col>
        </Row>

        <h2>Links</h2>
        <ul>
          <li>
            <a href="https://drive.google.com/drive/folders/1vJMo8cUOC0KEKF0s6F2DUn4Iu4b27jpg?usp=sharing">
              Project Documentation
            </a>
          </li>
        </ul>
      </Container>
    </Container>
  );
}

export default Project4;
