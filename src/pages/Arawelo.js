import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import Arawelo01 from "../assets/images/arawelo/arawelo_01.jpg";
import Arawelo02 from "../assets/images/arawelo/arawelo_02.jpg";
import Arawelo03 from "../assets/images/arawelo/arawelo_03.jpg";
import Arawelo04 from "../assets/images/arawelo/arawelo_04.mp4";
import Arawelo05 from "../assets/images/arawelo/arawelo_05.jpg";
import Arawelo06 from "../assets/images/arawelo/arawelo_06.jpg";
import Arawelo08 from "../assets/images/arawelo/arawelo_08.mp4";
import Carousel from "../components/Carousel";
// import "../components/Carousel.css";

const Arawelo = () => {
  const [projectPages] = useState([
    {
      name: "Arawelo",
      date: "2018",
      description:
        "Side eYe Productions’ first commissioned play began as a short community piece performed at local cafes and libraries. When Somali Week Festival commissioned a full-length play, the production expanded, but continued to work with women with a range of cultural backgrounds and levels of performance experience to bring the traditional Somali legend of the warrior queen to life. It explored the themes of oral story-telling, the trope of the indignant rebellious woman and the diasporic experience. It featured live music and traditional dance.",
      writer: "Shukri Ibrahim & Demi Wilson-Smith",
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
      src: Arawelo01,
    },
    {
      src: Arawelo02,
    },
    {
      src: Arawelo03,
    },
    {
      src: Arawelo04,
    },
    {
      src: Arawelo05,
    },
    {
      src: Arawelo06,
    },
    {
      src: Arawelo08,
    },
  ];

  return (
    <>
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default Arawelo;
