import React from "react";
import styled from "styled-components";
import { Body, GridContainer } from "../styles";

// Destructure blogs and title directly from the props
const ResumeSections = ({ resumeSections }) => {
  return (
    <div>
      {resumeSections.map((resumeSection) => (
        <Link href={resumeSection.link} key={resumeSection.id}>
          <ResumeContainer
            section={resumeSection.section}
            style={{
              fontWeight: resumeSections.fontWeight,
            }}
          >
            <Date>{resumeSection.date}</Date>
            <Title>{resumeSection.title}</Title>
            <Details>{resumeSection.venue}</Details>
          </ResumeContainer>
        </Link>
      ))}
    </div>
  );
};

export default ResumeSections;

export const ResumeContainer = styled(GridContainer)`
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 24px;

  /* @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  } */

  @media (max-width: 768px) {
    grid-row-gap: 4px;
    grid-template-columns: 1fr;
    margin-bottom: 40px;
  }
`;

export const Details = styled(Body)`
  margin-bottom: 16px;
  font-family: "Arial";

  @media (max-width: 768px) {
    margin-bottom: 0px;
    color: #838589;
  }
`;

export const Title = styled(Body)`
  margin-bottom: 16px;
  font-family: "Arial";

  @media (max-width: 768px) {
    margin-bottom: 0px;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const Date = styled(Body)`
  margin-bottom: 16px;
  font-family: "Arial";

  @media (max-width: 768px) {
    margin-bottom: 0px;
    color: #838589;
    font-size: 14px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  display: block;

  &:link:hover,
  &:visited:hover {
    opacity: 30%;
  }

  &:hover Details {
    top: 2px;
    transform: rotate(-15deg);
  }
`;
