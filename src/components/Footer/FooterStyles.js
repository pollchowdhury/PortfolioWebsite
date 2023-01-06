import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 64px 142px 32px;
  background: #000000;
  width: 100%;
  height: 301px;
  left: 0px;
  top: 100%;
`;

export const Topcontent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  color: #ffffff;
  position: static;
  width: 835.46px;
  height: 108px;
  left: 142px;
  top: 64px;
  font-family: "DM Sans", sans-serif;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 40px 0px;
`;

export const PageLinks = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 100px;
  height: 108px;
  left: 241px;
  top: 0px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 130px;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  &.active {
    color: #15cdfc;
  }
`;
export const ContactLink = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 200px;
  height: 108px;
  left: 241px;
  top: 0px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 100px;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 139.83px;
  height: 78px;
  left: 695.63px;
  top: 0px;
  color: #85bfd1;
  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
  margin: 0px 129px;
`;

export const Bottomcontent = styled.div`
  font-family: "DM Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  color: #ffffff;
  position: static;
  width: 1156px;
  height: 33px;
  left: 142px;
  top: 236px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 20px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  width: 1156px;
  height: 16px;
  left: 0px;
  top: 17px;
`;
