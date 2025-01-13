import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I’m  <strong className="blue">Thanh Tuyen Nguyen</strong>  (also known as Gemma Nguyen) from Vietnam, currently living in Newcastle, NSW, Australia. I am a software developer with a passion for creating innovative solutions that leave a positive impact.
            <br />
            I recently completed my <strong className="blue">Master of Information Technology</strong> Master of Information Technology at the <strong className="blue">University of Newcastle</strong> , where I was honored to be among the <strong className="blue">top 3 students</strong> achieving <strong className="blue">Distinction</strong> in the 2024 MIT program. 
            <br />
            My academic and professional journey has equipped me with strong skills in front-end development, application design, and problem-solving in diverse software environments.
            <br />
            <strong className="blue">Beyond Coding</strong>

            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  <strong className="blue">Learning New Technologies:</strong> to stay ahead in this ever-evolving field.
            </li>

            <li className="about-activity">
              <ImPointRight /> <strong className="blue">Learning New Languages:</strong> to connect with people from different cultures and broaden my perspective.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Gemma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

