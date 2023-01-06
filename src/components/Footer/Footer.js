import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

import {
  Content,
  Topcontent,
  Bottomcontent,
  PageLinks,
  NavLink,
  FooterContainer,
  ContactLink,
  Social,
} from "./FooterStyles";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Home from "../Home/Home";
import About from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Topcontent>
          <NavLink to="/Home">
            <h1>Logo</h1>
          </NavLink>
          <PageLinks>
            <h3 style={{ color: "#85BFD1" }}>Links</h3>
            <NavLink to="/Home" style={{ paddingBottom: "5px" }}>
              Home
            </NavLink>
            <NavLink to="/AboutMe" style={{ paddingBottom: "5px" }}>
              About Me
            </NavLink>
            <NavLink to="/Projects">Projects</NavLink>
          </PageLinks>
          <ContactLink>
            <h3 style={{ paddingBottom: "5px", color: "#85BFD1" }}>
              Contact me
            </h3>
            <a
              href="mailto:pollchowdhury7@gmail.com"
              style={{
                paddingBottom: "5px",
                textDecoration: "none",
                color: "#ffffff",
              }}
            >
              Email
            </a>
            <p>Phone: 313-455-4124</p>
          </ContactLink>

          <Social>
            <h3 style={{ color: "#85BFD1", paddingBottom: "20px" }}> Social</h3>
            <div>
              <a
                href="https://www.linkedin.com/in/pollchowdhury"
                style={{ paddingRight: "20px", color: "#ffffff" }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/pollchowdhury"
                style={{ color: "#ffffff" }}
              >
                <FaGithub />
              </a>
            </div>
          </Social>
        </Topcontent>
        <Bottomcontent>
          <Content>
            <p>© 2023 Poll Chowdhury </p>
          </Content>
        </Bottomcontent>
      </FooterContainer>
    </>
  );
};

export default Footer;
