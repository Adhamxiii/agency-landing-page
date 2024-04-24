import Image from "next/image";
import React from "react";

interface pricingCardProps {
  bg: string;
  text: string;
  img: string;
  price: number;
  button: string;
  title: string;
}

const PricingCard = ({
  bg,
  text,
  img,
  price,
  button,
  title,
}: pricingCardProps) => {
  return (
    <div
      className={`bg-${bg} text-${text} p-10 rounded-md space-y-5 shadow-2xl`}
    >
      <h1 className="text-xl font-semibold">{title}</h1>
      <h1 className="text-4xl font-bold">
        {price}$ <span className="font-thin">/month</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut
        inventore harum dignissimos deserunt cum, sed, error, voluptates dolore
        doloribus asperiores!
      </p>
      <ul className="space-y-5">
        {[1, 2, 3, 4].map((i) => (
          <li key={i} className="flex items-center space-x-2">
            <Image
              src={img}
              alt={title}
              width={20}
              height={20}
              className="size-8"
            />
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </li>
        ))}
      </ul>
      <button
        className={`bg-${button} text-black dark:text-white px-5 py-2 rounded-full font-semibold`}
      >
        Choose plan
      </button>
    </div>
  );
};

export default PricingCard;
