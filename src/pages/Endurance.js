import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import Endurance01 from "../assets/images/endurance/endurance_01.jpg";
import Endurance02 from "../assets/images/endurance/endurance_02.jpg";
import Endurance03 from "../assets/images/endurance/endurance_03.jpg";
import Endurance04 from "../assets/images/endurance/endurance_04.jpg";
import Endurance05 from "../assets/images/endurance/endurance_05.jpg";
import Endurance06 from "../assets/images/endurance/endurance_06.jpg";
import Endurance07 from "../assets/images/endurance/endurance_07.jpg";
import Endurance08 from "../assets/images/endurance/endurance_08.jpg";
import Endurance09 from "../assets/images/endurance/endurance_09.jpg";
import Endurance10 from "../assets/images/endurance/endurance_10.jpg";
import Endurance11 from "../assets/images/endurance/endurance_11.jpg";
import Endurance12 from "../assets/images/endurance/endurance_12.jpg";
import Endurance13 from "../assets/images/endurance/endurance_13.jpg";
import Carousel from "../components/Carousel";

const Endurance = () => {
  const [projectPages] = useState([
    {
      name: "Endurance",
      date: "2021",
      description:
        "Jenni is not an athlete. Jenni has not done enough training. Jenni wants to perform a feat of endurance, live and in real time. She really wants to be able to run up hills and mountains.\n\nExploring colonial legacies through the prism of the Bolivian/Aymaran warrior Bartolina Sisa and modern day women who are out-performing men at ultra marathon running, Jenni wants to know how we carry on when things get really hard?\n\nEndurance looks at how we endure, why we endure, and how women can make their innate propensity for endurance work in their favour to tip the balance of power.",
      writer: "Jennifer Jackson with Simon Carroll Jones",
      directing: "Associate Director",
      collaborators:
        "Performers; Jennifer Jackson, Simon Carroll Jones & Eryck Brahmania\nLighting and Video Design by Sarah Readman & Joshua Pharo\nSound Co-Designed by Alexandra Faye Braithwaite and Annie-May Fletcher\nCostume Design by Cécile Trémolières and Tracey Dunk\nDramaturgy by Emily Ling Williams",
      venue: "HOME Manchester\nBattersea Arts Centre",
      id: 1,
    },
  ]);

  // Should probably loop through all the objects in the array
  const images = [
    {
      src: Endurance01,
    },
    {
      src: Endurance02,
    },
    {
      src: Endurance03,
    },
    {
      src: Endurance04,
    },
    {
      src: Endurance05,
    },
    {
      src: Endurance06,
    },
    {
      src: Endurance07,
    },
    {
      src: Endurance08,
    },
    {
      src: Endurance09,
    },
    {
      src: Endurance10,
    },
    {
      src: Endurance11,
    },
    {
      src: Endurance12,
    },
    {
      src: Endurance13,
    },
  ];

  return (
    <>
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default Endurance;
