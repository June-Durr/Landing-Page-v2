import React from "react";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import { Hero } from "./Hero";

export const Employee = () => {
  return (
    <section className="pt-0 pb-10 relative min-h-[70vh]">
      <div className="">
        <button className="absolute top-[16%] left-[13%] w-36 h-52 rounded-full bg-yellow-400 overflow-hidden">
          <img className="" src={image1} alt="Couarge" />
        </button>
      </div>
      <div className="">
        <button className="absolute top-[40%] left-[73%] w-36 h-52 rounded-full bg-purple-400 overflow-hidden">
          <img className="" src={image2} alt="Rick" />
        </button>
      </div>
      <div className="">
        <button className="absolute top-[3%] left-[80%] w-36 h-52 rounded-full bg-pink-400 overflow-hidden">
          <img className="" src={image3} alt="Morty" />
        </button>
      </div>
      <div className="absolute top-[16%] left-[15%]">
        <Hero />
      </div>
    </section>
  );
};
