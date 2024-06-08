import React from "react";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import { Icons } from "../shared/Icons";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <p className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi! I&apos;m <span className="font-bold text-purple">Prashant</span>
            , a Next.js Developer based in India.
          </p>

          <a href="#about">
            <MagicButton
              title="Get My Resume"
              icon={<Icons.download />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
