import React from "react";
import styled from "styled-components";
import DugziDayz from "../assets/images/dugzi_dayz/dugzi_dayz_05.jpg";
import ThatOldBlackMagic from "../assets/images/that_old_black_magic/that_old_black_magic_01.jpeg";
import { MyImage, Link, Caption, ParentContainer } from "../styles";

// Destructure blogs and title directly from the props
const HeroSections = ({ heroSections }) => {
  return (
    <HoldingContainer>
      <Container>
        <ImageContainer
          style={{
            aspectRatio: "1/1",
          }}
        >
          <DetailContainer>
            <Title>Dugzi Dayz</Title>
            <Location>Rich Mix</Location>
          </DetailContainer>

          <TagContainer>
            <Tag>Director</Tag>
            <Tag>Award winning</Tag>
            <Tag>In development</Tag>
            <Tag>New writing</Tag>
            <Tag>Touring</Tag>
          </TagContainer>

          <Link href="/dugsidayz">
            <MyImage src={DugziDayz}></MyImage>
          </Link>
        </ImageContainer>

        <StackedContainer>
          <UpdateContainer
            style={
              {
                // gridArea: "update",
                // placeSelf: "stretch",
              }
            }
          >
            <Update>Updates</Update>
            <Update
              style={{
                fontWeight: "400",
              }}
            >
              Dugsi Dayz sells out run at the Royal Court Theatre after sold-out
              previews in July and a smash-hit Edinburgh Fringe run at
              Underbelly, where it won the BBC Writersroom Popcorn Award, rave
              reviews, and was named a breakout hit of the festival by Rolling
              Stone
            </Update>
          </UpdateContainer>

          <ImageContainer
            style={{
              height: "100%",
            }}
          >
            <DetailContainer>
              <Title>That Old Black Magic</Title>
              <Location>?</Location>
            </DetailContainer>

            <TagContainer>
              <Tag>Director</Tag>
              <Tag>Intercultural</Tag>
              <Tag>In development</Tag>
              <Tag>Live music</Tag>
            </TagContainer>

            <Link href="/thatoldblackmagic">
              <MyImage src={ThatOldBlackMagic}></MyImage>
            </Link>
          </ImageContainer>
        </StackedContainer>
      </Container>
    </HoldingContainer>
  );
};

export default HeroSections;

export const Container = styled.div`
  display: flex;
  margin: 0px auto 0px auto;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const HoldingContainer = styled(ParentContainer)`
  padding-top: 85px;

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

export const StackedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  position: relative;
  padding-bottom: calc(100% / (var(--aspect-ratio)));
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    transform: scale(0.92);
    opacity: 0.5;
  }
`;

export const UpdateContainer = styled.div`
  border-radius: 8px;
  /* overflow: hidden; */
  display: flex;
  position: relative;
  background-color: #b0ffb0;
  flex-direction: column;
  gap: 24px;
  padding: 28px;
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  :before,
  :after {
    content: "";
    position: absolute;
    height: 100%;
    width: 20px;
    top: 0px;
    align-items: center;
    justify-content: center;
    background-image: radial-gradient(
        circle at center,
        black 5px,
        transparent 6px
      ),
      radial-gradient(circle at center, black 5px, transparent 6px);
    background-size: 20px 20px;
    background-position: top center, bottom center;
    background-repeat: no-repeat;
  }
  :before {
    left: 0px;
  }
  :after {
    right: 0px;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 16px;
  top: 16px;
  gap: 8px;
  align-items: flex-start;

  @media (max-width: 768px) {
    left: 8px;
    top: 8px;
    flex-direction: column;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 16px;
  bottom: 16px;
  gap: 8px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Title = styled.div`
  padding: 8px;
  background-color: rgba(255, 255, 255);
  border: none;
  border-radius: 8px;
  font-size: 14px;
  color: black;
  font-weight: 400;
`;

export const Update = styled(Caption)`
  font-weight: 600;
  font-size: 16px;
  color: black;
`;

export const Location = styled(Title)`
  color: #808080;
`;

export const Tag = styled(Title)`
  background-color: rgba(255, 255, 255, 0.3);
  color: white;

  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;

export const MyVideo = styled.video`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
