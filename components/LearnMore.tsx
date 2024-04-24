import Image from "next/image";
import React from "react";

const LearnMore = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-5 py-20 space-y-10 md:space-y-0">
      <div className="md:w-1/3">
        <Image src="/learn_img.svg" alt="learn more" width={500} height={500} />
      </div>
      <div className="space-y-5 md:w-1/2">
        <p className="text-green-400">Lorem ipsum dolor sit amet.</p>
        <h1 className="text-5xl font-semibold">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          architecto fugit mollitia sed eligendi.
        </p>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
          nobis? Culpa nam placeat cupiditate.
        </p>
        <button className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
