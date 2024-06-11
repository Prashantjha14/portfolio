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

export const socialMedia = [
  {
    img: "/git.svg",
  },
  {
    img: "/twit.svg",
  },
  {
    img: "/link.svg",
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
