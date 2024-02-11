import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import AMidsummerNightsDreamHome01 from "../assets/images/a_midsummers_night_dream_home/midsummers_night_dream_home_01.jpg";
import AMidsummerNightsDreamHome02 from "../assets/images/a_midsummers_night_dream_home/midsummers_night_dream_home_02.jpg";
import AMidsummerNightsDreamHome03 from "../assets/images/a_midsummers_night_dream_home/midsummers_night_dream_home_03.jpg";
import AMidsummerNightsDreamHome04 from "../assets/images/a_midsummers_night_dream_home/midsummers_night_dream_home_04.jpg";
import AMidsummerNightsDreamHome05 from "../assets/images/a_midsummers_night_dream_home/midsummers_night_dream_home_05.jpg";
import AMidsummerNightsDreamHome06 from "../assets/images/a_midsummers_night_dream_home/midsummers_night_dream_home_06.jpg";
import AMidsummerNightsDreamHome07 from "../assets/images/a_midsummers_night_dream_home/midsummers_night_dream_home_07.jpg";
import Carousel from "../components/Carousel";

const AMidsummerNightsDreamHome = () => {
  const [projectPages] = useState([
    {
      name: "A Midsummer Night’s Dream",
      date: "2021",
      description:
        "Young lovers and warring fairies cross paths in this irreverent adaptation of one of Shakespeare’s best-loved plays by Filter Theatre. Featuring live music, this production was often referred to as one of the most exciting and inventive Shakespeare productions of recent years.\n\nThis was the first show which Poppy worked on whilst Resident Assistant Director at HOME Manchester. It brought together existing members of Filter Theatre and new cast members and was performed on an outdoor stage, specially built for the reopening of the theatre following the Covid pandemic.",
      writer: "William Shakespeare",
      directing: "Associate Director",
      collaborators:
        "A Lyric Hammersmith and Filter Theatre Production\n\nDirected by Sean Holmes & Ferdy Roberts\n\nDesign by Hyemi Shin\n\nSound Design\n\nOriginal Music by Tom Haines and Chris Branch",
      venue: "HOME Manchester (Homeground)",
      id: 1,
    },
  ]);
  // Should probably loop through all the objects in the array
  const images = [
    {
      src: AMidsummerNightsDreamHome01,
    },
    {
      src: AMidsummerNightsDreamHome02,
    },
    {
      src: AMidsummerNightsDreamHome03,
    },
    {
      src: AMidsummerNightsDreamHome04,
    },
    {
      src: AMidsummerNightsDreamHome05,
    },
    {
      src: AMidsummerNightsDreamHome06,
    },
    {
      src: AMidsummerNightsDreamHome07,
    },
  ];

  return (
    <>
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default AMidsummerNightsDreamHome;
