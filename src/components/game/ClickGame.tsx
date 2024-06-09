"use client";
import React, { useState } from "react";
import { CoolMode } from "@/components/ui/CoolMode";
import ShimmerButton from "../ui/ShimmerButton";

const ClickGame = () => {
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(0);

  const increaseCount = async () => {
    setDisabled(true);
    setCount(count + 1);
    setDisabled(false);
  };

  return (
    <section className="my-16 py-5 text-center italic md:flex md:justify-between">
      <div>
        <h3 className="desc">
          This button has been clicked {count} times! Join the game by clicking
          now.
        </h3>
      </div>

      <div className="mt-8 md:mt-0 md:self-end">
        <CoolMode
          options={{
            particle:
              "https://cdn.vox-cdn.com/thumbor/wfbQ3XccV6SxGMt1l6zBPL3Xg7o=/0x0:1192x795/1400x1050/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg",
          }}
        >
          <ShimmerButton
            className="shadow-2xl"
            onClick={increaseCount}
            disabled={disabled}
          >
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Click me!
            </span>
          </ShimmerButton>
        </CoolMode>
      </div>
    </section>
  );
};

export default ClickGame;
