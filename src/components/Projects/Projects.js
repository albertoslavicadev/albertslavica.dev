import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pOne from "../../Assets/Projects/1.jpg";
import pTwo from "../../Assets/Projects/2.jpg";
import pThree from "../../Assets/Projects/7.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
          <br/>
          This are only personal project.
          <br/>
          I like to keep all my works in private organizations inside Github to keep the place tidy.
          <br/>
          If you are interested to review the code please contact me
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pOne}
              isBlog={false}
              title="Kaiho"
              description="A mobile app built with React Native that utilizes ML/AI to help people quit smoking. The app provides insights and assistance for smokers looking to break the habit."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pTwo}
              isBlog={false}
              title="Atlen"
              description="A crypto freelancing marketplace where professionals can offer their services and get paid in cryptocurrency. It aims to simplify the freelancing process using the power of blockchain."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pThree}
              isBlog={false}
              title="Atlen Escrow"
              description="An innovative platform that uses smart contracts to enable escrow services via a factory model. This ensures secure transactions between parties, making the freelancing marketplace more trustworthy."
              ghLink=""            
            />
          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}

export default Projects;
