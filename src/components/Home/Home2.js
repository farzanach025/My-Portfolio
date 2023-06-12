import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm Farzana Hameed, a self-proclaimed "Front-End Magician" with a knack for conjuring up captivating user experiences. Armed with 5+ years of sorcery... uh, I mean, experience in front-end development and a bag of tricks in various technologies, I'm here to make your web dreams come true! 🤷‍♂️
              <br />
              <br />My journey into the tech realm began with a Bachelor's degree in Computer Science and Technology, followed by an enchanting Postgraduate program in Cloud Data Management at Conestoga College. 
              <i>
                <b className="purple"> There, I acquired the mystical knowledge of cloud technologies and data management strategies, turning me into a well-rounded sorceress... err, developer, ready to tackle the most complex quests. </b>
              </i>
              <br />
              <br />
              Throughout my magical career, I've specialized in the arcane arts of Java and Angular.js, weaving intricate spells... sorry,😬 writing clean and efficient code to create web applications that fulfill clients' wishes. &nbsp;
              <i>
                <b className="purple"> I thrive in enchanting collaborations, working closely with development teams to ensure the seamless implementation of projects. </b> As if that's not enough, I've even mastered the art of project management {" "}
                <b className="purple">
                as an IT Project Coordinator, bringing harmony and effective communication to all the realms... I mean, teams involved.
                </b>
              </i>
              <br />
              <br />
              But wait, there's more!🤷‍♀️<b>I possess a mystical connection to the latest tools and technologies. From my trusty wand... er, package management tools like npm and yarn, to my magical garments... oops, CSS preprocessors like Sass and Less, I wield these artifacts to optimize my development process and sprinkle a touch of awesomeness on every application. With my spellbinding knowledge of responsive design, I create websites that dance gracefully across devices and screen sizes, leaving users mesmerized.</b> and
              <i>
                <b className="purple">
                  {" "}
                  So, if you're ready to embark on an epic web adventure, join forces with me,
                </b>
              </i>
              &nbsp; like
              <i>
                <b> the Front-End Sorceress, and together we shall create a digital marvel that will leave your competitors spellbound! </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact me now and let the magic unfold!</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/farzanach025/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/farzana-hameed/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
