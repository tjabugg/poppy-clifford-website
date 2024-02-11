import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import Kula01 from "../assets/images/kula_nach_europa/kula_nach_europa_01.jpg";
import Kula02 from "../assets/images/kula_nach_europa/kula_nach_europa_02.jpg";
import Kula03 from "../assets/images/kula_nach_europa/kula_nach_europa_03.jpg";
import Kula04 from "../assets/images/kula_nach_europa/kula_nach_europa_04.jpg";
import Kula05 from "../assets/images/kula_nach_europa/kula_nach_europa_05.jpg";
import Carousel from "../components/Carousel";

const Kula = () => {
  const [projectPages] = useState([
    {
      name: "Kula",
      date: "2016",
      description: " ",
      writer: " ",
      directing: " ",
      collaborators: "",
      venue: "",
      id: 1,
    },
  ]);

  const images = [
    {
      src: Kula01,
    },
    {
      src: Kula02,
    },
    {
      src: Kula03,
    },
    {
      src: Kula04,
    },
    {
      src: Kula05,
    },
  ];

  return (
    <>
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default Kula;
