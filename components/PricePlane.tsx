import React from "react";
import PricingCard from "./PricingCard";

const cardData = [
  {
    id: 1,
    bg: "white dark:bg-green-900",
    title: "Basic",
    text: "black",
    img: "/check_green.svg",
    price: 19,
    button: "bg-green-500 text-white",
  },
  {
    id: 2,
    bg: "green-500",
    title: "Standard",
    text: "white",
    img: "/check_white.svg",
    price: 29,
    button: "bg-green-500 text-white",
  },
  {
    id: 3,
    bg: "white dark:bg-green-900",
    title: "Advanced",
    text: "black",
    img: "/check_green.svg",
    price: 39,
    button: "bg-green-500 text-white",
  },
];

const PricePlane = () => {
  return (
    <div className="py-20">
      <div className="text-center space-y-2 md:w-1/2 m-auto">
        <h1 className="text-5xl font-semibold">
          We&apos;ve got a plan that&apos;s perfect for you
        </h1>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          veritatis impedit laudantium veniam maxime exercitationem totam
          similique aliquid?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-32 place-items-center p-10">
        {cardData.map((card) => {
          return <PricingCard key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
};

export default PricePlane;
