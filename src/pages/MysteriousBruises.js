import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import MysteriousBruises01 from "../assets/images/mysterious_bruises/mysterious_bruises_01.jpg";
import MysteriousBruises02 from "../assets/images/mysterious_bruises/mysterious_bruises_02.jpg";
import MysteriousBruises03 from "../assets/images/mysterious_bruises/mysterious_bruises_03.jpg";
import MysteriousBruises04 from "../assets/images/mysterious_bruises/mysterious_bruises_04.jpg";
import MysteriousBruises05 from "../assets/images/mysterious_bruises/mysterious_bruises_05.jpg";
import Carousel from "../components/Carousel";

const MysteriousBruises = () => {
  const [projectPages] = useState([
    {
      name: "Mysterious Bruises",
      date: "2019",
      description:
        "The Laramie Project is a piece of documentary theatre created by Tectonic Theatre Company in the aftermath of Matthew Shepard’s murder in the town of Laramie, Wyoming, 1998. Made up of testimonies drawn from inhabitants of the town, the work examines the impact of Matthew’s tragic death not only on Laramie and its residents but also on America as a whole.\n\nThe power of the play comes from the individuals who make up the community surrounding Matthew Shephard. The work does not sentimentalise or judge, but rather gives real people – their experiences, feelings and opinions a voice.\n\nIn bringing Tectonic’s work to RADA in this production, I felt it was crucial that we were as detailed as possible in our approach, as we were bringing the words of real people in front of audiences. To do the people interviewed justice and to respect the bravery of their testimony, we sought to capture actuality. Without interpretation or judgement.",
      writer: "Rikki Beadle-Blair",
      directing: "Associate Director",
      collaborators: "",
      venue: "Jerwood Vanbrugh Theatre, RADA",
      id: 1,
    },
  ]);

  // Should probably loop through all the objects in the array
  const images = [
    {
      src: MysteriousBruises01,
    },
    {
      src: MysteriousBruises02,
    },
    {
      src: MysteriousBruises03,
    },
    {
      src: MysteriousBruises04,
    },
    {
      src: MysteriousBruises05,
    },
  ];

  return (
    <>
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default MysteriousBruises;
