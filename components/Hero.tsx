import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-5 py-20">
      <div className="space-y-5 md:w-1/2">
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <h1 className="text-6xl font-semibold">
          A <span className="text-green-500 font-bold">Digital</span> product
          design agency
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          ad in, deserunt error eveniet obcaecati?
        </p>
        <button className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold">
          Get Started
        </button>
      </div>
      <div>
        <Image src="/hero_img.svg" alt="hero image" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
