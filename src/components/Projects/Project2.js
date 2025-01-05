import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Project2() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Project: <strong className="blue">Streamlined Technical Skill Assessments: Precision Testing for Machining and Carpentry</strong>
        </h1>
        <p style={{ color: "blue" }}>
          A comprehensive translation and standardization initiative supporting precise and safe skill assessment practices in machining and carpentry.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6}>
            <img
              src={require("../../Assets/Projects/wood.jpg")}
              alt="wood"
              className="img-fluid"
            />
          </Col>
          <Col md={6} className="project-details">
            <h2>Overview</h2>
            <p style={{ textAlign: "justify" }}>
              This project, in collaboration with Vantin Translation Company (Vietnam), focuses on translating and refining skill assessment guidelines for machining and carpentry professionals. It ensures accuracy, safety, and consistency in testing environments while promoting global standards in technical education and certification.
            </p>
            <h2>Key Features</h2>
            <ul>
              <li><strong>Accurate Translations:</strong> Comprehensive translation of technical skill assessment materials for machining and carpentry.</li>
              <li><strong>Standardized Guidelines:</strong> Alignment of testing procedures with global best practices.</li>
              <li><strong>Safety Protocols:</strong> Emphasis on safety during practical assessments to protect participants.</li>
              <li><strong>Enhanced Usability:</strong> Simplified instructions to aid understanding and compliance during assessments.</li>
            </ul>
          </Col>
        </Row>

        <h1 className="content-heading">
          Topics in <strong className="blue">Machining and Carpentry Skill Assessments</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={10}>
            <ol>
              <li><strong>Machining Standards:</strong> Precision testing protocols for material shaping and cutting.</li>
              <li><strong>Carpentry Guidelines:</strong> Structured methods for safe and effective wood construction assessments.</li>
              <li><strong>Equipment and Tools:</strong> Approved tools and equipment specifications for skill assessments.</li>
              <li><strong>Safety Measures:</strong> Detailed safety requirements to mitigate risks during testing.</li>
              <li><strong>Evaluation Criteria:</strong> Standardized scoring methods for objective skill evaluation.</li>
              <li><strong>Environment Setup:</strong> Guidelines for preparing a suitable testing environment.</li>
              <li><strong>Compliance and Certification:</strong> Ensuring adherence to industry certification standards.</li>
            </ol>
          </Col>
        </Row>

        <h2>Links</h2>
        <ul>
          <li>
            <a href="https://drive.google.com/drive/folders/1V2uQxxjxMT-yZThBfaG0riDPc7CbKxrh?usp=sharing">
              Project Documentation
            </a>
          </li>
        </ul>
      </Container>
    </Container>
  );
}

export default Project2;
