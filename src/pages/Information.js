import React, { useState } from "react";
import Biography from "../components/Biography";
import Bluebeard from "../assets/images/bluebeard/bluebeard_16.jpg";
import { ParentContainer, Title, Subheading } from "../styles";
import Resume from "../components/Resume";
import { Helmet } from "react-helmet-async";

const Information = () => {
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

      <Biography />
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

export default Information;
