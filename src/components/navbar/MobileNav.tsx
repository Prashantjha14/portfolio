import { navItems } from "@/data";
import Link from "next/link";
import React from "react";

const MobileNav = () => {
  return (
    <div className="flex items-center justify-between px-4 pb-4">
      <div className="flex items-center gap-4">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="text-white/90 transition-colors hover:text-white"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <button className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
        <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
          Blog.
        </span>
        <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
      </button>
    </div>
  );
};

export default MobileNav;
