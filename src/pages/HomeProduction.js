import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import Home01 from "../assets/images/home/home_01.jpg";
import Home02 from "../assets/images/home/home_02.jpg";
import Home03 from "../assets/images/home/home_03.jpg";
import Home04 from "../assets/images/home/home_04.jpg";
import Home05 from "../assets/images/home/home_05.jpg";
import Home06 from "../assets/images/home/home_06.jpg";
import Home07 from "../assets/images/home/home_07.jpg";
import Home08 from "../assets/images/home/home_08.jpg";
import Home09 from "../assets/images/home/home_09.jpg";
import Home10 from "../assets/images/home/home_10.jpg";
import Home11 from "../assets/images/home/home_11.jpg";
import Home12 from "../assets/images/home/home_12.jpg";
import Home13 from "../assets/images/home/home_13.jpg";
import Home14 from "../assets/images/home/home_14.jpg";
import Home15 from "../assets/images/home/home_15.jpg";
import Home16 from "../assets/images/home/home_16.jpg";
import Home17 from "../assets/images/home/home_17.jpg";
import Home18 from "../assets/images/home/home_18.jpg";
import Home19 from "../assets/images/home/home_19.jpg";
import Home20 from "../assets/images/home/home_20.jpg";
import Home21 from "../assets/images/home/home_21.jpg";
import Home22 from "../assets/images/home/home_22.jpg";
import Home23 from "../assets/images/home/home_23.jpg";
import Home24 from "../assets/images/home/home_24.jpg";
import Home25 from "../assets/images/home/home_25.mp4";
import Carousel from "../components/Carousel";

const HomeProduction = () => {
  const [projectPages] = useState([
    {
      name: "HOME",
      date: "2019",
      description:
        "They say home is where the heart is, but what happens when the head and the heart collide?\n\nFollowing the sold out run of Arawelo, Side eYe Productions returned to Rich Mix for Somali Week Festival 2019 with the premier of their new play HOME.\n\nHOME explores the tensions between sisterhood and self, hope and acceptance in a first-generation Somali family living in London today. Poppy co-created this play, acting largely as editor and dramaturg whilst also devising sections of the play with actors during workshops and rehearsals.",
      writer: "Hannah Abdule, Demi Wilson-Smith and Poppy Clifford",
      directing: "Director",
      collaborators:
        "Commissioned by Kayd Somali Arts for London Somali Week Festival",
      venue: "Rich Mix London",
      id: 1,
    },
  ]);

  // Should probably loop through all the objects in the array
  const images = [
    {
      src: Home01,
    },
    {
      src: Home02,
    },
    {
      src: Home03,
    },
    {
      src: Home04,
    },
    {
      src: Home05,
    },
    {
      src: Home06,
    },
    {
      src: Home07,
    },
    {
      src: Home08,
    },
    {
      src: Home09,
    },
    {
      src: Home10,
    },
    {
      src: Home11,
    },
    {
      src: Home12,
    },
    {
      src: Home13,
    },
    {
      src: Home14,
    },
    {
      src: Home15,
    },
    {
      src: Home16,
    },
    {
      src: Home17,
    },
    {
      src: Home18,
    },
    {
      src: Home19,
    },
    {
      src: Home20,
    },
    {
      src: Home21,
    },
    {
      src: Home22,
    },
    {
      src: Home23,
    },
    {
      src: Home24,
    },
    {
      src: Home25,
    },
  ];

  return (
    <>
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default HomeProduction;
