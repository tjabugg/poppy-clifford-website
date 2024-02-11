import { useState } from "react";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";
import HomeProduction from "../assets/images/home/home_01.jpg";
import Biography from "../components/Biography";
// import DugziDayz from "../assets/images/dugzi_dayz/dugzi_dayz_05.jpg";
// import ThatOldBlackMagic from "../assets/images/that_old_black_magic/that_old_black_magic_01.jpeg";
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
import { ParentContainer, Title, Subheading, Link, Heading } from "../styles";
import Resume from "../components/Resume";
import { Element } from "react-scroll";
import { styled } from "styled-components";

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

  const [resumeSections] = useState([
    {
      date: "Begins Sept 2023",
      title:
        "Diploma Course in Group Analysis and Group Work Practitioner Training",
      venue: "Institute of Group Analysis",
      id: 2,
      section: "Qualifications and Training",
    },
    {
      date: "Oct 2021 – July 2022",
      title: "Foundation Course in Group Analysis",
      venue: "Institute of Group Analysis",
      section: "Qualifications and Training",
      id: 3,
    },
    {
      date: "Sept 2019 – Feb 2022",
      title: "MFA Theatre Directing",
      venue: "Birkbeck College, University of London",
      id: 4,
      section: "Qualifications and Training",
    },
    {
      date: "Sept 2013 – June 2017",
      title: "BA Modern Languages, German Final Award: First Class Honours",
      venue: "Wadham College, University of Oxford",
      id: 5,
      section: "Qualifications and Training",
    },
    {
      date: "Begins April 2023",
      title: "Trainee Group Analyst",
      venue: "Camden and Islington NHS Foundation Trust, Queen Mary’s Hospital",
      id: 7,
      section: "Experience",
    },
    {
      date: "January 2018 – ongoing",
      title: "Core staff and leader",
      venue: "Stockwell Park Youth Creatives at Stockwell Park Community Trust",
      id: 8,
      section: "Experience",
    },
    {
      date: "September 2018 - July 2019",
      title: "Learning Support Assistant",
      venue: "George Tomlinson Primary School",
      id: 9,
      section: "Experience",
    },
    {
      date: "1 work-in progress showing, May 2023",
      title: "Bluebeard III",
      venue: "HOME, Manchester",
      id: 11,
      section: "Directing Credits",
      link: "/bluebeardiii",
    },
    {
      date: "Ongoing",
      title:
        "That Old Black Magic\n(Work on this production is ongoing. I have acquired the exclusive rights and am building a team and gearing towards a larger funding application.)",
      venue: "Clean Break/The Kings Head Theatre",
      id: 12,
      section: "Directing Credits",
    },
    {
      date: "Oct 2022 - extended Jan 2023, 4 shows",
      title:
        "Dugsi Dayz\n(We have just won the Untapped Award at New Diorama Theatre, funding us to showcase the work at Edinburgh Fringe 2023.)",
      venue: "Clean Break/The Kings Head Theatre",
      id: 13,
      section: "Directing Credits",
      link: "/dugsidayz",
    },
    {
      date: "Nov 2021, 1 show",
      title: "A Hidden Life",
      venue: "The Unity (Liverpool) for Dada Arts",
      id: 14,
      section: "Directing Credits",
    },
    {
      date: "Oct 2021, 4 shows",
      title: "Muna Knows It All",
      venue: "Rich Mix",
      id: 15,
      section: "Directing Credits",
      link: "/munaknowsitall",
    },
    {
      date: "June 2019, 4 shows",
      title: "HOME\n(also co-writer)",
      venue: "Rich Mix",
      id: 16,
      section: "Directing Credits",
      link: "/homeproduction",
    },
    {
      date: "March - September 2019, 4 shows",
      title: "Dem Times: Live Performances",
      venue: "Streatham Space Project; Kings Place London",
      id: 17,
      section: "Directing Credits",
      link: "/demtimes",
    },
    {
      date: "November 2019, 1 show",
      title: "60 Years of Methuen Drama",
      venue: "RADA Studios",
      id: 18,
      section: "Directing Credits",
    },
    {
      date: "June 2019, 1 show",
      title: "A Flower in Prison",
      venue: "The Broadway Theatre (Barking)",
      id: 19,
      section: "Directing Credits",
    },
    {
      date: "October 2018, 4 shows",
      title: "Arawelo",
      venue: "Rich Mix; The Broadway Theatre (Barking)",
      id: 20,
      section: "Directing Credits",
      link: "/arawelo",
    },
    {
      date: "July – September 2017,Full Festival Run & Tour",
      title: "STOP: A New Musical",
      venue: "National Tour including Edinburgh Fringe",
      id: 21,
      section: "Directing Credits",
    },
    {
      date: "August 2017, Full Festival Run",
      title: "The Bacchae",
      venue: "Edinburgh Fringe (The Space at Surgeon’s Hall)",
      id: 22,
      section: "Directing Credits",
    },
    {
      date: "March 2017, 1 week run",
      title: "The Threepenny Opera",
      venue: "Wadham College, University of Oxford",
      id: 23,
      section: "Directing Credits",
      link: "/thethreepennyopera",
    },
    {
      date: "March 2023, 12 shows",
      title: "Wild Cherries\nby Kristine Landon-Smith",
      venue: "RADA",
      id: 25,
      section: "Associate Credits",
      link: "/wildcherries",
    },
    {
      date: "Oct 2021, 4 shows and Nov 2021, 10 day run",
      title: "Endurance (also dramaturg)\n by Jenni Jackson",
      venue: "HOME Manchester/BAC",
      id: 26,
      section: "Associate Credits",
      link: "/endurance",
    },
    {
      date: "October 2021, 10 day run",
      title: "A Midsummer Night’s Dream\nby Kate Colgrave-Pope",
      venue: "The Hope Mill Theatre",
      id: 27,
      section: "Associate Credits",
      link: "/amidsummernightsdreamhope",
    },
    {
      date: "April 2018, 9 shows",
      title: "Death of a Hunter\nby Anthony Shrubshall",
      venue: "Finborough Theatre",
      id: 28,
      section: "Associate Credits",
      link: "/deathofahunter",
    },
    {
      date: "May 2020 – Dec 2021",
      title: "Resident Assistant Director",
      venue: "HOME, Manchester",
      id: 30,
      section: "Assistant Credits",
    },
    {
      date: "Sept 2015 - June 2016",
      title: "Resident Assistant Director",
      venue: "Theater Freiburg, Germany",
      id: 31,
      section: "Assistant Credits",
    },
    {
      date: "November 2021, 2 shows",
      title: "When This Is Over\nby Nickie Miles-Wildin",
      venue: "Royal Exchange Theatre",
      id: 32,
      section: "Assistant Credits",
    },
    {
      date: "August 2021, 4 shows",
      title: "4 Us To Rule\nby Kate Colgrave-Pope",
      venue: "HOME, Manchester",
      id: 33,
      section: "Assistant Credits",
    },
    {
      date: "Cancelled",
      title: "Alice in Wonderland\nby Lekan Lawal",
      venue: "HOME, Manchester",
      id: 34,
      section: "Assistant Credits",
    },
    {
      date: "Cancelled",
      title: "A Midsummer Night’s Dream\nby Sean Holmes for FILTER",
      venue: "HOME, Manchester",
      id: 35,
      section: "Assistant Credits",
      link: "/amidsummernightsdreamhome",
    },
    {
      date: "June 2021, 3.5 week run",
      title: "Alice in Wonderland\nby Lekan Lawal",
      venue: "HOME, Manchester",
      id: 36,
      section: "Assistant Credits",
    },
    {
      date: "2020, Spanned many lockdown months",
      title: "HOMEMAKERS (Online Work)\nby Jude Christian",
      venue: "HOME, Manchester",
      id: 37,
      section: "Assistant Credits",
    },

    {
      date: "October 2019, 1 week run",
      title: "Mysterious Bruises\nby Rikki Beadle-Blair",
      venue: "RADA",
      id: 39,
      section: "Assistant Credits",
      link: "/mysteriousbruises",
    },
    {
      date: "November 2019, 1 week run",
      title: "The Laramie Project\nby Kristine Landon-Smith",
      venue: "RADA",
      id: 40,
      section: "Assistant Credits",
      link: "/thelaramieproject",
    },
    {
      date: "November 2018, 2 shows",
      title: "Pyneapple\nby Tesni Kujore",
      venue: "Tristan Bates Theatre",
      id: 41,
      section: "Assistant Credits",
    },
    {
      date: "January 2017, 1 week run",
      title: "Edward II\nby Charlotte Vickers",
      venue: "Oxford Playhouse",
      id: 42,
      section: "Assistant Credits",
    },
    {
      date: "June - September 2016",
      title: "KULA: Nach Europa\nby Robert Schuster",
      venue: "Tristan Bates Theatre",
      id: 43,
      section: "Assistant Credits",
      link: "/kula",
    },
    {
      date: "Developed from March 2019\nReleased November - December 2020",
      title: "Director, Dem Times Fiction Podcast\n",
      venue:
        "Winner, BBC New Creatives 2019. Amongst Spotify and Apple Podcasts’ ‘Top Podcasts of 2020’. Nominations at British Podcast Awards, the Ambies and New Jersey Web Fest.",
      id: 45,
      section: "Film/Podcast Credits",
    },
    {
      date: "August 2019",
      title: "Assistant Director, Roots for a Crown by Julian Knxx",
      venue:
        "Short film featuring original music and poetry. Premiered at Roundhouse.",
      id: 46,
      section: "Film/Podcast Credits",
    },
  ]);

  return (
    <>
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
      <Element id="example-destination" name="example-destination">
        <Biography id="biography" />
      </Element>{" "}
      <ParentContainer>
        <Title>Information</Title>
        <Subheading>Qualifications and Training</Subheading>
      </ParentContainer>
      <Resume
        resumeSections={resumeSections.filter(
          (resumeSection) => resumeSection.id === 1
        )}
        fontWeight={"600"}
      />
      <Resume
        resumeSections={resumeSections.filter(
          (resumeSection) =>
            resumeSection.section === "Qualifications and Training"
        )}
        fontWeight={"400"}
      />
      <ParentContainer>
        <Subheading>Experience</Subheading>
      </ParentContainer>
      <Resume
        resumeSections={resumeSections.filter(
          (resumeSection) => resumeSection.id === 6
        )}
        fontWeight={"600"}
      />
      <Resume
        resumeSections={resumeSections.filter(
          (resumeSection) => resumeSection.section === "Experience"
        )}
        fontWeight={"400"}
      />
      <ParentContainer>
        <Subheading>Directing Credits</Subheading>
      </ParentContainer>
      <Resume
        resumeSections={resumeSections.filter(
          (resumeSection) => resumeSection.id === 10
        )}
        fontWeight={"600"}
      />
      <Resume
        resumeSections={resumeSections.filter(
          (resumeSection) => resumeSection.section === "Directing Credits"
        )}
        fontWeight={"400"}
      />
      <Resume
        resumeSections={resumeSections.filter(
          (resumeSection) => resumeSection.id === 24
        )}
        fontWeight={"600"}
      />
      <ParentContainer>
        <Subheading>Associate Credits</Subheading>
      </ParentContainer>
      <Resume
        resumeSections={resumeSections.filter(
          (resumeSection) => resumeSection.section === "Associate Credits"
        )}
        fontWeight={"400"}
      />
      <Resume
        resumeSections={resumeSections.filter(
          (resumeSection) => resumeSection.id === 29
        )}
        fontWeight={"600"}
      />
      <ParentContainer>
        <Subheading>Assistant Credits</Subheading>
      </ParentContainer>
      <Resume
        resumeSections={resumeSections.filter(
          (resumeSection) => resumeSection.section === "Assistant Credits"
        )}
        fontWeight={"400"}
      />
      <ParentContainer>
        <Subheading>Film and Podcast</Subheading>
      </ParentContainer>
      <Resume
        resumeSections={resumeSections.filter(
          (resumeSection) => resumeSection.id === 44
        )}
        fontWeight={"600"}
      />
      <Resume
        resumeSections={resumeSections.filter(
          (resumeSection) => resumeSection.section === "Film/Podcast Credits"
        )}
        fontWeight={"400"}
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
