import React from "react";
import styled from "styled-components";
import { Caption, MyImage } from "../styles";

const Pinterest = ({ pinterestCards }) => {
  return (
    <Grid>
      {pinterestCards.map((pinterestCard) => (
        <div
          key={pinterestCard.id}
          style={{
            gridColumn: pinterestCard.span,
            marginTop: pinterestCard.marginTop,
          }}
        >
          <Container>
            <MyImage src={pinterestCard.image} />
          </Container>
          <Caption>{pinterestCard.caption}</Caption>
        </div>
      ))}
    </Grid>
  );
};

export default Pinterest;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: masonry;
  gap: 24px;
  padding-top: 61px;
  margin: 24px auto 24px auto;
  max-width: 1729px;

  @media (max-width: 1729px) {
    margin: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding-top: 70px;
    margin: 16px;
  }

  @media (max-width: 414px) {
    padding-top: 80px;
    display: flex;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 12px;
`;
