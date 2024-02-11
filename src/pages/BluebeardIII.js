import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import Bluebeard01 from "../assets/images/bluebeard/bluebeard_01.jpg";
import Bluebeard02 from "../assets/images/bluebeard/bluebeard_02.jpg";
import Bluebeard03 from "../assets/images/bluebeard/bluebeard_03.jpg";
import Bluebeard04 from "../assets/images/bluebeard/bluebeard_04.jpg";
import Bluebeard05 from "../assets/images/bluebeard/bluebeard_05.jpg";
import Bluebeard06 from "../assets/images/bluebeard/bluebeard_06.jpg";
import Bluebeard07 from "../assets/images/bluebeard/bluebeard_07.jpg";
import Bluebeard08 from "../assets/images/bluebeard/bluebeard_08.jpg";
import Bluebeard09 from "../assets/images/bluebeard/bluebeard_09.jpg";
import Bluebeard10 from "../assets/images/bluebeard/bluebeard_10.jpg";
import Bluebeard11 from "../assets/images/bluebeard/bluebeard_11.jpg";
import Bluebeard12 from "../assets/images/bluebeard/bluebeard_12.jpg";
import Bluebeard13 from "../assets/images/bluebeard/bluebeard_13.jpg";
import Bluebeard14 from "../assets/images/bluebeard/bluebeard_14.jpg";
import Bluebeard15 from "../assets/images/bluebeard/bluebeard_15.jpg";
import Bluebeard16 from "../assets/images/bluebeard/bluebeard_16.jpg";
import Bluebeard17 from "../assets/images/bluebeard/bluebeard_17.jpg";
import Carousel from "../components/Carousel";

const BluebeardIII = () => {
  const [projectPages] = useState([
    {
      name: "Bluebeard III",
      date: "2023",
      description:
        "A new queer reimagining of the classic fairytale, ‘Bluebeard III’ takes a look at the eternal enigma that is LOVE and its destructive pull (so often romanticised) as well as its power to heal. It is a whimsical and psychological look at each of our journeys towards understanding how we uniquely experience love.\n\n“Only love can heal the wounds of the past. However, the intensity of our wounded nests often leads to a closing of the heart, making it impossible for us to give or receive the love that is given to us. To open our hearts more fully to love’s power and grace, we must dare to acknowledge how little we know of love in both theory and practice.” - bell hooks, ‘all about love’.\n\nPoppy worked with Gemskii, the multi-talented writer of this piece, as director and dramaturg to showcase an early draft at the King’s Head Theatre’s ‘Platform Festival’, a month of new writing by queer artists. The piece was supported by Clean Break.",
      writer: "Gemskii",
      directing: "Director",
      collaborators: "Produced by Conscious Theatre",
      venue: "The King’s Head",
      id: 1,
    },
  ]);

  // Should probably loop through all the objects in the array
  const images = [
    {
      src: Bluebeard01,
    },
    {
      src: Bluebeard02,
    },
    {
      src: Bluebeard03,
    },
    {
      src: Bluebeard04,
    },
    {
      src: Bluebeard05,
    },
    {
      src: Bluebeard06,
    },
    {
      src: Bluebeard07,
    },
    {
      src: Bluebeard08,
    },
    {
      src: Bluebeard09,
    },
    {
      src: Bluebeard10,
    },
    {
      src: Bluebeard11,
    },
    {
      src: Bluebeard12,
    },
    {
      src: Bluebeard13,
    },
    {
      src: Bluebeard14,
    },
    {
      src: Bluebeard15,
    },
    {
      src: Bluebeard16,
    },
    {
      src: Bluebeard17,
    },
  ];

  return (
    <>
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default BluebeardIII;
