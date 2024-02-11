import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import WildCherries01 from "../assets/images/wild_cherries/wild_cherries_01.jpg";
import WildCherries02 from "../assets/images/wild_cherries/wild_cherries_02.jpg";
import WildCherries03 from "../assets/images/wild_cherries/wild_cherries_03.jpg";
import WildCherries04 from "../assets/images/wild_cherries/wild_cherries_04.jpg";
import WildCherries05 from "../assets/images/wild_cherries/wild_cherries_05.jpg";
import WildCherries06 from "../assets/images/wild_cherries/wild_cherries_06.jpg";
import WildCherries07 from "../assets/images/wild_cherries/wild_cherries_07.jpg";
import WildCherries08 from "../assets/images/wild_cherries/wild_cherries_08.jpg";
import WildCherries09 from "../assets/images/wild_cherries/wild_cherries_09.jpg";
import Carousel from "../components/Carousel";

const WildCherries = () => {
  const [projectPages] = useState([
    {
      name: "Wild Cherries",
      date: "2021",
      description:
        "They say home is where the heart is, but what happens when the head and the heart collide?\n\nFollowing the sold out run of Arawelo, Side eYe Productions returned to Rich Mix for Somali Week Festival 2019 with the premier of their new play HOME.\n\nHOME explores the tensions between sisterhood and self, hope and acceptance in a first-generation Somali family living in London today. Poppy co-created this play, acting largely as editor and dramaturg whilst also devising sections of the play with actors during workshops and rehearsals.",
      writer: "Daniel Keene",
      directing: "Associate Director",
      collaborators:
        "Directed by Kristine Landon-Smith\nDesigned by Roma Farnell\nLighting Design by Skylar Turnbull Hurd\nSound Design by Alice Boxer, with Compositions by Louis and Felix Cross",
      venue: "Rich Mix London",
      id: 1,
    },
  ]);

  // Should probably loop through all the objects in the array
  const images = [
    {
      src: WildCherries01,
    },
    {
      src: WildCherries02,
    },
    {
      src: WildCherries03,
    },
    {
      src: WildCherries04,
    },
    {
      src: WildCherries05,
    },
    {
      src: WildCherries06,
    },
    {
      src: WildCherries07,
    },
    {
      src: WildCherries08,
    },
    {
      src: WildCherries09,
    },
  ];

  return (
    <>
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default WildCherries;
