import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import DugziDayz01 from "../assets/images/dugzi_dayz/dugzi_dayz_01.jpg";
import DugziDayz02 from "../assets/images/dugzi_dayz/dugzi_dayz_02.jpg";
import DugziDayz03 from "../assets/images/dugzi_dayz/dugzi_dayz_03.jpg";
import DugziDayz04 from "../assets/images/dugzi_dayz/dugzi_dayz_04.jpg";
import DugziDayz05 from "../assets/images/dugzi_dayz/dugzi_dayz_05.jpg";
import DugziDayz06 from "../assets/images/dugzi_dayz/dugzi_dayz_06.jpg";
import DugziDayz07 from "../assets/images/dugzi_dayz/dugzi_dayz_07.jpg";
import Carousel from "../components/Carousel";

const DugsiDayz = () => {
  const [projectPages] = useState([
    {
      name: "Dugsi Dayz",
      date: "2023",
      description:
        "Four students find themselves stuck in dugsi detention...\n\nWhat did they do to end up here? And is there any chance of them getting on? Salma, Yasmin, Munira, and Hani each see the world in radically different ways. As they subvert Somali folk tales and reminisce about their childhoods, this hour together may reveal that they have more in common than they thought.\n\nInspired by The Breakfast Club, this is a hilarious and authentic exploration of friendship between Somali girls from Side eYe Productions and writer Sabrina Ali.",
      writer: "Sabrina Ali",
      directing: "Director",
      collaborators:
        "Co-directed with Warda Mohamed\nProduced by Side eYe Productions",
      venue:
        "New Diorama Theatre (October 2023)\nUnderbelly (Edinburgh Fringe 2023)",
      awards: "Awards",
      names:
        "BBC Writersroom Popcorn Award\nNew Diorama & Underbelly Untapped Award 2023 ",
      press: "Features",
      features:
        "The Financial Times\nThe Times\nRolling Stone Magazine\nEdinburgh Festivals Magazine",
      id: 1,
    },
  ]);

  const images = [
    {
      src: DugziDayz01,
    },
    {
      src: DugziDayz02,
    },
    {
      src: DugziDayz03,
    },
    {
      src: DugziDayz04,
    },
    {
      src: DugziDayz05,
    },
    {
      src: DugziDayz06,
    },
    {
      src: DugziDayz07,
    },
  ];

  return (
    <>
    
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default DugsiDayz;
