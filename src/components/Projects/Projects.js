import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatApp from "../../Assets/Projects/chatApp.png";
import financeTracker from "../../Assets/Projects/financeTracker.png";
import taskManager from "../../Assets/Projects/taskManager.png";
import covid from "../../Assets/Projects/covid.png";
import weatherApp from "../../Assets/Projects/weatherApp.png";
import eCommerce from "../../Assets/Projects/eCommerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid tracker"
              description="Retrieve and display up-to-date COVID-19 data, including the number of cases, recoveries, and deaths, either globally or for specific countries and regions."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCommerce}
              isBlog={false}
              title="E-commerce Website"
              description=" Build an e-commerce website with features like product listing, shopping cart, secure payment integration, and user account management"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskManager}
              isBlog={false}
              title="Task Management System"
              description=" A task management system is a tool or software designed to help individuals or teams organize, track, and manage their tasks and projects efficiently. It provides a platform where tasks can be created, assigned, prioritized, and tracked throughout their lifecycle"
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Real-time Chat Application"
              description="Created a real-time chat application with features like instant messaging, file sharing, and user authentication"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="Weather Application"
              description="The weather application developed in React.js allows users to fetch and display current weather information for a specific location. It utilizes the OpenWeatherMap API to retrieve data such as temperature and weather description. Users can input a location and get real-time weather updates easy"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={financeTracker}
              isBlog={false}
              title="Personal Finance Tracker"
              description="Developed a personal finance tracker that allows users to manage their income, expenses, budgets, and track financial goals."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
