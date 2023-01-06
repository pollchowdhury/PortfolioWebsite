import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #000;
  display: flex;
  border: 1px solid #000000;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 142px;
  z-index: 10;
  font-family: "Poppins", sans-serif;
`;

export const NavLink = styled(Link)`
  background: black;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0px;
  position: static;
  width: 94px;
  height: 16px;
  left: 298px;
  top: 8px;
  height: 100%;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  position: static;
  width: 392px;
  height: 32px;
  left: 906px;
  top: 18px;
  font-family: "DM Sans", sans-serif;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
