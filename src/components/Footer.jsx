import React from "react";
import { Link, NavContainer, ParentContainer, Title } from "../styles";
import styled from "styled-components";

const Footer = () => (
  <div>
    <CTAContainer>
      <CTA>
        <Heading>
          Interested in collaborating? Get in touch if you have an idea you’d
          like to work on together!
        </Heading>
      </CTA>
      <CTA
        style={{
          backgroundColor: "#C9A0FC",
        }}
      >
        <Heading>
          ... or not, whatever suits you... didn’t want to work with you anyway
        </Heading>
      </CTA>
      <CTA
        style={{
          backgroundColor: "#FF835C",
        }}
      >
        <Heading>
          ... only joking,{" "}
          <Span href="mailto:poppy.felicity@outlook.com" target="_blank">
            {" "}
            please do contact me.{" "}
          </Span>{" "}
        </Heading>
      </CTA>
    </CTAContainer>

    <Container>
      <NavContainer>
        <FooterLink href="mailto:poppy.felicity@outlook.com" target="_blank">
          poppy.felicity@outlook.com
        </FooterLink>
        <FooterLink
          href="https://www.instagram.com/poppy.felicity/"
          target="_blank"
        >
          Instagram
        </FooterLink>
        <FooterLink
          href="https://www.instagram.com/poppy.felicity/"
          target="_blank"
        >
          Design and Development by Thomas Bugg
        </FooterLink>
        {/* <FooterLink>+44 (0) 7894657757</FooterLink> */}
      </NavContainer>

      <FooterLink href="/">
        <Logo>
          Poppy
          <br />
          Clifford <br />
          Productions
        </Logo>
      </FooterLink>
    </Container>
  </div>
);

export default Footer;

export const Container = styled(ParentContainer)`
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: #ff82be;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const Span = styled(Link)`
  font-size: 32px;
  display: inline-block;
  color: black;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 414px) {
    font-size: 18px;
  }
`;

export const CTA = styled(ParentContainer)`
  padding: 24px;
  margin: 0px;
  background-color: #426bff;
  border-radius: 20px;
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    border-radius: 100px;
  }

  @media (max-width: 768px) {
    padding: 16px;
    /* border-radius: 12px; */
  }
`;

export const CTAContainer = styled(ParentContainer)`
  padding: 40px 0px 20px 0px;
  gap: 16px;
`;

export const Heading = styled(Title)`
  font-weight: 400;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 414px) {
    font-size: 18px;
  }
`;

export const FooterLink = styled(Link)`
  color: #b0ffb0;

  &:hover {
    color: #ff82be;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 414px) {
    font-size: 12px;
  }
`;

export const Logo = styled(FooterLink)`
  font-family: Arial, sans-serif;
  font-size: 15vw;
  letter-spacing: -2px;
  font-weight: 400;
  line-height: 100%;
  text-align: center;

  @media (min-width: 1728px) {
    font-size: 10vw;
  }
`;
