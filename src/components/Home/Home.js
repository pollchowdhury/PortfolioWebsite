import React from "react";
import Footer from "../Footer/Footer";
import {
  HeroSection,
  Hero,
  HeroText,
  HeroBtn,
  LeftButton,
  Aboutsection,
  AboutCard,
  Text,
  Image,
  AboutButton,
  ProjectSection,
  ProjectImagecontainer,
  ProjectImage1,
  ProjectImage2,
  ProjectImage3,
  ProjectImage4,
  ProjectsButton,
} from "./HomeStyles";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import Projects from "../Projects/Projects";
import About from "../AboutMe/AboutMe";

const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      <HeroSection>
        <Hero>
          <HeroText>
            <h1>
              I am <span style={{ color: "#5C62EC" }}>Poll Chowhdury</span>
            </h1>
            <h1>CS Student</h1>
            <h5>This is my Protfolio Website</h5>
          </HeroText>
          <HeroBtn>
            <LeftButton
              onClick={() => {
                navigate("/Projects");
              }}
            >
              Projects
            </LeftButton>
          </HeroBtn>
        </Hero>
      </HeroSection>
      <Aboutsection>
        <AboutCard>
          <Image />
          <Text>
            <h1>About Me</h1>
            <br></br>
            <p>
              Hi, I am poll chowdhury and I am currently a junior pursuing a
              Bachelor's degree in Computer Science at Wayne state university.
              As a computer science student, I strongly believe in learning by
              doing. I intend to follow my belief by working on personal
              projects that help me learn new technologies and drive me to think
              differently.
            </p>
            <br></br>
            <p>
              I have considerable programming experience in C++ and Java. Apart
              from that, I have experience in Object-oriented programming, Data
              Structures, algorithm design, and also some frontend development
              knowledge.
            </p>
            <br></br>
            <AboutButton
              onClick={() => {
                navigate("/AboutMe");
              }}
            >
              More About Me <BsArrowRight style={{ marginLeft: "10px" }} />
            </AboutButton>
          </Text>
        </AboutCard>
      </Aboutsection>
      <ProjectSection>
        <h1>Projects</h1>
        <ProjectImagecontainer>
          <h3>Web chat application</h3>
          <ProjectImage1 />
          <h3>Coffee shop website</h3>
          <ProjectImage2 />
          <h3>React Protfolio Website</h3>
          <ProjectImage3 />
          <h3>Hospital Billing system</h3>
          <ProjectImage4 />
          <ProjectsButton
            onClick={() => {
              navigate("/Projects");
            }}
          >
            View More <BsArrowRight style={{ marginLeft: "10px" }} />
          </ProjectsButton>{" "}
        </ProjectImagecontainer>
      </ProjectSection>
    </>
  );
};

export default Home;
