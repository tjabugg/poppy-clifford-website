import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import TheThreepennyOpera01 from "../assets/images/the_threepenny_opera/threepenny_opera_01.jpg";
import TheThreepennyOpera02 from "../assets/images/the_threepenny_opera/threepenny_opera_02.jpg";
import TheThreepennyOpera03 from "../assets/images/the_threepenny_opera/threepenny_opera_03.jpg";
import TheThreepennyOpera04 from "../assets/images/the_threepenny_opera/threepenny_opera_04.jpg";
import TheThreepennyOpera05 from "../assets/images/the_threepenny_opera/threepenny_opera_05.jpg";
import TheThreepennyOpera06 from "../assets/images/the_threepenny_opera/threepenny_opera_06.jpg";
import TheThreepennyOpera07 from "../assets/images/the_threepenny_opera/threepenny_opera_07.jpg";
import TheThreepennyOpera08 from "../assets/images/the_threepenny_opera/threepenny_opera_08.jpg";
import TheThreepennyOpera09 from "../assets/images/the_threepenny_opera/threepenny_opera_09.jpg";
import Carousel from "../components/Carousel";

const TheThreepennyOpera = () => {
  const [projectPages] = useState([
    {
      name: "The Threepenny Opera",
      date: "2017",
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
      src: TheThreepennyOpera01,
    },
    {
      src: TheThreepennyOpera02,
    },
    {
      src: TheThreepennyOpera03,
    },
    {
      src: TheThreepennyOpera04,
    },
    {
      src: TheThreepennyOpera05,
    },
    {
      src: TheThreepennyOpera06,
    },
    {
      src: TheThreepennyOpera07,
    },
    {
      src: TheThreepennyOpera08,
    },
    {
      src: TheThreepennyOpera09,
    },
  ];

  return (
    <>
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default TheThreepennyOpera;
