import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export const services = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>Tailwind</b> ,<b>React.js</b>  <b>Next Js </b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust  REST API using   <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages = [
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Redux ",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Next Js",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "68",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind",
    level: "75",
  },
];

export const tools = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects = [
  {
    id: 1,
    name: "Borkha Shop",
    description:
      "A full-stack single-page eCommerce web app where user can buy the product",
    image_path: "/images/project.png",
    deployed_url: "https://borkha-shop-6ry3.onrender.com/",
    github_url: "https://github.com/abdul-dulal/borkah-shop",
    category: ["mongo"],
    key_techs: [
      "React",
      "Redux",
      "Tailwind",
      "Express",
      "Node",
      "MongoDB",
      "Stripe",
      "JWT",
    ],
  },
  {
    id: 2,
    name: "Ass-sunnah-foundation",
    image_path: "/images/ass.png",
    deployed_url: "https://asssunnah-foundation.vercel.app/",
    github_url: "https://github.com/abdul-dulal/asssunnah-foundation-clone",
    category: ["mongo"],
    description:
      "A full-stack single-page Inventory management system web app where user Update quantity and add new quantity",

    key_techs: ["React", "firebase", "Node", "Express", "Mongo"],
  },
  {
    id: 3,
    name: "Tools Shop",
    description:
      "A full-stack single-page eCommerce web app where user can buy the product",
    image_path: "/images/tools-shop.png",
    deployed_url: "https://tools-shop-theta.vercel.app/",
    github_url: "https://github.com/abdul-dulal/tools-shop",
    category: ["mongo"],
    key_techs: [
      "React",
      "Tailwind",
      "Node",
      "Express",
      "Mongo",
      "Role based authentication",
    ],
  },

  {
    id: 4,
    name: "h2g",
    image_path: "/images/h2g.png",
    deployed_url: "https://h2g-startup.netlify.app/",
    github_url: "https://github.com/abdul-dulal/h2g",
    category: ["react"],
    description: "Egency Portfolio single page web application",
    key_techs: ["React", "Tailwind"],
  },

  {
    id: 5,
    name: "Red-onion",
    image_path: "/images/red.png",
    deployed_url: "https://red-onion-a5d19.web.app/",
    github_url: "https://github.com/abdul-dulal/red-onion",
    category: ["node", "react"],
    description: "Food Delivery application",
    key_techs: ["React", "Node", "Express"],
  },

  {
    id: 6,
    name: "Portfolio",
    image_path: "/images/portfolio.png",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["next"],
    description: "My Portfolio",
    key_techs: ["Next Js", "Tailwind"],
  },
];
