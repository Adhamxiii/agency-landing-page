import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center">
      <ServicesCard src="/webs_dev.svg" title="Website Design" />
      <ServicesCard src="/dev.svg" title="Development" />
      <ServicesCard src="/mobile_dev.svg" title="App Design" />
    </div>
  );
};

export default Services;
