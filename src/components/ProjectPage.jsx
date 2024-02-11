import React from "react";
import styled from "styled-components";
import { Subheading, ParentContainer, Body, GridContainer } from "../styles";

// Destructure blogs and title directly from the props
const ProjectPages = ({ projectPages }) => {
  return (
    <div>
      {projectPages.map((projectPage) => (
        <Container
          style={{
            gap: "28px",
          }}
          key={projectPage.id}
        >
          <HeadingContainer>
            <Cell
              style={{
                gap: "8px",
              }}
            >
              <Subheading>{projectPage.name}</Subheading>
              <Body>{projectPage.date}</Body>
            </Cell>

            <Cell>
              <Body>{projectPage.description}</Body>
            </Cell>

            <Cell>
              <Credits>
                <Title>Written by</Title>
                <Details>{projectPage.writer}</Details>
              </Credits>
              <Credits>
                <Title>{projectPage.directing}</Title>
                <Details>Poppy Clifford</Details>
              </Credits>
              <Credits>
                <Title>Collaborators</Title>
                <Details>{projectPage.collaborators}</Details>
              </Credits>
            </Cell>

            <Cell>
              <Credits>
                <Title>Venue</Title>
                <Details>{projectPage.venue}</Details>
              </Credits>
              <Credits>
                {projectPage.press ? <Title>{projectPage.press}</Title> : null}
                {projectPage.features ? (
                  <Details>{projectPage.features} </Details>
                ) : null}
              </Credits>
              <Credits>
                {projectPage.awards ? (
                  <Title>{projectPage.awards} </Title>
                ) : null}
                {projectPage.names ? (
                  <Details>{projectPage.names} </Details>
                ) : null}
              </Credits>
            </Cell>
          </HeadingContainer>
        </Container>
      ))}
    </div>
  );
};

export default ProjectPages;

export const HeadingContainer = styled(GridContainer)`
  margin: 120px 0px 0px 0px;
  grid-template-columns: 0.5fr 1.3fr 0.5fr 0.5fr;
  gap: 40px;

  @media (max-width: 768px) {
    margin: 80px 0px 0px 0px;
    grid-template-columns: 1fr;
    grid-row-gap: 16px;
    grid-column-gap: 0px;
  }
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px auto 24px auto;
  max-width: 1729px;

  @media (max-width: 1729px) {
    margin: 24px;
  }

  @media (max-width: 768px) {
    margin: 16px;
  }
`;

export const Credits = styled(ParentContainer)`
  gap: 4px;
  margin: 0px;
`;

export const Details = styled(Body)`
  font-size: 15px;
`;

export const Title = styled(Body)`
  font-size: 15px;
  margin-bottom: 4px;
  font-family: "Neue-Haas-Grotesk", sans-serif;
  font-weight: 600;
`;
