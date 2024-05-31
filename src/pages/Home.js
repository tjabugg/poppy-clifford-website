import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";
import HomeProduction from "../assets/images/home/home_01.jpg";
import Bluebeard from "../assets/images/bluebeard/bluebeard_16.jpg";
import AMidsummerNightsDreamHome from "../assets/images/a_midsummers_night_dream_home/midsummers_night_dream_home_06.jpg";
import Endurance from "../assets/images/endurance/endurance_01.jpg";
import AMidsummerNightsDreamHopeMill from "../assets/images/a_midsummers_night_dream_hope_mill/midsummers_night_dream_hope_mill_cover.jpg";
import DemTimes from "../assets/images/dem_times/dem_times_01.jpg";
import MunaKnowsItAll from "../assets/images/muna_knows_it_all/muna_knows_it_all_03.jpg";
import Arawelo from "../assets/images/arawelo/arawelo_08.mp4";
import WildCherries from "../assets/images/wild_cherries/wild_cherries_01.jpg";
import TheLaramieProject from "../assets/images/the_laramie_project/the_laramie_project_01.jpg";
import MysteriousBruises from "../assets/images/mysterious_bruises/mysterious_bruises_03.jpg";
import DeathOfAHunter from "../assets/images/death_of_a_hunter/death_of_a_hunter_02.jpg";
import TheThreepennyOpera from "../assets/images/the_threepenny_opera/threepenny_opera_03.jpg";
import Kula from "../assets/images/kula_nach_europa/kula_nach_europa_01.jpg";
import { Link, Heading } from "../styles";
import { styled } from "styled-components";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [projectCards] = useState([
    {
      image: Bluebeard,
      name: "Bluebeard III",
      location: "Clean Break/The Kings Head Theatre",
      tagOne: "Director",
      tagTwo: "In development",
      tagThree: "Live music",
      tagFour: "New writing",
      tagFive: "Queer",
      id: 1,
      gridColumn: "span 2",
      aspectRatio: "2/1",
      link: "/bluebeardiii",
      section: "one",
    },
    {
      image: DemTimes,
      name: "Dem Times",
      location: "Streatham Space Project; Kings Place London",
      tagOne: "Director",
      tagTwo: "Award winning",
      tagThree: "International",
      tagFour: "New writing",
      tagFive: "Podcast",
      id: 2,
      gridColumn: "span 1",
      aspectRatio: "1/1",
      link: "/demtimes",
      section: "one",
    },
    {
      image: MunaKnowsItAll,
      name: "Muna Knows It All",
      location: "Rich Mix",
      tagOne: "Director",
      tagTwo: "New writing",
      id: 3,
      gridColumn: "span 1",
      aspectRatio: "16/9",
      link: "/munaknowsitall",
      section: "one",
    },
    {
      video: Arawelo,
      name: "Arawelo",
      location: "Rich Mix: The Broadway Theatre",
      tagOne: "Director",
      tagTwo: "Community",
      tagThree: "Devised",
      tagFour: "International",
      tagFive: "Live music",
      tagSix: "New writing",
      tagSeven: "Touring",
      id: 4,
      gridColumn: "span 2",
      aspectRatio: "2/1",
      link: "/arawelo",
      section: "one",
    },
    {
      image: HomeProduction,
      name: "Home",
      location: "Rich Mix",
      tagOne: "Director",
      tagTwo: "New writing",
      id: 5,
      gridColumn: "span 1",
      aspectRatio: "16/9",
      link: "/homeproduction",
      section: "one",
    },
    {
      image: TheThreepennyOpera,
      name: "The Threepenny Opera",
      location: "Wadham College, Oxford",
      tagOne: "Director",
      tagTwo: "Community",
      tagThree: "International",
      tagFour: "Live music",
      id: 6,
      gridColumn: "span 1",
      aspectRatio: "16/9",
      link: "/thethreepennyopera",
      section: "one",
    },
    {
      image: AMidsummerNightsDreamHopeMill,
      name: "A Midsummer Night’s Dream",
      location: "Hope Mill",
      tagOne: "Associate",
      tagTwo: "Queer",
      id: 7,
      gridColumn: "span 2",
      aspectRatio: "2/1",
      link: "/amidsummernightsdreamhope",
      section: "two",
    },
    {
      image: Endurance,
      name: "Endurance",
      location: "HOME, Manchester",
      tagOne: "Associate",
      tagTwo: "Devised",
      tagThree: "New writing",
      tagFour: "Touring",
      id: 8,
      gridColumn: "span 1",
      aspectRatio: "16/9",
      link: "/endurance",
      section: "two",
    },
    {
      image: AMidsummerNightsDreamHome,
      name: "A Midsummer Night’s Dream",
      location: "HOME, Manchester",
      tagOne: "Associate",
      tagTwo: "Live music",
      tagThree: "Touring",
      id: 9,
      gridColumn: "span 1",
      aspectRatio: "1/1",
      link: "/amidsummernightsdreamhome",
      section: "two",
    },
    {
      image: WildCherries,
      name: "Wild Cherries",
      location: "RADA",
      tagOne: "Assistant",
      tagTwo: "Drama school",
      tagThree: "International",
      id: 10,
      gridColumn: "span 1",
      aspectRatio: "16/9",
      link: "/wildcherries",
      section: "two",
    },
    {
      image: DeathOfAHunter,
      name: "Death of a Hunter",
      location: "Finborough Theatre",
      tagOne: "Assistant",
      tagTwo: "International",
      id: 11,
      gridColumn: "span 1",
      aspectRatio: "16/9",
      link: "/deathofahunter",
      section: "two",
    },
    {
      image: TheLaramieProject,
      name: "The Laramie Project",
      location: "RADA",
      tagOne: "Assistant",
      tagTwo: "Drama school",
      tagThree: "International",
      tagFour: "Headphone Berbatim",
      tagFive: "Queer",
      id: 12,
      gridColumn: "span 2",
      aspectRatio: "2/1",
      link: "/thelaramieproject",
      section: "two",
    },
    {
      image: MysteriousBruises,
      name: "Mysterious Bruises",
      location: "RADA",
      tagOne: "Assistant",
      tagTwo: "Drama school",
      tagThree: "New writing",
      id: 13,
      gridColumn: "span 1",
      aspectRatio: "1/1",
      link: "/mysteriousbruises",
      section: "two",
    },
    {
      image: Kula,
      name: "Kula",
      location: "European Tour",
      tagOne: "Assistant",
      tagTwo: "Devised",
      tagThree: "International",
      tagFour: "New writing",
      tagFive: "Touring",
      id: 14,
      gridColumn: "span 1",
      aspectRatio: "16/9",
      link: "/kula",
      section: "two",
    },
  ]);


  return (
    <>
      <Helmet>
        <title>Poppy Clifford Productions | Projects</title>
        <meta
          name="description"
          content="Poppy Clifford is a freelance director based in London, with a special interest in new writing, international and interdisciplinary work."
        />
        <meta
          name="keywords"
          content="freelance director, London, theatre, award winning, interdisciplinary, new writing"
        />
        <meta name="author" content="Poppy Clifford" />
        <meta
          property="og:title"
          content="Poppy Clifford Productions | Projects"
        />
        <meta
          property="og:description"
          content="Poppy Clifford is a freelance director based in London, with a special interest in new writing, international and interdisciplinary work."
        />
        <meta property="og:image" content={Bluebeard} />
        <meta property="og:url" content="https://poppyclifford.com/projects" />
        <meta
          name="twitter:title"
          content="Poppy Clifford Productions | Projects"
        />
        <meta
          name="twitter:description"
          content="Poppy Clifford is a freelance director based in London, with a special interest in new writing, international and interdisciplinary work."
        />
        <meta name="twitter:image" content={Bluebeard} />
        <meta name="twitter:card" content={Bluebeard} />
      </Helmet>
      <Hero />
      <ProjectCard
        projectCards={projectCards.filter(
          (projectCard) => projectCard.section === "one"
        )}
      />
      <CentreContainer>
        <CallToAction>
          Check out the projects <br />
          I’m <Span href="/ongoing">currently</Span> working on
        </CallToAction>
      </CentreContainer>
      <ProjectCard
        projectCards={projectCards.filter(
          (projectCard) => projectCard.section === "two"
        )}
      />
    </>
  );
};

export default Home;

export const CentreContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 120px;
  color: white;

  @media (max-width: 768px) {
    padding: 80px 40px;
  }
`;

export const CallToAction = styled(Heading)`
  font-weight: 400;
  font-size: 60px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Span = styled(Link)`
  display: inline-block;
  padding: 4px;
  font-family: "Arial";
  background-image: radial-gradient(
    rgba(255, 255, 255, 1) 0%,
    rgba(8, 11, 20, 1) 75%
  );
  font-size: 60px;
  letter-spacing: -1px;
  line-height: 1;
  opacity: 1;

  transition: opacity 0.5s ease-in-out;

  &:hover {
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    font-size: 38px;
  }
`;
