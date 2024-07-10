"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { navItems } from "@/data";
import Link from "next/link";
import MobileNav from "./MobileNav";
import BlogButton from "./BlogButton";
import { getPosts } from "@/lib/actions/requests";
import type { PostMetadata } from "@/types/hashnode";

const NavBar = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [allPosts, setAllPosts] = useState<
    { node: PostMetadata; cursor: string }[] | null
  >(null);

  useEffect(() => {
    async function fetchPosts() {
      setAllPosts(await getPosts({ first: 2 }));
    }

    fetchPosts();
  }, []);

  const toggleNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-130%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ cursor: "auto" }}
      className="fixed inset-x-0 top-0 z-[1000] mx-auto max-w-6xl border border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:inset-x-6 md:top-6 md:rounded-2xl"
    >
      <div className="flex items-center justify-between gap-1 p-5">
        <span
          className="pointer-events-none absolute z-0 grid size-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 text-2xl"
          style={{
            opacity: 0,
            transform: "scale(0) translateX(-50%) translateY(-50%)",
            top: 4,
            left: 276,
          }}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </span>
        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
                {item.name}
              </span>
              <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
        <span className="pointer-events-none relative left-0 top-1/2 z-10 text-4xl font-black text-white mix-blend-overlay lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          Prashant.
        </span>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <BlogButton allPosts={allPosts} />
          </div>
          <Link href="#footer">
            <button className="relative scale-100 overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 px-4 py-2 font-medium text-white transition-transform hover:scale-105 active:scale-95">
              Contact
            </button>
          </Link>
          <button
            className="ml-2 block scale-100 text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 lg:hidden"
            onClick={toggleNav}
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileNavOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className="block h-14 overflow-hidden transition-[height] duration-300 ease-in-out lg:hidden"
        style={{
          height: isMobileNavOpen ? "56px" : 0,
        }}
      >
        <MobileNav />
      </div>
    </motion.nav>
  );
};

export default NavBar;
