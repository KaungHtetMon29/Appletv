"use client";
import { useEffect, useRef, useState } from "react";
import { Btn } from "../../components/Buttons/Btn";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative ">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.video
          autoPlay
          loop
          muted
          className="fixed top-0 xl:w-fit xl:left-auto lg:-left-2/4 lg:w-auto min-w-full h-none  max-w-none z-0"
        >
          <source
            src="https://www.apple.com/105/media/us/apple-tv-plus/2022/4114721e-12d2-4260-87c4-678589d5f804/anim/supercut/large.mp4"
            type="video/mp4"
          />
        </motion.video>
      </motion.div>

      <div className="top-0 2xl:max-w-7xl xl:max-w-5xl lg:max-w-2xl flex flex-col mx-auto gap-y-64 py-44 relative z-30">
        <div className="lg:gap-y-8 flex flex-col xl:gap-y-4">
          <div className="flex flex-col ">
            <h1 className="2xl:text-8xl xl:text-8xl lg:text-6xl font-bold 2xl:leading-normal xl:leading-normal">
              All Apple Original.
              <br /> Only on Apple TV+.
            </h1>
          </div>
          <div className="h-16 w-52 text-xl flex font-medium">
            <Btn txt="Stream Now" />
          </div>
        </div>

        <div className="flex flex-col gap-y-16 font-bold 2xl:text-6xl xl:text-6xl lg:text-4xl">
          <motion.p
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ y: 100, opacity: 0 }}
          >
            New Apple Originals every month.
          </motion.p>
          <motion.p
            className="leading-tight"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ y: 100, opacity: 0 }}
          >
            Stream on the Apple TV app on Apple devices,smart TVs,consoles, or
            sticks.
          </motion.p>
          <motion.p
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ y: 100, opacity: 0 }}
          >
            Share Apple TV+ with your family.
          </motion.p>
        </div>
        <motion.div
          className="flex xl:gap-x-16 lg:gap-x-4 "
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <div className="gap-y-14 flex flex-col h-full">
            <div className="font-bold flex flex-col xl:gap-y-4 lg:gap-y-1">
              <p className="2xl:text-3xl xl:text-2xl lg:text-lg font-semibold">
                Buy an Apple device
              </p>
              <p className="2xl:text-5xl xl:text-4xl lg:text-2xl pt-4">
                3 months free.
              </p>
              <p className="2xl:text-xl xl:text-lg 2xl:leading-6 xl:leading-6 font-normal text-gray-500">
                Apple TV+ is included for 3 months when you purchase an Apple
                device and redeem the offer within 90 days.1
              </p>
            </div>
            <div className="xl:w-1/2 lg:w-3/4 lg:h-12 2xl:h-14 xl:h-12 font-bold flex bottom-0 2xl:text-base xl:text-sm lg:text-sm">
              <Btn txt="Check eligibility" />
            </div>
          </div>
          <div className="gap-y-14 flex flex-col h-full">
            <div className="font-bold flex flex-col xl:gap-y-4 lg:gap-y-1">
              <p className="2xl:text-3xl xl:text-2xl  lg:text-lg font-semibold">
                Free 7-day trial
              </p>
              <p className="2xl:text-5xl xl:text-4xl  lg:text-2xl  pt-4">
                $6.99/mo.
              </p>
              <p className="2xl:text-xl xl:text-lg 2xl:leading-6 xl:leading-6 font-normal text-gray-500">
                A monthly subscription is just $6.99 per month after a free
                7-day trial. Share Apple TV+ with your family.2
              </p>
            </div>
            <div className="xl:w-1/2 lg:w-3/4 lg:h-12 2xl:h-14 xl:h-12 font-bold flex bottom-0 2xl:text-base xl:text-sm lg:text-sm">
              <Btn txt="Try it free" />
            </div>
          </div>
          <div className="gap-y-14 flex flex-col">
            <div className="font-bold flex flex-col xl:gap-y-4 lg:gap-y-1">
              <p className="2xl:text-3xl xl:text-2xl lg:text-lg font-semibold">
                Free 1‑month trial
              </p>
              <p className="2xl:text-5xl xl:text-4xl  lg:text-2xl  pt-4">
                Apple One
              </p>
              <p className="2xl:text-xl xl:text-lg 2xl:leading-6 xl:leading-6 font-normal text-gray-500">
                Bundle Apple TV+ with up to five other great services for one
                low monthly price. And enjoy more for less.{" "}
                <span className="text-blue-600 font-normal opacity-100">
                  Learn more &gt;
                </span>
              </p>
            </div>
            <div className="xl:w-1/2 lg:w-3/4 lg:h-12 2xl:h-14 xl:h-12 font-bold flex bottom-0 2xl:text-base xl:text-sm lg:text-sm">
              <Btn txt="Try Apple One free" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Hero;
