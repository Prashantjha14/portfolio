import React from "react";
import TechStackCircles from "./TechStackCircles";
import { techStack } from "@/data";
import Image from "next/image";
import Marquee from "@/components/ui/Marquee";
import Heading from "../shared/Heading";

const About = () => {
  return (
    <section className="border-b border-neutral-900 pb-4" id="about">
      <Heading text="About" colorText="Me" />
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <TechStackCircles />
          </div>
        </div>
        <div className="w-full self-center lg:w-1/2">
          <div className="flex items-center justify-center lg:justify-start">
            <p className="desc my-2 max-w-xl py-6 text-center">
              Hi, I&apos;m Prashant, a Next.js Developer with an insatiable
              passion for creating things that matter. I blend the sweetness of
              intuitive design with the salty grit of robust functionality. My
              tech stack? React.js, Next.js, MongoDB, and TailwindCSS.
              Let&apos;s build something amazing together!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
        <Marquee pauseOnHover className="[--duration:20s]">
          {techStack.map(({ id, name, img, nameImg }) => (
            <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
              <Image
                src={img}
                alt={name}
                className="w-5 md:w-10"
                width={40}
                height={40}
              />
              <Image
                src={nameImg}
                alt={name}
                className="w-20 md:w-24"
                width={80}
                height={40}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default About;
