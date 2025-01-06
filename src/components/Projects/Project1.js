import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";

function Project1() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Project: <strong className="blue">Streamlined Operational Safety and Precision Guidelines for Die-Casting and Press Machinery</strong>
        </h1>
        <p style={{ color: "blue" }}>
          A comprehensive guide outlining operational procedures, safety principles, and management protocols for enhanced efficiency and safety.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6}>
            <img
              src={require("../../Assets/Projects/machine.jpeg")}
              alt="machine"
              className="img-fluid"
            />
          </Col>
          <Col md={6} className="project-details">
            <h2>Overview</h2>
            <p style={{ textAlign: "justify" }}>
              This project emphasizes the development of streamlined operational and safety protocols for die-casting and press machinery. Key objectives include minimizing operational risks, enhancing precision, and maintaining quality standards through detailed guidelines.
            </p>
            <h2>Key Features</h2>
            <ul>
              <li><strong>Operational Protocols:</strong> Clear and concise steps for machine operation and maintenance.</li>
              <li><strong>Safety Principles:</strong> Focus on operator safety and equipment integrity.</li>
              <li><strong>Quality Assurance:</strong> Enhanced protocols to ensure consistent production quality.</li>
              <li><strong>Maintenance Guidelines:</strong> Proactive maintenance steps to minimize downtime and increase efficiency.</li>
            </ul>
          </Col>
        </Row>

        <h1 className="content-heading">
          Topics in <strong className="blue">Safety and Precision Guidelines</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={10}>
            <ol>
              <li><strong>Die-Casting Machine Safety:</strong> Essential safety protocols for die-casting operations.</li>
              <li><strong>Operational Workflow:</strong> Step-by-step procedures for efficient operations.</li>
              <li><strong>Error Resolution:</strong> Guidelines for diagnosing and fixing common issues.</li>
              <li><strong>Preventative Maintenance:</strong> Scheduled maintenance for consistent performance.</li>
              <li><strong>Tool Calibration:</strong> Ensuring precision through regular calibration of measuring tools.</li>
              <li><strong>Quality Inspections:</strong> Comprehensive methods for ensuring product quality.</li>
              <li><strong>Training Modules:</strong> Educational materials for operators and supervisors.</li>
            </ol>
          </Col>
        </Row>

        <h2>Links</h2>
        <ul>
          <li>
            <a href="https://drive.google.com/drive/folders/1jXZfFH4pJ6TyXXfxOXQqTdbHok0BU4RD?usp=sharing">
              Project Documentation
            </a>
          </li>
        </ul>
      </Container>
    </Container>
  );
}

export default Project1;
