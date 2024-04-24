import Image from "next/image";
import React from "react";

interface serviceCardProps {
  title: string;
  src: string;
}

const ServicesCard = ({ src, title }: serviceCardProps) => {
  return (
    <div className="flex flex-col items-center space-y-5 p-10 w-[300px] dark:bg-gray-600/30 text-center rounded-lg">
      <Image src={src} alt={title} width={100} height={100} />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nam
        libero similique.
      </p>
    </div>
  );
};

export default ServicesCard;
