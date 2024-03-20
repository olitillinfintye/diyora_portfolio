// import images
import Hero_person from "./assets/images/Hero/didi.jpg";

import ps from "./assets/images/Skills/ps.png";
import ae from "./assets/images/Skills/ae.png";
import pr from "./assets/images/Skills/pr.png";
import al from "./assets/images/Skills/light.png";
import canva from "./assets/images/Skills/canva.png";
import capcut from "./assets/images/Skills/capcut1.png";
import picsart from "./assets/images/Skills/picsart.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img3.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/didi1.jpg";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/didi1.jpg";
import Hireme_person2 from "./assets/images/Hireme/didi1.jpg";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Motion Designer",
    // firstName: "DIYORA",
    LastName: "DIYORA",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "5+",
        text: "Years of Experinse in Motion Designer",
      },
      {
        count: "15+",
        text: "Logo Animations",
      },
      {
        count: "125+",
        text: "Video Ads",
      },
       {
        count: "12+",
        text: "Social Media Videos",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "After Effect",
        para: "Lorem ipsum text  dummy",
        logo: ae,
      },
      {
        name: "Premiere Pro",
        para: "Lorem ipsum text  dummy",
        logo: pr,
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "Lightroom",
        para: "Lorem ipsum text  dummy",
        logo: al,
      },
      {
        name: "Canva",
        para: "Lorem ipsum text  dummy",
        logo: canva,
      },
      {
        name: "Capcut",
        para: "Lorem ipsum text  dummy",
        logo: capcut,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Promotional Video",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "Logo Animation",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "Video Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Logo Animation",
        image: project1,
      },
      {
        title: "Social Media Videos",
        image: project2,
      },
      {
        title: "Youtube Video",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Thanks to your efforts, i started receving more calls with real orders, Thank you, Diyora!”",
        img: avatar1,
        name: "Amber Taylor",
      },
      {
        review:
          "“Di, your advertising videos with my brand reached the people around me so much, and on my reels on instagram, there were more than 10k views! i'm delighted, 5 star for you, smart girl!”",
        img: avatar2,
        name: "Martin Harris",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "didira@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "didira_top",
        icon: BsInstagram,
        link: "https://www.instagram.com/didira_top/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
