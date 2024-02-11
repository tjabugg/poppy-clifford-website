import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import MunaKnowsItAll01 from "../assets/images/muna_knows_it_all/muna_knows_it_all_01.jpg";
import MunaKnowsItAll02 from "../assets/images/muna_knows_it_all/muna_knows_it_all_02.jpg";
import MunaKnowsItAll03 from "../assets/images/muna_knows_it_all/muna_knows_it_all_03.jpg";
import MunaKnowsItAll04 from "../assets/images/muna_knows_it_all/muna_knows_it_all_04.mp4";
import Carousel from "../components/Carousel";

const MunaKnowsItAll = () => {
  const [projectPages] = useState([
    {
      name: "Muna Knows It All",
      date: "2021",
      description:
        "Following sold out runs of HOME and Arawelo, Side eYe Productions returned to Rich Mix following the Covid pandemic for Somali Week Festival 2021 with the premier of Sabrina Ali’s debut stage play Muna Knows It All.\n\nPerformed by Sabrina herself, Muna Knows It All was a comedy in the style of a mockumentary, where criminology graduate Muna takes it upon herself to solve the mystery of who spilt a drink on her friend’s dress on the day of her wedding.",
      writer: "Sabrina Ali",
      directing: "Director",
      collaborators:
        "Commissioned by Side eYe Productions and Kayd Somali Arts for London Somali Week Festival",
      venue: "Rich Mix London",
      id: 1,
    },
  ]);

  // Should probably loop through all the objects in the array
  const images = [
    {
      src: MunaKnowsItAll01,
    },
    {
      src: MunaKnowsItAll02,
    },
    {
      src: MunaKnowsItAll03,
    },
    {
      src: MunaKnowsItAll04,
    },
  ];

  return (
    <>
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default MunaKnowsItAll;
