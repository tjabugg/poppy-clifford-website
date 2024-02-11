import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import TheLaramieProject01 from "../assets/images/the_laramie_project/the_laramie_project_01.jpg";
import TheLaramieProject02 from "../assets/images/the_laramie_project/the_laramie_project_02.jpg";
import TheLaramieProject03 from "../assets/images/the_laramie_project/the_laramie_project_03.jpg";
import TheLaramieProject04 from "../assets/images/the_laramie_project/the_laramie_project_04.jpg";
import TheLaramieProject05 from "../assets/images/the_laramie_project/the_laramie_project_05.jpg";
import TheLaramieProject06 from "../assets/images/the_laramie_project/the_laramie_project_06.jpg";
import TheLaramieProject07 from "../assets/images/the_laramie_project/the_laramie_project_07.jpg";
import Carousel from "../components/Carousel";

const TheLaramieProject = () => {
  const [projectPages] = useState([
    {
      name: "The Laramie Project",
      date: "2019",
      description:
        "The Laramie Project is a piece of documentary theatre created by Tectonic Theatre Company in the aftermath of Matthew Shepard’s murder in the town of Laramie, Wyoming, 1998. Made up of testimonies drawn from inhabitants of the town, the work examines the impact of Matthew’s tragic death not only on Laramie and its residents but also on America as a whole.\n\nThe power of the play comes from the individuals who make up the community surrounding Matthew Shephard. The work does not sentimentalise or judge, but rather gives real people – their experiences, feelings and opinions a voice.\n\nIn bringing Tectonic’s work to RADA in this production, I felt it was crucial that we were as detailed as possible in our approach, as we were bringing the words of real people in front of audiences. To do the people interviewed justice and to respect the bravery of their testimony, we sought to capture actuality. Without interpretation or judgement.",
      writer: "Moisés Kaufman and the members of the Tectonic Theatre Project",
      directing: "Associate Director",
      collaborators:
        "Directed by Kristine Landon-Smith, Designed by Adam Wiltshire",
      venue: "GBS Theatre, RADA",
      id: 1,
    },
  ]);

  // Should probably loop through all the objects in the array
  const images = [
    {
      src: TheLaramieProject01,
    },
    {
      src: TheLaramieProject02,
    },
    {
      src: TheLaramieProject03,
    },
    {
      src: TheLaramieProject04,
    },
    {
      src: TheLaramieProject05,
    },
    {
      src: TheLaramieProject06,
    },
    {
      src: TheLaramieProject07,
    },
  ];

  return (
    <>
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default TheLaramieProject;
