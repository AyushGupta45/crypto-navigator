import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { buttonTheme } from "../theme";

const Home = () => {
  return (
    <div className="flex flex-col w-full md:flex-row gap-2 md:mt-6 items-start md:items-center justify-start md:justify-between px-2">
      {/* content section */}
      <div className="flex flex-col w-full lg:w-4/6 items-start gap-2 order-2 md:order-1">
        <motion.h1
          className="pb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center md:text-start font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Navigate the Future of Crypto Trading
        </motion.h1>
        <motion.p
          className="text-sm text-gray-200 font-semibold"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          Unlock the power of real-time crypto insights with Crypto Navigator.
          Explore dynamic charts, manage virtual portfolios, and experience
          automated trading like never before. Dive in to revolutionize your
          trading journey
        </motion.p>

        <motion.div
          className="flex gap-4 mt-4 box"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
        >
          <Link to="/dashboard">
            <Button
              theme={buttonTheme}
              pill
              className="text-lg text-white font-bold px-2 py-1 mb-4"
              gradientDuoTone="purpleToPink"
            >
              Explore Now
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="flex justify-center items-center w-3/4 sm:w-2/4 md:w-1/2 lg:w-2/6 order-1 mt-4 lg:mt-0 md:order-2">
        <motion.img
          src="assets/btc.jpg"
          loading="lazy"
          className="w-full mix-blend-screen"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            opacity: { duration: 1, delay: 1 },
            y: {
              type: "smooth",
              repeatType: "mirror",
              duration: 1.5,
              repeat: Infinity,
              delay: 1,
            },
            x: { duration: 1, delay: 1 },
          }}
        />
      </div>
    </div>
  );
};

export default Home;