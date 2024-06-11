"use client";
import React, { useState, useEffect } from "react";
import { CoolMode } from "@/components/ui/CoolMode";
import ShimmerButton from "../ui/ShimmerButton";
import { getCount, increaseCounter } from "@/lib/actions/clickGame.action";
import NumberTicker from "../ui/NumberTicker";

const ClickGame = () => {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const { count } = await getCount();
        setCount(count);
      } catch (error) {
        console.error("Failed to fetch count:", error);
      }
    };

    fetchCount();
  }, []);

  const increaseCount = async () => {
    try {
      if (disabled) return;

      setDisabled(true);
      const { count: newCount } = await increaseCounter();
      setCount(newCount);
      setDisabled(false);
    } catch (error) {
      console.error("Failed to increase count:", error);
    }
  };

  return (
    <section className="my-16 flex flex-col items-center py-5 text-center italic">
      <div>
        <h3 className="mt-5 text-lg text-gray-300 sm:text-2xl">
          People have clicked this button{" "}
          <span className="font-bold">
            <NumberTicker value={count} direction="up" />
          </span>{" "}
          times! Join them by clicking now!
        </h3>
      </div>

      <div className="mt-8 md:mt-16">
        <CoolMode>
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
