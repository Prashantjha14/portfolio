import React from "react";
import MagicButton from "@/components/ui/MagicButton";
import { socialMedia } from "@/data";
import { Icons } from "../shared/Icons";
import Image from "next/image";
import Link from "next/link";

const CurrentYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mb-[100px] w-full pb-10 md:mb-5" id="footer">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <a href="mailto:prashant.jha.14@outlook.com">
          <MagicButton
            title="Let's get in touch"
            icon={<Icons.send />}
            position="right"
          />
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between border-t pt-5 dark:border-white/5 md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright &copy; <CurrentYear /> Prashant
        </p>

        <div className="mt-5 flex items-center gap-6 md:mt-0 md:gap-3">
          {socialMedia.map(({ id, name, img, link }) => (
            <div
              key={id}
              className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-[0.75] saturate-150 backdrop-blur-lg"
            >
              <Link href={link} target="_blank">
                <Image src={img} alt={name} width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
