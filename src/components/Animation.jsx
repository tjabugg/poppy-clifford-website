import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

const Animation = ({ children, wrapperElement = "div" }) => {
  const Component = wrapperElement;
  let compRef = useRef(null);
  useEffect(() => {
    gsap.from(compRef.current, {
      scrollTrigger: {
        trigger: compRef.current,
        start: "top 90%",
        // markers: true,
      },
      opacity: 0,
      duration: 3,
    });
  }, [compRef]);

  return <Component ref={compRef}> {children} </Component>;
};

export default Animation;

// do i add props to the component

export const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  position: relative;
  /* padding-bottom: calc(100% / (var(--aspect-ratio))); */
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    transform: scale(0.92);
    opacity: 0.5;
  }
`;
