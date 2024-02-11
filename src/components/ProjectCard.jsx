import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { MyImage, GridContainer, Link } from "../styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Animation from "./Animation";

gsap.registerPlugin(ScrollTrigger);

// Destructure blogs and title directly from the props
const ProjectCards = ({ projectCards }) => {
  return (
    <GridContainer>
      {projectCards.map((projectCard) => (
        <Animation
          key={projectCard.id}
          style={{
            gridColumn: projectCard.gridColumn,
          }}
        >
          <DetailContainer>
            <Title>{projectCard.name}</Title>
            <Location>{projectCard.location}</Location>
          </DetailContainer>

          <TagContainer>
            <Tag>{projectCard.tagOne}</Tag>
            <Tag>{projectCard.tagTwo}</Tag>
            {projectCard.tagThree ? <Tag>{projectCard.tagThree} </Tag> : null}
            {projectCard.tagFour ? <Tag>{projectCard.tagFour} </Tag> : null}
            {projectCard.tagFive ? <Tag>{projectCard.tagFive} </Tag> : null}
            {projectCard.tagSix ? <Tag>{projectCard.tagSix} </Tag> : null}
            {projectCard.tagSeven ? <Tag>{projectCard.tagSeven} </Tag> : null}
          </TagContainer>

          <Link href={projectCard.link}>
            {projectCard.image ? (
              <MyImage
                src={projectCard.image}
                style={{
                  aspectRatio: projectCard.aspectRatio,
                }}
              ></MyImage>
            ) : null}

            {projectCard.video ? (
              <MyVideo
                src={projectCard.video}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                style={{
                  aspectRatio: projectCard.aspectRatio,
                }}
              ></MyVideo>
            ) : null}
          </Link>
        </Animation>
      ))}
    </GridContainer>
  );
};

export default ProjectCards;

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

// const imgRef = useRef(null);

// useEffect(() => {
//   const el = imgRef.current.children[1];
//   gsap.fromTo(
//     el,
//     { opacity: 0 },
//     {
//       opacity: 1,
//       duration: 1,
//       scrollTrigger: {
//         trigger: el,
//         start: "top 80%",
//       },
//     }
//   );
// }, []);
