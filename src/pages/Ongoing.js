import { useState } from "react";
import Home01 from "../assets/images/home/home_01.jpg";
import Home02 from "../assets/images/home/home_02.jpg";
import Home03 from "../assets/images/home/home_03.jpg";
import Home04 from "../assets/images/home/home_04.jpg";
import Home05 from "../assets/images/home/home_05.jpg";
import Home06 from "../assets/images/home/home_06.jpg";
import Home07 from "../assets/images/home/home_07.jpg";
import Home08 from "../assets/images/home/home_08.jpg";
import Home09 from "../assets/images/home/home_09.jpg";
import Home10 from "../assets/images/home/home_10.jpg";
import Home11 from "../assets/images/home/home_11.jpg";
import Home12 from "../assets/images/home/home_12.jpg";
import Home13 from "../assets/images/home/home_13.jpg";
import Home14 from "../assets/images/home/home_14.jpg";
import Home15 from "../assets/images/home/home_15.jpg";
import Home16 from "../assets/images/home/home_16.jpg";
import Home17 from "../assets/images/home/home_17.jpg";
import Home18 from "../assets/images/home/home_18.jpg";
import Home19 from "../assets/images/home/home_19.jpg";
import Home20 from "../assets/images/home/home_20.jpg";
import Home21 from "../assets/images/home/home_21.jpg";
import Home22 from "../assets/images/home/home_22.jpg";
import Home23 from "../assets/images/home/home_23.jpg";
import Home24 from "../assets/images/home/home_24.jpg";
import Pinterest from "../components/Pinterest";

const Ongoing = () => {
  const [pinterestCards] = useState([
    {
      image: Home01,
      // caption: "Feb 2023",
      id: 1,
    },
    {
      image: Home02,
      // caption: "Feb 2023",
      id: 2,
    },
    {
      image: Home03,
      // caption: "Feb 2023",
      id: 3,
      span: "span 2",
    },
    {
      image: Home04,
      // caption: "Feb 2023",
      id: 4,
    },
    {
      image: Home05,
      // caption: "Feb 2023",
      id: 5,
    },
    {
      image: Home06,
      // caption: "Feb 2023",
      id: 6,
      span: "span 2",
    },
    {
      image: Home07,
      // caption: "Feb 2023",
      id: 7,
    },
    {
      image: Home08,
      // caption: "Feb 2023",
      id: 8,
    },

    {
      image: Home09,
      // caption: "Feb 2023",
      id: 9,
    },
    {
      image: Home10,
      // caption: "Feb 2023",
      id: 10,
    },
    {
      image: Home11,
      // caption: "Feb 2023",
      id: 11,
    },
    {
      image: Home12,
      // caption: "Feb 2023",
      id: 12,
    },
    {
      image: Home13,
      // caption: "Feb 2023",
      id: 13,
    },
    {
      image: Home14,
      caption: "Feb 2023",
      id: 14,
    },
    {
      image: Home15,
      // caption: "Feb 2023",
      id: 15,
      span: "span 2",
    },
    {
      image: Home16,
      // caption: "Feb 2023",
      id: 16,
    },
    {
      image: Home17,
      // caption: "Feb 2023",
      id: 17,
    },
    {
      image: Home18,
      // caption: "Feb 2023",
      id: 18,
    },
    {
      image: Home19,
      // caption: "Feb 2023",
      id: 19,
    },
    {
      image: Home20,
      // caption: "Feb 2023",
      id: 20,
    },
    {
      image: Home21,
      // caption: "Feb 2023",
      id: 21,
      span: "span 2",
    },
    {
      image: Home22,
      // caption: "Feb 2023",
      id: 22,
    },
    {
      image: Home23,
      // caption: "Feb 2023",
      id: 23,
      span: "span 2",
    },
    {
      image: Home24,
      // caption: "Feb 2023",
      id: 24,
    },
  ]);

  return (
    <>
      <Pinterest pinterestCards={pinterestCards} />
    </>
  );
};

export default Ongoing;
