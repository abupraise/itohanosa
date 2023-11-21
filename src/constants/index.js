import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Spatial Analyst",
    icon: web,
  },
  {
    title: "Remote Sensing Analyst",
    icon: mobile,
  },
  {
    title: "Project Manager",
    icon: backend,
  },
  {
    title: "Database Manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "The Nigerian Geological Survey Agency",
    company_name: "Graduate Trainee",
    icon: starbucks,
    iconBg: "#fff",
    date: "Oct 2014 - Aug 2015",
    points: [
      "Assisting senior geologists in conducting field surveys and collecting geological samples.",
      "Processing and interpreting geological data using specialized software",
      "Compiling findings into detailed reports, charts, and maps",
      "Assisting in various lab tests and sample analyses",
      "Collaborating with interdisciplinary teams, including geophysics and environmental science departments"
    ],
  },
  {
    title: "German Aerospace Agency (DLR)",
    company_name: "Trainee",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Oct 2018 - Nov 2018",
    points: [
      "Collecting and processing remote sensing data from various satellite and airborne platforms.",
      "Analyzing satellite images and extracting relevant geospatial information.",
      "Developing and optimizing tools and algorithms for remote sensing data processing.",
      "Integrating geospatial data into various GIS platforms and ensuring data consistency.",
    ],
  },
  {
    title: "European Union",
    company_name: "Intern",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2019 - Apr 2020",
    points: [
      "Supporting the planning, coordination, and execution of EC projects and initiatives.",
      "Conducting research on pertinent EU policies and presenting findings.",
      " Participating actively in team meetings and workshops.",
      "Engaging with both internal and external stakeholders to facilitate communication.",
    ],
  },
  {
    title: "The Julius Maximilians University of Würzburg",
    company_name: "Scientific Researcher",
    icon: meta,
    iconBg: "#fff",
    date: "Sep 2020 - Present",
    points: [
      "Guiding and mentoring junior researchers, students, or interns involved in the research project.",
      "Designing and planning research experiments or studies in alignment with the department's objectives.",
      "Analyzing and interpreting data using appropriate statistical and analytical tools.",
      "Collaborating with fellow researchers, faculty members, and external partners to enhance the quality and impact of research.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to create a GIS analysis and remote sensing visualization as detailed as our data, but Itohan-osa proved me wrong.",
    name: "Sara Lee",
    designation: "Research Officer",
    company: "IET",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a GIS analyst and researcher who truly cares about their project's outcomes like Itohan-osa does.",
    name: "Chris Brown",
    designation: "Data Analyst",
    company: "EGIS",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Itohan-osa optimized our GIS data analysis, our accuracy increased by 50%. We can't thank her enough!",
    name: "Lisa Wang",
    designation: "CRO",
    company: "Earth Agency",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "The Push-Pull Effects of Rural African Industries",
    description:
      "This poster was created as part of our MIGRAWARE project, funded by the Federal Ministry of Education and Research. It was created to inform the public at the Africa Festival in Würzburg, a large festival on African music, and to get people talking.",
    tags: [
      {
        name: "research",
        color: "blue-text-gradient",
      },
      {
        name: "poster",
        color: "blue-text-gradient",
      },
      {
        name: "migraware",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.researchgate.net/publication/371912205_The_push-pull_effects_of_rural_African_Industries",
  },
  {
    name: "Migrants: The Pull Effects of Rural Industrial Sites as seen From Space",
    description:
      "Rural West Africa attracts industries due to raw materials and cheap labor. Nigeria's oil and Ghana's gold spur migration, stressing resources and affecting migrant livelihoods.",
    tags: [
      {
        name: "research",
        color: "blue-text-gradient",
      },
      {
        name: "sensing",
        color: "blue-text-gradient",
      },
      {
        name: "industrialsite",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://researchgate.net/publication/361073463_Migrants_the_pull_effects_of_rural_industrial_sites_as_seen_from_space",
  },
  {
    name: "Rainfall Variability in Nigeria's Rainy Season.",
    description:
      "Nigeria's rainfall is influenced by global oscillations and ocean temperatures, causing regional variations. Northern Nigeria sees more rain, southeast experiences a decrease.",
    tags: [
      {
        name: "remotesensing",
        color: "blue-text-gradient",
      },
      {
        name: "research",
        color: "blue-text-gradient",
      },
      {
        name: "rainfall",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://researchgate.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
