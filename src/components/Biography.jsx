import { React, useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Heading, MyImage, ParentContainer } from "../styles";
import Somalia from "../assets/gifs/somalia.gif";
import Edinburgh from "../assets/gifs/edinburgh.gif";
import MFA from "../assets/gifs/mfa.gif";
import Psychologist from "../assets/gifs/psychologist.gif";
import Stockwell from "../assets/gifs/stockwell.gif";
import Headshot from "../assets/images/headshot/poppy_clifford_headshot.jpg";

const BiographySections = () => {
  // Set variable and function for gif state
  const [attached, setAttached] = useState(null);

  // Set variable and function for mouse position
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  // Function for tracking the mouse position
  useEffect(() => {
    // Sets initial position
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    // Calls mouse position every time it moves
    window.addEventListener("mousemove", updateMousePosition);

    // Not too sure what this does
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [attached]);

  // Array of all the gif images used
  const images = [Edinburgh, Somalia, MFA, Psychologist, Stockwell];

  const ref = useRef(null);

  return (
    <ParentContainer
      style={{
        gap: "24px",
      }}
    >
      {/* If the attached state is not empty, display the image, otherwise leave null*/}
      {attached !== null ? (
        <Gif
          style={{
            top: mousePosition.y,
            left: mousePosition.x,
          }}
          src={images[attached]}
          ref={ref}
          // alt="Hello world"
        />
      ) : null}

      <Biography>
        Poppy began her directing career in Germany. Initially as{" "}
        <span
          onMouseOver={() => setAttached(0)}
          onMouseOut={() => setAttached(null)}
        >
          resident Assistant Director at Theater Freiburg <sup>[1]</sup>
        </span>
        , where she met director Robert Schuster. And then as his assistant
        director at the Deutsches Nationaltheater Weimar and as he began to form
        his company KULA Compagnie.
        <br />
        <br />
        She assistant directed on the company's first production KULA: Nach
        Europa, a multi-lingual, devised show with performers from Germany,
        France and Afghanistan, which proceeded to tour Europe.
        <br />
        <br />
        After graduating, Poppy began working with Somali creatives to
        facilitate the making of Arawelo with a community of women interested in
        being involved in the arts.
        <span
          onMouseOver={() => setAttached(1)}
          onMouseOut={() => setAttached(null)}
        >
          The impact of this production led to the founding of Side eYe
          Productions <sup>[2]</sup>{" "}
        </span>{" "}
        , for whom she is now a resident director. Their aim is to tell
        authentic stories with heart, to platform emerging artists from
        communities marginalised in the arts, and to strive to work in a
        radically inclusive and collaborative way. The focus currently remains
        within the Somali community.
        <br />
        <br />
        Their most recent production, which Poppy co-directed, was the winner of
        this year's Untapped Award with New Diorama Theatre and Underbelly and
        will have a run at the Edinburgh Festival this August.
        <br />
        <br />
        <span
          onMouseOver={() => setAttached(2)}
          onMouseOut={() => setAttached(null)}
        >
          During her MFA studies, Poppy was on placement as resident assistant
          director at RADA <sup>[3]</sup>
        </span>{" "}
        , where she has continued to work. This is where she met artists Rikki
        Beagle-Blair and Kristine Landon-Smith, who have both become artistic
        mentors. Kristine’s intercultural and ‘pleasure to play’ approach to the
        making process and academic writing around this has been particularly
        influential. They have an ongoing working relationship and Poppy was her
        Associate Director on The Laramie Project, Wild Cherries and The Arrival
        (ongoing) all at RADA.
        <br />
        <br />
        Poppy was also on placement at HOME Manchester as resident assistant
        director. She was heavily involved in their HOME Grown season,
        celebrating live performance and shared experience after the pandemic.
        As well as curating and mentoring artists on their online season HOME
        Makers. This is also where she worked with Jenni Jackson to create her
        performance piece Endurance and where she was supported to conduct her
        first two R&Ds on That Old Black Magic.
        <br />
        <br />
        The experience of mentoring freelance artists over the pandemic inspired
        Poppy to begin some psychological training, so she completed a
        Foundation training in Group Analysis.
        <span
          onMouseOver={() => setAttached(2)}
          onMouseOut={() => setAttached(null)}
        >
          She has continued the training on the Diploma in Group Analysis
          <sup> [4]</sup>
        </span>{" "}
        , and is on placement as a group work practitioner in mental health
        centres as part of the Camden and Islington NHS Trust. This training is
        also a response to her work at Stockwell Park Community Trust, where she
        has worked for 6 years as a key member of staff,{" "}
        <span
          onMouseOver={() => setAttached(2)}
          onMouseOut={() => setAttached(null)}
        >
          as well as setting up their youth program, Stockwell Park Youth
          Creatives<sup> [5]</sup>
        </span>{" "}
        .
      </Biography>
      <HeadshotContainer>
        <MyImage src={Headshot} />
      </HeadshotContainer>
    </ParentContainer>
  );
};

export default BiographySections;

export const HeadshotContainer = styled.div`
  width: 40%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Gif = styled.img`
  z-index: 500;
  position: fixed;
  pointer-events: none;
  width: 20vw;

  @media (max-width: 768px) {
    width: 40vw;
  }
`;

export const Biography = styled(Heading)`
  width: 40%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
