import React from "react";
import { PrimaryButton, NavContainer } from "../styles";
import styled from "styled-components";

import "./Hover.css";

const Nav = () => (
  <HeaderContainer>
    <NavContainer>
      <Logo href="/" />
    </NavContainer>

    <NavContainer>
      <a className="wave-hover" href="/">
        <span>P</span>
        <span>r</span>
        <span>o</span>
        <span>j</span>
        <span>e</span>
        <span>c</span>
        <span>t</span>
        <span>s</span>
      </a>

      <a className="wave-hover" href="/information">
        <span>I</span>
        <span>n</span>
        <span>f</span>
        <span>o</span>
      </a>

      <a className="wave-hover" href="/ongoing">
        <span>O</span>
        <span>n</span>
        <span>g</span>
        <span>o</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </a>
      <NavButton href="mailto:poppy.felicity@outlook.com" target="_blank">
        Let's chat!
      </NavButton>
    </NavContainer>
  </HeaderContainer>
);

export default Nav;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* width: 500px; */
  margin: 24px auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1000;
  max-width: 1729px;

  @media (max-width: 1729px) {
    padding: 24px;
    margin: 0px auto;
  }

  @media (max-width: 768px) {
    gap: 16px;
    padding: 16px;
    align-items: flex-start;
    margin: 0px;
  }
`;

export const NavButton = styled(PrimaryButton)`
  background-color: white;
  color: black;
`;

export const Logo = styled.a`
  font-family: Arial, sans-serif;
  font-size: 32px;
  letter-spacing: -1.1px;

  color: #b0ffb0;
  &:before {
    content: "Poppy Clifford Productions";
  }

  @media (max-width: 768px) {
    &:before {
      font-size: 14px;
      content: "PCP";
    }
  }
`;
