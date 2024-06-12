export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
].map((item, idx) => ({ ...item, id: idx + 1 }));

export const techStack = [
  {
    name: "NextJs",
    img: "/images/techstack/no-name/next.svg",
    nameImg: "/images/techstack/name/next.svg",
  },
  {
    name: "MongoDB",
    img: "/images/techstack/no-name/mongo.svg",
    nameImg: "/images/techstack/name/mongo.svg",
  },
  {
    name: "NextJs",
    img: "/images/techstack/no-name/next.svg",
    nameImg: "/images/techstack/name/next.svg",
  },
  {
    name: "MongoDB",
    img: "/images/techstack/no-name/mongo.svg",
    nameImg: "/images/techstack/name/mongo.svg",
  },
].map((item, idx) => ({ ...item, id: idx + 1 }));

export const testimonials = [
  {
    name: "Ethan Pollack",
    quote:
      "Prashant's expertise in Next.js and React.js brought our project to life with exceptional quality and seamless functionality.",
    profession: "Software Developer",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    name: "Aiko",
    profession: "Project Manager",
    quote:
      "Prashant's attention to detail and ability to integrate intuitive design with robust functionality made our collaboration a great success.",
    image: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a",
  },
  {
    name: "Alena Zhukova",
    profession: "UX Designer",
    quote:
      "Prashant's work with Next.js and TailwindCSS was outstanding, delivering an amazing user experience with beautiful design.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Lisa Kemp",
    profession: "Data Scientist",
    quote:
      "Prashant's problem-solving skills and deep understanding of MongoDB and TailwindCSS were crucial in the success of our project.",
    image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574",
  },
  {
    name: "Saud",
    profession: "Game Developer",
    quote:
      "Prashant provided creative solutions and delivered high-quality results on time, making use of React.js and Next.js.",
    image: "https://images.unsplash.com/photo-1645830166230-187caf791b90",
  },
  {
    name: "Paula Smith",
    profession: "UX Designer",
    quote:
      "It was a pleasure working with Prashant. His passion for creating meaningful projects was evident in every aspect of his work with Next.js and React.js.",
    image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa",
  },
].map((item, idx) => ({ ...item, id: idx + 1 }));

export const socialMedia = [
  {
    name: "Github",
    img: "/images/social/github.svg",
    link: "https://github.com/Prashantjha14",
  },
  {
    name: "Twitter",
    img: "/images/social/twit.svg",
    link: "https://x.com/Prashantjha140",
  },
  {
    name: "LinkedIn",
    img: "/images/social/link.svg",
    link: "https://www.linkedin.com/in/prashantjha14",
  },
  {
    name: "Instagram",
    img: "/images/social/insta.svg",
    link: "https://www.instagram.com/prashantjha.14/",
  },
  {
    name: "Discord",
    img: "/images/social/disc.svg",
    link: "https://discord.com/users/962974774554918982",
  },
].map((item, idx) => ({ ...item, id: idx + 1 }));

export const gridItems = [
  {
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/SVGs/b1.svg",
    spareImg: "",
  },
  {
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    title: "Current Studies",
    description: "Things I am learning",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/SVGs/grid.svg",
    spareImg: "/SVGs/b4.svg",
  },

  {
    title: "Currently building a StackOverflow clone",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/SVGs/b5.svg",
    spareImg: "/SVGs/grid.svg",
  },
  {
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
].map((item, idx) => ({ ...item, id: idx + 1 }));

export const leftListsCurrentLearning = ["Redux", "Discord.js", "Typescript"];
export const rightListsCurrentLearning = ["Unit Testing", "Docker", "GraphQL"];
