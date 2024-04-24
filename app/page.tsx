import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import LearnMore from "../components/LearnMore";
import PricePlane from "../components/PricePlane";
import Watch from "../components/Watch";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[url('/bg.svg')] dark:bg-[url('/bg_dark.svg')] bg-cover">
      <div className="container mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        <Services />
        <LearnMore />
        <PricePlane />
        <Watch />
        <Footer />
      </div>
    </div>
  );
}
