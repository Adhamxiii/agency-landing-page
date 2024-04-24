import Image from "next/image";
import React from "react";

const Watch = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-5 py-20">
      <div className="space-y-5 md:w-1/2">
        <p className="text-green-400">Lorem ipsum dolor sit.</p>
        <h1 className="text-5xl font-semibold">Lorem ipsum dolor sit amet consectetur.</h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          provident illum in pariatur amet, harum tenetur reprehenderit
          necessitatibus error nostrum. Inventore sapiente autem impedit
          assumenda.
        </p>
        <button className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold">Watch</button>
      </div>
      <div className="md:w-1/3">
        <Image src="/watch_img.svg" alt="watch img" width={500} height={500} />
      </div>
    </div>
  );
};

export default Watch;
