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
      title: "Blender Developer",
      icon: web,
    },
    {
      title: "Musician",
      icon: mobile,
    },
    {
      title: "Video Editor",
      icon: backend,
    },
    {
      title: "VFX Artist",
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
      title: "School",
      company_name: "St.Meera's School",
      icon: starbucks,
      iconBg: "#f1f1f1ff",
      date: "May - 2019",
      points: [
        "10th Standard",
      ],
    },
    {
      title: "Pre University",
      company_name: "St, Micheal PU college",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June-2019 to August-2021",
      points: [
        "2nd PUC"
      ],
    },
    {
      title: "Bachelor's",
      company_name: "St.Joseph University",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
       "Bachelors of Vocational communication in Digital media and Animation"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I feel like this: Whatever is in your path and in your heart, you need to do.",
      name: "J.Cole",
      designation: "Rapper",
      company: "Dreamville",
      image: "https://magazine.weverse.io/upload/img/202304/20230405DF9cc46.png",
    },
    {
      testimonial:
        "Call unto me, I'll answer you and I'll tell youb wonderful and marvelous things that you know nothing about",
      name: "Jeremiah",
      designation: "Prophet",
      company: "Bible",
      image: "https://images.oca.org/icons/lg/may/0501jeremiah-prophet.jpg",
    },
    {
      testimonial:
        "God has given us two hands, one to receive with and the other to give with.",
      name: "Billy Graham",
      designation: "Pastor",
      company: "BillyGraham",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYISd9Zi37AQgVY19mtKu2hmrJ7t0N6EAr8IR0e9PGWU-1nFHzg9M6iBUo1SJszzjsLJem3kki-6H4ChWNKR3OtvY48abuohsY__yDoNA",
    },
  ];
  
  const projects = [
    {
      name: "Solar Planets",
      description:
        "Andriod based Platforms Solar Planets",
      tags: [
        {
          name: "Solar",
          color: "blue-text-gradient",
        },
        {
          name: "planets",
          color: "green-text-gradient",
        },
        {
          name: "Github",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/telildavin/Solar_planets_18.git",
    },
    {
      name: " Visiting Card ",
      description:
        "Augemented Reality Visiting Card developed in Coding",
      tags: [
        {
          name: "AR",
          color: "blue-text-gradient",
        },
        {
          name: "github",
          color: "green-text-gradient",
        },
        {
          name: "coding",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://telildavin.github.io/telil-Visting-Card-1-/",
    },
    {
      name: "AR FLasch Cards",
      description:
        "augmented reality alphabet F,G,H for Kids",
      tags: [
        {
          name: "git",
          color: "blue-text-gradient",
        },
        {
          name: "cards",
          color: "green-text-gradient",
        },
        {
          name: "AR",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://telildavin.github.io/AR_Flashcard_Telil_Davin-18/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };