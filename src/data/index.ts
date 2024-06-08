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
    nameImg: "/images/techstack/name/mongo.png",
  },
  {
    name: "NextJs",
    img: "/images/techstack/no-name/next.svg",
    nameImg: "/images/techstack/name/next.svg",
  },
  {
    name: "MongoDB",
    img: "/images/techstack/no-name/mongo.svg",
    nameImg: "/images/techstack/name/mongo.png",
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
