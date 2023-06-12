import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span sclassName="purple">Farzana Hameed</span>
            &nbsp;from <span className="purple"> Ontario, Canada.</span>
            <br /> Results-driven Software Engineer with over 5 years of experience in Software Development and IT project management, seeking a challenging role where I can utilize my strong technical skills, along with my expertise in leading and delivering successful IT projects.
            <br />
            Highly skilled in developing responsive and user-friendly frontend applications using HTML, CSS, and JavaScript frameworks like AngularJS and ReactJS. Experienced in seamlessly integrating frontend interfaces with backend APIs, collaborating with cross-functional teams to deliver successful IT projects on time and within budget. Strong expertise in optimizing code quality, conducting thorough testing, and resolving bugs to ensure high-quality software delivery. Well-versed in version control systems and project management methodologies. Recently completed a postgraduate degree in Cloud Data Management, demonstrating my commitment to staying up-to-date with the latest technologies and trends. Committed to driving innovation, streamlining processes, and achieving project success. Excited to leverage my extensive software development background to effectively manage projects and ensure their successful completion.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Blending the art of coding with the science of project management!"{" "}
          </p>
          <footer className="blockquote-footer">Farzana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
