"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BlogButton = () => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <>
      <button
        onMouseEnter={() => setSelected(true)}
        onMouseLeave={() => setSelected(false)}
        className="group relative block scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
      >
        <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
          Blog.
        </span>
        <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
      </button>
      <AnimatePresence>
        {selected && <Content setSelected={setSelected} />}
      </AnimatePresence>
    </>
  );
};

export default BlogButton;

const Content = ({
  setSelected,
}: {
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute right-0 top-[calc(100%_+_0px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <Bridge />
      <Nub />

      <div className="overflow-hidden">
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <Blog />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute inset-x-0 top-[-20px] h-[20px]" />
);

const Nub = () => {
  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      className="absolute right-[40%] top-0 size-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/4.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/5.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        {/* <FiArrowRight /> */}
      </button>
    </div>
  );
};
