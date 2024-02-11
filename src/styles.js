import styled, { createGlobalStyle } from "styled-components";
import ApfelGrotezkRegular from "../src/assets/fonts/ApfelGrotezk-Regular.otf";
import ApfelGrotezkFett from "../src/assets/fonts/ApfelGrotezk-Fett.otf";
import SneakyTimes from "../src/assets/fonts/Sneaky-Times.otf";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Apfel Grotezk Regular';
  src: url(${ApfelGrotezkRegular});
}

@font-face {
  font-family: 'Apfel Grotezk Fett';
  src: url(${ApfelGrotezkFett});
}

@font-face {
  font-family: 'Sneaky Times';
  src: url(${SneakyTimes});
}

* {
  /* border: .1px;
  border-style: solid;
  border-color: red; */
}

body {
  font-family: 'Arial';
    font-style: normal;
    margin: 0;
    padding: 0;
    letter-spacing: -0.5px;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background-color: #080B14;
}
`;

export const Link = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const PrimaryButton = styled(Link)`
  padding: 8px;
  background-color: black;
  border: none;
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    transform: rotate(10deg);
  }
`;

export const Body = styled.p`
  font-family: "Times New Roman";
  letter-spacing: -0.5px;
  font-size: 17px;
  color: white;
  padding: 0px;
  margin: 0px;
  line-height: 1.3;
  white-space: pre-wrap;
`;

export const Caption = styled.p`
  font-family: "Arial";
  letter-spacing: -0.5px;
  font-size: 14px;
  color: white;
  padding: 0px;
  margin: 0px;
  line-height: 1.3;
  white-space: pre-wrap;
`;

export const Heading = styled.h1`
  font-family: "Times New Roman";
  font-size: 20px;
  color: white;
  padding: 0px;
  margin: 0px;
  line-height: 1.3;
  letter-spacing: -0.7px;
  white-space: pre-wrap;
  font-weight: 300;
`;

export const Title = styled.h2`
  font-family: "Arial";
  font-weight: 600;
  font-size: 24px;
  padding: 0px;
  margin: 0px;
`;

export const Subheading = styled.h3`
  font-family: "Arial";
  font-weight: 600;
  font-size: 20px;
  padding: 0px;
  margin: 0px;
  color: white;
`;

export const GridContainer = styled.div`
  display: grid;
  place-items: start;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  /* margin: 0px 24px; */
  margin: 0px auto 0px auto;
  max-width: 1729px;

  @media (max-width: 1729px) {
    margin: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 16px;
    grid-column-gap: 0px;
    margin: 0px 16px;
  }
`;

export const ParentContainer = styled.div`
  text-align: left;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  flex-direction: column;
  position: relative;
  margin: 24px auto 24px auto;
  max-width: 1729px;

  @media (max-width: 1729px) {
    margin: 24px;
  }

  @media (max-width: 768px) {
    margin: 16px;
  }
`;

export const ImageContainer = styled.div`
  /* width: 100%; */
  overflow: hidden;
  border-radius: 8px;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  margin: auto 0px auto 0px;
`;

export const MyImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  /* position: relative; */
`;
