import React, { useEffect } from "react";
import { motion } from "framer-motion";
import goal from "../assets/goals.svg";
import Reveal from "../animations/about/Reveal";
import { useLanguage } from "../providers/LanguageProvider";
import defaultImg from "../assets/defaultPhoto.png"
import brang from '../assets/members/brang.jpg'
import moeyan from '../assets/members/moeyan.jpg'
import thinesther from '../assets/members/thinesther.jpg'
import linpyae from '../assets/members/linpyae.jpg'
import helen from '../assets/members/helen.jpg'
import daniel from '../assets/members/daniel.jpg'
import shine from '../assets/members/shine.jpg'
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const About = () => {
  const { languageData } = useLanguage();

  const teamMembers = [
    {
      name: "Moe Yan",
      role: "Project Manager",
      description: "Leading the project with expertise and vision, ensuring everything runs smoothly.",
      image: moeyan,
      socialMedia: {
        facebook: "https://www.facebook.com/oggy.sullivan.3?mibextid=ZbWKwL",
        instagram: "link_to_instagram",
      },
    },
    {
      name: "Thin Esther",
      role: "Data Collector",
      description: "Responsible for gathering and analyzing user data to improve the app's performance and user experience.",
      image: thinesther,
      socialMedia: {
        facebook: "https://www.facebook.com/profile.php?id=100038074699967&mibextid=ZbWKwL",
        instagram: "link_to_instagram",
      },
    },
    {
      name: "Helen",
      role: "Frontend Developer",
      description: "Creating beautiful and functional user interfaces for an engaging user experience.",
      image: helen,
      socialMedia: {
        facebook: "https://www.facebook.com/su.t.maung.338?mibextid=ZbWKwL",
        instagram: "link_to_instagram",
      },
    },
    {
      name: "Arkar",
      role: "Frontend Developer",
      description: "Collaborating on the design and implementation of the app's frontend features.",
      image: daniel,
      socialMedia: {
        facebook: "https://www.facebook.com/profile.php?id=100034868821532&mibextid=ZbWKwL",
        instagram: "link_to_instagram",
      },
    },
    {
      name: "Brang Tsawm Aung",
      role: "Frontend Developer",
      description: "Enhancing the app's look and feel, ensuring a seamless user experience.",
      image: brang,
      socialMedia: {
        facebook: "https://www.facebook.com/ba.fa.7771?mibextid=ZbWKwL",
        instagram: "link_to_instagram",
      },
    },
    {
      name: "Shine Bo Bo",
      role: "Backend Developer",
      description: "Developing the server-side logic, database management, and ensuring the app's scalability.",
      image: shine,
      socialMedia: {
        facebook: "https://www.facebook.com/profile.php?id=100091415164259&mibextid=ZbWKwL",
        instagram: "link_to_instagram",
      },
    },
    {
      name: "Lin Pyae Aung",
      role: "Backend Developer",
      description: "Working on backend functionalities to support the app's core features and performance.",
      image: linpyae,
      socialMedia: {
        facebook: "https://www.facebook.com/lin.pyae.3139?mibextid=ZbWKwL",
        instagram: "link_to_instagram",
      },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="w-full mx-auto px-6 py-8"
    >
      <div className="about-page flex flex-col gap-6">
        <header className="about-header">
          <h1 className="text-3xl font-bold text-colortext-primary">
            {languageData.about.header.main}
          </h1>
          <p className="tagline text-gray-600 italic">
            "{languageData.about.header.subtitle}"
          </p>
        </header>

        <section className="app-purpose py-8" id="purpose">
          <div className="w-full flex items-center justify-start md:justify-center">
            <Reveal>
              <div className="header flex items-start md:items-center justify-center flex-col">
                <h2 className="section-title-01 text-[45px] leading-10 md:text-[50px] -mb-2 md:-mb-4">
                  {languageData.about.purpose.header}
                </h2>
                <h2 className="font-extrabold text-xl md:text-3xl text-colortext-primary">
                  {languageData.about.purpose.header}
                </h2>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <div className="mission-statement p-4 py-12 md:p-14 md:px-28 flex flex-col md:flex-row gap-14 md:gap-4 items-center justify-evenly">
                <div className="w-full flex items-center justify-center md:w-1/2 goalSVG">
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    // width="637.95669"
                    // height="480"
                    className="w-[200px] md:w-[300px]"
                    viewBox="0 0 637.95669 480"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M784.97835,518c-75.14014,0-134-13.6167-134-31,0-10.42188,20.856-19.7207,57.22-25.51123a1,1,0,1,1,.31445,1.9751C674.25789,468.919,652.97835,477.9375,652.97835,487c0,15.71973,60.44848,29,132,29s132-13.28027,132-29c0-9.10059-21.41553-18.14111-55.88965-23.59277a1.00008,1.00008,0,0,1,.3125-1.97559c36.59106,5.78662,57.57715,15.106,57.57715,25.56836C918.97835,504.3833,860.11848,518,784.97835,518Z"
                      transform="translate(-281.02165 -210)"
                      fill="#ccc"
                    />
                    <path
                      d="M718.49983,523.83838a76.98277,76.98277,0,0,0,133.1499-.33551A1211.97868,1211.97868,0,0,1,718.49983,523.83838Z"
                      transform="translate(-281.02165 -210)"
                      fill="#e6e6e6"
                    />
                    <path
                      d="M859.02034,502.12292a76.997,76.997,0,1,0-147.85742.79908A572.23317,572.23317,0,0,0,859.02034,502.12292Z"
                      transform="translate(-281.02165 -210)"
                      fill="#e6e6e6"
                    />
                    <path
                      d="M400.47835,219a9,9,0,1,0-12.5,8.29388V274h7V227.29388A9.00223,9.00223,0,0,0,400.47835,219Z"
                      transform="translate(-281.02165 -210)"
                      fill="#ccc"
                    />
                    <path
                      d="M450.98128,443h-.00293a20.02122,20.02122,0,0,1-19.9856-20.771c.40088-10.603,9.58106-19.229,20.46436-19.229h54.94458l45.2124-20.01514a5.00688,5.00688,0,0,1,6.596,2.54737l12.14428,27.43261a5.0062,5.0062,0,0,1-2.54785,6.59571L523.275,439.27441a35.4,35.4,0,0,1-14.00171,3.04639Z"
                      transform="translate(-281.02165 -210)"
                      fill="#ccc"
                    />
                    <path
                      d="M317.79549,548.34277a4.59492,4.59492,0,0,1-.77759-.0664L287.44783,543.23h.00024a4.49921,4.49921,0,0,1-3.65893-5.30127l23.14551-118.05078a19.49983,19.49983,0,0,1,38.44189,6.57227L322.191,544.70654A4.46977,4.46977,0,0,1,317.79549,548.34277Z"
                      transform="translate(-281.02165 -210)"
                      fill="#ccc"
                    />
                    <circle cx="20.95669" cy="346" r="18" fill="#e6e6e6" />
                    <circle
                      cx="108.27953"
                      cy="124.67717"
                      r="67"
                      fill="#e6e6e6"
                    />
                    <circle
                      cx="108.27953"
                      cy="124.67717"
                      r="67"
                      fill="#e6e6e6"
                    />
                    <circle
                      cx="108.27953"
                      cy="124.67717"
                      r="51"
                      className="fill-btnbg-primary"
                    />
                    <path
                      d="M395.26365,356.0861c-3.30591-.0918-7.42029-.20654-10.59-2.522a8.13275,8.13275,0,0,1-3.20007-6.07276,5.47084,5.47084,0,0,1,1.86035-4.49315c1.65552-1.39893,4.073-1.72706,6.67823-.96143L387.313,322.3112l1.98144-.27149,3.17322,23.19-1.65466-.75928c-1.91834-.87988-4.55164-1.32764-6.188.05517a3.51516,3.51516,0,0,0-1.15271,2.89551,6.14684,6.14684,0,0,0,2.38122,4.52783c2.46668,1.80176,5.74622,2.03418,9.46582,2.13819Z"
                      transform="translate(-281.02165 -210)"
                      fill="#2f2e41"
                    />
                    <rect
                      x="85.72051"
                      y="114.01237"
                      width="10.77161"
                      height="2"
                      fill="#2f2e41"
                    />
                    <rect
                      x="119.72051"
                      y="114.01237"
                      width="10.77161"
                      height="2"
                      fill="#2f2e41"
                    />
                    <path
                      d="M354.97835,335a51.01141,51.01141,0,0,1,43.26806-50.41675A50.99376,50.99376,0,1,0,397.4427,385.275,51.00412,51.00412,0,0,1,354.97835,335Z"
                      transform="translate(-281.02165 -210)"
                      opacity="0.2"
                    />
                    <path
                      d="M440.3011,548.5h-102a16.51868,16.51868,0,0,1-16.5-16.5V417a16.51868,16.51868,0,0,1,16.5-16.5h15.5V405a11.51294,11.51294,0,0,0,11.5,11.5h48a11.51294,11.51294,0,0,0,11.5-11.5v-4.5h15.5a16.51868,16.51868,0,0,1,16.5,16.5V532A16.51868,16.51868,0,0,1,440.3011,548.5Z"
                      transform="translate(-281.02165 -210)"
                      fill="#e6e6e6"
                    />
                    <path
                      d="M453.98714,659H413.97835V612.811l-52.251-80.11622,33.50439-21.85107,52.02247,79.76758a36.18943,36.18943,0,0,1,5.8789,19.16455Z"
                      transform="translate(-281.02165 -210)"
                      fill="#e6e6e6"
                    />
                    <path
                      d="M383.47835,689.5h-39v-117h39Z"
                      transform="translate(-281.02165 -210)"
                      fill="#e6e6e6"
                    />
                    <path
                      d="M432.3011,583.5h-86a8.50951,8.50951,0,0,1-8.5-8.5V543a8.50951,8.50951,0,0,1,8.5-8.5h86a8.50951,8.50951,0,0,1,8.5,8.5v32A8.50951,8.50951,0,0,1,432.3011,583.5Z"
                      transform="translate(-281.02165 -210)"
                      fill="#e6e6e6"
                    />
                    <path
                      d="M460.97835,677.5h-46.5v-31h46.5a15.5,15.5,0,0,1,0,31Z"
                      transform="translate(-281.02165 -210)"
                      fill="#ccc"
                    />
                    <path
                      d="M390.97835,689.5h-46.5v-31h46.5a15.5,15.5,0,0,1,0,31Z"
                      transform="translate(-281.02165 -210)"
                      fill="#ccc"
                    />
                    <path
                      d="M437.97835,451.5h-37a3.5,3.5,0,0,1,0-7h37a3.5,3.5,0,0,1,0,7Z"
                      transform="translate(-281.02165 -210)"
                      fill="#fff"
                    />
                    <path
                      d="M437.97835,464h-37a3.5,3.5,0,0,1,0-7h37a3.5,3.5,0,0,1,0,7Z"
                      transform="translate(-281.02165 -210)"
                      fill="#fff"
                    />
                    <path
                      d="M501.02165,690h-219a1,1,0,0,1,0-2h219a1,1,0,1,1,0,2Z"
                      transform="translate(-281.02165 -210)"
                      fill="#3f3d56"
                    />
                    <circle cx="291.95669" cy="184" r="18" fill="#e6e6e6" />
                    <path
                      d="M578.47835,466.5a6.00672,6.00672,0,0,1-6-6v-216a6,6,0,0,1,12,0v216A6.00672,6.00672,0,0,1,578.47835,466.5Z"
                      transform="translate(-281.02165 -210)"
                      fill="#3f3d56"
                    />
                    <path
                      d="M760.6385,240.34c-5.27-4.61005-23.37011-18.96-46.72021-21.58-17.46973-1.95-37.87988,2.66-58.04981,22.84-16.18017,16.18005-31.43994,23.85-45.35986,22.81-14.21045-1.06994-23.66016-11.17-28.03027-17.1a2.44334,2.44334,0,0,0-2.77-.88,2.46966,2.46966,0,0,0-1.73,2.38v74.66a2.50928,2.50928,0,0,0,1.43017,2.26c5.44971,2.58,25.07959,11.15,44.83985,11.15,11.58984,0,23.23974-2.95,32.08007-11.8.08985-.09.16993-.17005.25977-.25,15.66016-15.24,50.18018-12.11005,75.37012-7.13,10.41992,2.06,19.24023,4.43,24.47021,5.95a4.4928,4.4928,0,0,0,5.73975-4.32v-75.6A4.51348,4.51348,0,0,0,760.6385,240.34Z"
                      transform="translate(-281.02165 -210)"
                      className="fill-btnbg-primary"
                    />
                    <circle cx="519.95669" cy="234" r="9" fill="#fff" />
                    <circle cx="503.95669" cy="333" r="9" fill="#fff" />
                    <circle cx="474.95669" cy="265" r="15" fill="#fff" />
                  </svg>
                </div>
                <div className="w-full md:w-2/3 card bg-white p-10 relative">
                  <span className="bg-btnbg-primary p-2 px-3 text-sm w-2/3 md:w-auto flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2 text-colortext-third">
                    {languageData.about.purpose.card.title}
                  </span>
                  <p className="text-justify text-gray-600">
                    {languageData.about.purpose.card.body}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="goals p-4 flex flex-col gap-12 mt-5">
            <div className="flex items-center justify-start md:justify-center w-full">
              <Reveal>
                <div className="header flex items-start md:items-center justify-center flex-col">
                  <h2 className="section-title-01 leading-10 text-[50px] -mb-2 md:-mb-4">
                    {languageData.about.purpose.goal.header}
                  </h2>
                  <h2 className="font-extrabold text-xl md:text-3xl text-colortext-primary">
                    {languageData.about.purpose.goal.header}
                  </h2>
                </div>
              </Reveal>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-12 md:gap-4 items-center justify-evenly">
              <div className="w-full md:w-[40%]">
                <Reveal
                  duration={1}
                  hidden={{ opacity: 0, x: -300 }}
                  visible={{ opacity: 1, x: 0 }}
                >
                  <div className="relative flex flex-col items-center justify-center bg-white p-6 shadow-md hover:shadow-lg">
                    <span className="absolute -top-4 p-1 px-3 bg-btnbg-primary text-colortext-third uppercase text-sm font-semibold">
                      {languageData.about.purpose.goal.left.title}
                    </span>
                    <p className="text-justify">
                      <span className="text-colortext-primary font-medium">
                        {languageData.about.purpose.goal.left.body.create}
                      </span>
                      {languageData.about.purpose.goal.left.body.creatbody}
                    </p>
                    <p className="text-justify">
                      <span className="text-colortext-primary font-medium">
                        {languageData.about.purpose.goal.left.body.utilize}
                      </span>
                      {languageData.about.purpose.goal.left.body.utilizebody}
                    </p>
                  </div>
                </Reveal>
              </div>
              <div className="w-full md:w-[40%]">
                <Reveal
                  duration={1}
                  hidden={{ opacity: 0, x: 300 }}
                  visible={{ opacity: 1, x: 0 }}
                >
                  <div className="relative flex flex-col items-center justify-center bg-white p-6 shadow-md hover:shadow-lg">
                    <span className="absolute -top-4 p-1 px-3 bg-btnbg-primary text-colortext-third uppercase text-sm font-semibold">
                      {languageData.about.purpose.goal.right.title}
                    </span>
                    <p className="text-justify">
                      <span className="text-colortext-primary font-medium">
                        {languageData.about.purpose.goal.right.body.offer}
                      </span>
                      {languageData.about.purpose.goal.right.body.offerbody}
                    </p>
                    <p className="text-justify">
                      <span className="text-colortext-primary font-medium">
                        {languageData.about.purpose.goal.right.body.foster}
                      </span>
                      {languageData.about.purpose.goal.right.body.fosterbody}
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="features-overview flex flex-col items-center justify-center gap-6 p-8 px-4 md:px-8 ">
          <Reveal>
            <div className="header w-full flex items-start md:items-center justify-center flex-col">
              <h2 className="section-title-01 text-[40px] leading-10 md:text-[50px] -mb-2 md:-mb-4">
                Overview of Features
              </h2>
              <h2 className="font-extrabold text-xl md:text-2xl text-colortext-primary">
                Features
              </h2>
            </div>
            <div className="features w-full py-8 md:p-6">
              <ul className="p-6 px-6 w-full bg-colorbg-secondary flex flex-col gap-2">
                <li>
                  Smart Matching Algorithm: Our advanced algorithm matches you
                  with users who share your interests and values.
                </li>
                <li>
                  Secure Chat: Private messaging to help you get to know your
                  matches better.
                </li>
                <li>
                  Customizable Profiles: Showcase your personality and
                  preferences.
                </li>
                <li>
                  Advanced Search Filters: Find potential matches based on
                  location, age, interests, and more.
                </li>
              </ul>
            </div>
          </Reveal>
        </section>

        <section className="how-it-works flex flex-col items-center justify-center gap-6 p-0 md:p-6">
          <h2 className="text-2xl font-semibold text-colortext-primary w-full flex items-center justify-center">
            How It Works
          </h2>
          <Reveal>
            <ol className="px-2 md:px-6 w-full md:w-[700px] list-none flex flex-col gap-4">
              <li className="flex items-center justify-start gap-5">
                <span className="w-10 h-10 bg-red-500 flex items-center justify-center text-lg font-bold text-colortext-third">
                  1
                </span>
                <p className="text-sm md:text-md">
                  <strong className="text-colortext-primary text-lg">
                    Sign Up:
                  </strong>{" "}
                  Create an account quickly using your email or social media.
                </p>
              </li>
              <li className="flex items-center justify-start gap-5">
                <span className="w-10 h-10 bg-green-500 flex items-center justify-center text-lg font-bold text-colortext-third">
                  2
                </span>
                <p className="text-sm md:text-md">
                  <strong className="text-colortext-primary text-lg">
                    Build Your Profile:
                  </strong>{" "}
                  Add details about yourself and what you're looking for.
                </p>
              </li>
              <li className="flex items-center justify-start gap-5">
                <span className="w-10 h-10 bg-yellow-500 flex items-center justify-center text-lg font-bold text-colortext-third">
                  3
                </span>
                <p className="text-sm md:text-md">
                  <strong className="text-colortext-primary text-lg">
                    Sign Up:
                  </strong>{" "}
                  Create an account quickly using your email or social media.
                </p>
              </li>
              <li className="flex items-center justify-start gap-5">
                <span className="w-10 h-10 bg-purple-500 flex items-center justify-center text-lg font-bold text-colortext-third">
                  4
                </span>
                <p className="text-sm md:text-md">
                  <strong className="text-colortext-primary text-lg">
                    Find Matches:
                  </strong>{" "}
                  Browse profiles and use our matching algorithm to find the
                  best matches.
                </p>
              </li>
              <li className="flex items-center justify-start gap-5">
                <span className="w-10 h-10 bg-pink-500 flex items-center justify-center text-lg font-bold text-colortext-third">
                  5
                </span>
                <p className="text-sm md:text-md">
                  <strong className="text-colortext-primary text-lg">
                    Chat and Connect:
                  </strong>{" "}
                  Start conversations with your matches.
                </p>
              </li>
            </ol>
          </Reveal>
        </section>

        <section className="get-started-planning py-16 " id="planning">
          <div className="w-full flex items-center justify-center ">
            <Reveal>
              <div className="flex items-start md:items-center justify-center flex-col ">
                <h2 className="section-title-01 text-[40px] leading-10 md:text-[50px] overflow-visible -mb-2 md:-mb-4">
                  Get Started & Planning
                </h2>
                <h2 className="font-extrabold text-xl md:text-2xl text-colortext-primary ">
                  Get Started & Planning
                </h2>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="sdlc px-4 p-8">
              <h3 className="text-lg font-semibold">SDLC: Agile Model</h3>
              <p>
                We follow the Agile development model, which allows us to
                continuously improve and quickly deliver new features. Our
                development is divided into four iterations:
              </p>
              <div className="iterations p-4">
                <div className="iteration mb-4">
                  <h4 className="text-lg font-semibold">First Iteration:</h4>
                  <ul className="list-disc pl-4">
                    <li>
                      Implement Login, Sign-in, and Sign-up functionalities.
                    </li>
                    <li>Collect user data and create user profiles.</li>
                    <li>
                      Develop matching algorithms to connect users based on
                      their preferences.
                    </li>
                  </ul>
                </div>
                <div className="iteration mb-4">
                  <h4 className="text-lg font-semibold">Second Iteration:</h4>
                  <ul className="list-disc pl-4">
                    <li>Create the Admin Dashboard for better management.</li>
                    <li>
                      Implement other mini features to enhance user experience.
                    </li>
                  </ul>
                </div>
                <div className="iteration mb-4">
                  <h4 className="text-lg font-semibold">Third Iteration:</h4>
                  <ul className="list-disc pl-4">
                    <li>
                      Develop the Chatting Workspace to enable users to
                      communicate with each other.
                    </li>
                  </ul>
                </div>
                <div className="iteration mb-4">
                  <h4 className="text-lg font-semibold">Fourth Iteration:</h4>
                  <ul className="list-disc pl-4">
                    <li>Set up Website Settings.</li>
                    <li>Create the About Us page.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="team" id="team">
          <div className="header w-full flex items-center justify-center flex-col">
            <h2 className="section-title-01 text-[55px] -mb-8">Cupidy Team</h2>
            <h2 className="font-extrabold text-3xl text-colortext-primary">
              Cupidy Team
            </h2>
          </div>
          <div className="team-members mt-12 p-4 flex flex-wrap w-full items-start justify-center gap-6">
            {teamMembers.map((member, index) => (
               <Reveal
                duration={1}
                delay={ .1 * index}
                hidden={{ opacity: 0, x: 300 }}
                visible={{ opacity: 1, x: 0 }}
              >
              <div
                key={index}
                className="member w-[230px] mb-4 bg-white p-3 py-8 flex flex-col gap-3 items-center justify-center"
              >
                {member.image && (
                  <img
                    src={member.image}
                    className="w-[120px]  h-[120px] rounded-full object-cover"
                    alt={member.name}
                  />
                )}
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p>{member.role}</p>
                {/* <p className="text-center text-sm">{member.description}</p> */}
                <div className="socialMediaIcon flex gap-6 mt-2">
                {member.socialMedia?.facebook && (
                  <a 
                    href={member.socialMedia.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-[#1862eb] text-2xl cursor-pointer" />
                  </a>
                )}
                {member.socialMedia?.instagram && (
                  <a 
                    href={member.socialMedia.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <BsInstagram className="text-[#ff672b] text-2xl cursor-pointer" />
                  </a>
                )}
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="safety-privacy" id="safety">
          <div className="header w-full flex items-center justify-center flex-col">
            <h2 className="section-title-01 text-[55px] -mb-8">
              Safety and Privacy
            </h2>
            <h2 className="font-extrabold text-3xl text-colortext-primary">
              Safety and Privacy
            </h2>
          </div>
          <h2 className="text-xl text-colortext-primary font-semibold">
            Safety and Privacy
          </h2>
          <div className="safety-tips p-4">
            <h3 className="text-lg font-semibold">Safety Tips</h3>
            <ul className="list-disc pl-4">
              <li>
                Do not share personal information like your home address or
                financial details.
              </li>
              <li>Always meet in public places for your initial dates.</li>
              <li>Trust your instincts and report any suspicious behavior.</li>
            </ul>
          </div>
          <div className="privacy-policy p-4">
            <h3 className="text-lg font-semibold">Privacy Policy</h3>
            <p>
              At Cupidy, your privacy is our priority. We are committed to
              safeguarding your personal data.
              <a
                href="/privacy-policy"
                className="text-colortext-primary underline"
              >
                Read our full Privacy Policy here.
              </a>
            </p>
          </div>
        </section>

        <section className="faqs" id="faq">
          <div className="header w-full flex items-center justify-center flex-col">
            <h2 className="section-title-01 text-[55px] -mb-8">FAQ</h2>
            <h2 className="font-extrabold text-3xl text-colortext-primary">
              FAQ
            </h2>
          </div>
          <h2 className="text-xl text-colortext-primary font-semibold">
            Frequently Asked Questions
          </h2>
          <div className="faq-items p-4">
            <div className="faq-item mb-4">
              <h3 className="text-lg font-semibold">
                How do I create an account?
              </h3>
              <p>
                Sign up with your email or social media account and follow the
                prompts to build your profile.
              </p>
            </div>
            <div className="faq-item mb-4">
              <h3 className="text-lg font-semibold">Is Cupidy free to use?</h3>
              <p>
                Yes, Cupidy offers basic features for free. Premium features are
                available through subscription plans.
              </p>
            </div>
            <div className="faq-item mb-4">
              <h3 className="text-lg font-semibold">
                How can I report a user?
              </h3>
              <p>
                Use the 'Report' button on the user's profile or contact our
                support team.
              </p>
            </div>
            <div className="faq-item mb-4">
              <h3 className="text-lg font-semibold">
                What if I forget my password?
              </h3>
              <p>
                Click on 'Forgot Password' on the login page and follow the
                instructions to reset it.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-information" id="contact">
          <div className="header w-full flex items-center justify-center flex-col">
            <h2 className="section-title-01 text-[55px] -mb-8">
              Contact Information
            </h2>
            <h2 className="font-extrabold text-3xl text-colortext-primary">
              Contact Information
            </h2>
          </div>
          <div className="support-feedback p-4">
            <h3 className="text-lg font-semibold">Support and Feedback</h3>
            <p>
              Need help or want to share your thoughts? Visit our
              <a href="/support" className="text-colortext-primary underline">
                {" "}
                Support Page{" "}
              </a>
              or email us at
              <a
                href="mailto:cupidyhepta@gmail.com"
                className="text-colortext-primary underline"
              >
                {" "}
                cupidyhepta@gmail.com
              </a>
              . We love hearing from you and appreciate your feedback!
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
