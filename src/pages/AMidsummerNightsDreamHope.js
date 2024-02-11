import ProjectPages from "../components/ProjectPage";
import { useState } from "react";
import AMidsummerNightsDreamHope01 from "../assets/images/a_midsummers_night_dream_hope_mill/midsummers_night_dream_hope_mill_01.jpg";
import AMidsummerNightsDreamHope02 from "../assets/images/a_midsummers_night_dream_hope_mill/midsummers_night_dream_hope_mill_02.jpg";
import AMidsummerNightsDreamHope03 from "../assets/images/a_midsummers_night_dream_hope_mill/midsummers_night_dream_hope_mill_03.jpg";
import AMidsummerNightsDreamHope04 from "../assets/images/a_midsummers_night_dream_hope_mill/midsummers_night_dream_hope_mill_04.jpg";
import Carousel from "../components/Carousel";

const AMidsummerNightsDreamHope = () => {
  const [projectPages] = useState([
    {
      name: "A Midsummer Night’s Dream",
      date: "2021",
      description:
        "This energetic, modern interpretation of Shakespeare’s classic comedy swaps out the enchanted woodland of ancient Greece for modern-day Canal Street. A queer, femme take on the text, this production took inspiration from a hen night out in a gay club. It drew attention to the messiness of the monogamous romantic structures imposed on us in both a straight and queer context, and the confines of our understanding of sexuality and gender. Above all it promised the audience a cheeky and riotous night out at the theater.",
      writer: "William Shakespeare",
      directing: "Associate Director",
      collaborators:
        "Directed by Kate Colgrave-Pope\nProduced by Unseemly Women, Girl Gang Manchester & HER Productions\nSet and Costume by Sorcha Corcoran and Zoe Barnes\nSound Design by Eliyana Evans\nLighting Design by Tom Sutcliffe",
      venue: "Hope Mill Manchester",
      id: 1,
    },
  ]);

  // Should probably loop through all the objects in the array
  const images = [
    {
      src: AMidsummerNightsDreamHope01,
    },
    {
      src: AMidsummerNightsDreamHope02,
    },
    {
      src: AMidsummerNightsDreamHope03,
    },
    {
      src: AMidsummerNightsDreamHope04,
    },
  ];

  return (
    <>
      <ProjectPages projectPages={projectPages} />
      <Carousel images={images} />
    </>
  );
};

export default AMidsummerNightsDreamHope;
