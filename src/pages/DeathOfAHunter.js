import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import DeathOfAHunter01 from "../assets/images/death_of_a_hunter/death_of_a_hunter_01.jpg";
import DeathOfAHunter02 from "../assets/images/death_of_a_hunter/death_of_a_hunter_02.jpg";
import DeathOfAHunter03 from "../assets/images/death_of_a_hunter/death_of_a_hunter_03.jpg";
import DeathOfAHunter04 from "../assets/images/death_of_a_hunter/death_of_a_hunter_04.jpg";
import DeathOfAHunter05 from "../assets/images/death_of_a_hunter/death_of_a_hunter_05.jpg";
import Carousel from "../components/Carousel";

const DeathOfAHunter = () => {
  const [projectPages] = useState([
    {
      name: "Death of a Hunter",
      date: "2018",
      description: " ",
      writer: " ",
      directing: " ",
      collaborators: "",
      venue: "",
      id: 1,
    },
  ]);

  // Should probably loop through all the objects in the array
  const images = [
    {
      src: DeathOfAHunter01,
    },
    {
      src: DeathOfAHunter02,
    },
    {
      src: DeathOfAHunter03,
    },
    {
      src: DeathOfAHunter04,
    },
    {
      src: DeathOfAHunter05,
    },
  ];

  return (
    <>
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default DeathOfAHunter;
