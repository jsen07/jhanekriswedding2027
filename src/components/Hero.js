import React from "react";

import Flower2 from "../assets/3680e6bc131c74861feac38387bbc2a0.webp";
import Flower3 from "../assets/a3842616d010f9b8b0d5779a93c4e1a5.webp";
import GreenFlower from "../assets/greenflower.webp";
import FlowerCorner from "../assets/eucalyptus-corner.webp";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen">
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 sm:px-6">
        {/* Bottom left flowers */}
        <div className="pointer-events-none absolute -bottom-[-60px] -left-24 z-10 sm:-bottom-24 sm:-left-20 lg:-bottom-28 lg:-left-16">
          <img
            src={Flower2}
            alt=""
            className="w-[310px] opacity-90 animate-float sm:w-[420px] lg:w-[560px] 2xl:w-[650px]"
          />
        </div>

        <div className="pointer-events-none absolute -bottom-[120px] -right-28 -rotate-45 z-10 sm:-bottom-[150px] sm:-right-32">
          <img
            src={GreenFlower}
            alt=""
            className="w-[360px] opacity-90 animate-float sm:w-[420px] lg:w-[560px] 2xl:w-[650px]"
          />
        </div>

        {/* Top right flowers */}
        <div className="pointer-events-none absolute -right-28 -top-24 z-10 rotate-180 sm:-right-24 sm:-top-24 lg:-right-20 lg:-top-20">
          <img
            src={Flower2}
            alt=""
            className="w-[360px] opacity-90 animate-float sm:w-[420px] lg:w-[560px] 2xl:w-[650px]"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="pointer-events-none absolute -left-28 -top-[140px] z-10 rotate-[220deg]">
          <img
            src={FlowerCorner}
            alt=""
            className="w-[280px] opacity-90 animate-float sm:w-[420px] lg:w-[560px] 2xl:w-[650px]"
            style={{ animationDelay: "2.5s" }}
          />
        </div>

        <div className="pointer-events-none absolute -right-20 top-0 rotate-180 md:block">
          <img
            src={Flower3}
            alt=""
            className="w-[220px] opacity-60 lg:w-[380px]"
          />
        </div>

        <div className="pointer-events-none absolute bottom-[30px] left-[-20px] rotate-90 md:block">
          <img
            src={Flower3}
            alt=""
            className="w-[240px] opacity-60 lg:w-[380px]"
          />
        </div>

        <div className="relative flex justify-center mb-28 sm:mb-0">
          {/* Outer Diamond */}
          <div
            className="
    pointer-events-none
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    rotate-45
    border-4
    border-[#D6C27A]/90
    w-[350px]
    h-[350px]
    sm:w-[550px]
    sm:h-[550px]
    md:w-[520px]
    md:h-[520px]
    lg:w-[620px]
    lg:h-[620px]
  "
          />

          {/* Inner Diamond */}
          <div
            className="
    pointer-events-none
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    rotate-45
    border-2
    border-[#D6C27A]/50
    w-[320px]
    h-[320px]
    sm:w-[520px]
    sm:h-[520px]
    md:w-[490px]
    md:h-[490px]
    lg:w-[590px]
    lg:h-[590px]
  "
          />

          {/* Content */}
          <div
            className="
        relative
        max-w-3xl
        rounded-2xl
        p-10
        z-30
        text-center

        md:bg-transparent
        md:p-0
        md:backdrop-blur-none
      "
          >
            <p className="mb-4 text-[8px] sm:text-[11px] uppercase tracking-[0.3em] text-[#8e8f7c] sm:text-sm sm:tracking-[0.4em]">
              With Love, We Invite You
            </p>

            <h1 className="font-tangerine text-[clamp(4rem,16vw,9rem)] leading-[0.9] text-[#676b57]">
              Kris
              <span className="mx-2 text-[#D6C27A] sm:mx-4">&</span>
              Jhane
            </h1>

            <div className="my-2 flex items-center justify-center gap-4 sm:my-8">
              <div className="h-px w-12 bg-[#676b57]/70 sm:w-16" />

              <div className="h-2 w-2 rotate-45 bg-[#D6C27A]" />

              <div className="h-px w-12 bg-[#676b57]/70 sm:w-16" />
            </div>

            <div className="mt-6 space-y-2">
              <p className="uppercase tracking-[0.35em] text-[#676b57] text-xs sm:text-sm">
                07 July 2027
              </p>

              <p className="uppercase tracking-[0.3em] text-[#8e8f7c] text-xs">
                Bourton Hall
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
