import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import MysteriousBruises01 from "../assets/images/mysterious_bruises/mysterious_bruises_01.jpg";
import MysteriousBruises02 from "../assets/images/mysterious_bruises/mysterious_bruises_02.jpg";
import MysteriousBruises03 from "../assets/images/mysterious_bruises/mysterious_bruises_03.jpg";
import MysteriousBruises04 from "../assets/images/mysterious_bruises/mysterious_bruises_04.jpg";
import MysteriousBruises05 from "../assets/images/mysterious_bruises/mysterious_bruises_05.jpg";
import Carousel from "../components/Carousel";

const ThatOldBlackMagic = () => {
  const [projectPages] = useState([
    {
      name: "That Old Black Magic",
      date: "2023",
      description:
        "An adaptation of Goethe’s ‘Faust’, ‘That Old Black Magic’ is Kwahulé’s first play after immigrating to France from the Ivory Coast. It won Radio France International’s highly competitive best play prize in 1992, and is the first time Kwahulé dealt with race in a play outside the African context. ‘That Old Black Magic’ is also a 1942 jazz song by Harold Arlen and Johnny Mercer in which the protagonist finds himself spinning and falling as a result of love’s spell. What makes reluctant protagonist Shorty spin and fall is the temptation of unyielding triumph in the boxing ring. Jazz music frames many of the 12 scenes, like the 12 rounds of a boxing match, which make up the play.\n\nPoppy has been dreaming up a production of this play ever since she centered her Masters presentation and dissertation on it. HOME Manchester supported her in leading two week-long R&Ds on the play in 2021 and 2022 and she has continued development work on the project ever since. In May 2023 she secured the UK wide rights to the play and partnered with KO Boxing Gym, photographer Tolu Elusadé and a team of actors/models for a promotional photoshoot which helped her explore what the visual language of an eventual production might be.",
      writer: "Koffi Kwahulé",
      directing: "Director",
      collaborators: "Translation by Chantal Bilodeau",
      venue: "TBC",
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

export default ThatOldBlackMagic;
