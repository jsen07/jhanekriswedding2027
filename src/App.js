import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Details from "./components/Details";
import Rsvp from "./components/Rsvp";
import Story from "./components/Story";
// import FAQ from "./components/FAQ";
import OnMountAnimation from "./components/OnMountAnimation";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import Flower2 from "./assets/3680e6bc131c74861feac38387bbc2a0.webp";
import Flower3 from "./assets/a3842616d010f9b8b0d5779a93c4e1a5.webp";
import GreenFlower from "./assets/greenflower.webp";
import FlowerCorner from "./assets/eucalyptus-corner.webp";

const preloadAssets = [Flower2, Flower3, GreenFlower, FlowerCorner];

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <OnMountAnimation
        duration={2000}
        images={preloadAssets}
        onFinish={() => setShowSplash(false)}
      />
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* <div className="fixed top-0 left-0 z-50 bg-black text-white text-base px-10 py-1 rounded-br">
        <div className="block sm:hidden">XS</div>
        <div className="hidden sm:block md:hidden">SM</div>
        <div className="hidden md:block lg:hidden">MD</div>
        <div className="hidden lg:block xl:hidden">LG</div>
        <div className="hidden xl:block 2xl:hidden">XL</div>
        <div className="hidden 2xl:block">2XL</div>
      </div> */}

      {/* <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#B4C8B2]" />

        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#B4C8B2]/80" />

        <div className="absolute -top-72 -left-64 h-[650px] w-[650px] rounded-full bg-[#B4C8B2] blur-[250px]" />

        <div className="absolute -bottom-72 -right-64 h-[700px] w-[700px] rounded-full bg-[#B4C8B2]/50 blur-[280px]" />
      </div> */}

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Countdown />
        <Story />
        <Details />
        <Rsvp />
        {/* <FAQ /> */}
      </main>
    </div>
  );
}

export default App;
