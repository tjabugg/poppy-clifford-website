import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import DemTimes01 from "../assets/images/dem_times/dem_times_01.jpg";
import DemTimes02 from "../assets/images/dem_times/dem_times_02.jpg";
import DemTimes03 from "../assets/images/dem_times/dem_times_03.jpg";
import DemTimes04 from "../assets/images/dem_times/dem_times_04.jpg";
import DemTimes05 from "../assets/images/dem_times/dem_times_05.jpg";
import DemTimes06 from "../assets/images/dem_times/dem_times_06.jpg";
import DemTimes07 from "../assets/images/dem_times/dem_times_07.jpg";
import DemTimes08 from "../assets/images/dem_times/dem_times_08.jpg";
import DemTimes09 from "../assets/images/dem_times/dem_times_09.jpg";
import DemTimes10 from "../assets/images/dem_times/dem_times_10.jpg";
import DemTimes11 from "../assets/images/dem_times/dem_times_11.jpg";
import DemTimes12 from "../assets/images/dem_times/dem_times_12.jpg";
import DemTimes13 from "../assets/images/dem_times/dem_times_13.jpg";
import Carousel from "../components/Carousel";

const DemTimes = () => {
  const [projectPages] = useState([
    {
      name: "Dem Times",
      date: "2023",
      description:
        "Lorem ipsum dolor sit amet consectetur. Gravida eget sit malesuada vitae nec vel. Velit et sit porta non. Sodales at purus quisque lobortis lectus id pretium. Dolor elit eget a quis mauris sed a. Consequat libero elementum turpis mattis quam mauris. Vel tortor adipiscing bibendum vel vulputate posuere risus gravida ultricies. Dolor et sed non tempus porta tincidunt fermentum. Odio cursus integer augue et. Aliquam nulla sit nec aliquet nunc egestas at. Quis sed diam et fusce. Habitasse volutpat suspendisse pharetra et et. Cras viverra aliquet pulvinar nulla. \n \nEt mauris posuere malesuada sed nec felis. Ornare ultrices tristique adipiscing dignissim nulla sit feugiat sodales nisi. Risus risus tortor lorem neque sagittis rutrum pretium amet pellentesque. Diam scelerisque elementum aliquam tortor gravida. Augue quam dolor neque et eleifend etiam risus consequat. Nunc facilisis malesuada facilisi eget ut eget. Orci eget imperdiet nec aliquam tincidunt pretium volutpat nunc. Amet eget ultricies amet.",
      collaborators: "Thomas Bugg\nAnna Toogood\nMelissa Fry\nAnthony Odu",
      venue: "Streatham Space Project; Kings Place London",
      id: 1,
    },
  ]);

  // Should probably loop through all the objects in the array
  const images = [
    {
      src: DemTimes01,
    },
    {
      src: DemTimes02,
    },
    {
      src: DemTimes03,
    },
    {
      src: DemTimes04,
    },
    {
      src: DemTimes05,
    },
    {
      src: DemTimes06,
    },
    {
      src: DemTimes07,
    },
    {
      src: DemTimes08,
    },
    {
      src: DemTimes09,
    },
    {
      src: DemTimes10,
    },
    {
      src: DemTimes11,
    },
    {
      src: DemTimes12,
    },
    {
      src: DemTimes13,
    },
  ];

  return (
    <>
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default DemTimes;
