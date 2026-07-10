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

        <div
          className="pointer-events-none 
        absolute 
        left-[-5rem] 
        bottom-[-3rem] 
        lg:left-[-5rem]
        lg:bottom-[-4rem]
        xl:left-[-5rem]
        xl:bottom-[-4rem]
        2xl:left-[-5rem] 
          2xl:bottom-[-12rem]
        z-10"
        >
          <div className="animate-flower" style={{ animationDelay: "0.2s" }}>
            <img
              src={Flower2}
              alt=""
              className="w-[clamp(300px,50vmin,350px)] sm:w-[clamp(300px,50vmin,380px)] md:w-[clamp(300px,42vmin,380px)] lg:w-[clamp(300px,max(36vw,42vmin),440px)] xl:w-[clamp(280px,max(30vw,42vmin),540px)] animate-float opacity-90"
            />
          </div>
        </div>

        {/* Bottom left eucalyptus */}
        <div
          className="pointer-events-none 
        absolute 
        left-[-7rem] 
        bottom-[-6rem] 
        lg:left-[-7rem]
        lg:bottom-[-6rem]
        xl:left-[-7rem]
        xl:bottom-[-6rem]
        2xl:left-[-7rem] 
           2xl:bottom-[-12rem]
        rotate-90 md:block"
        >
          <div className="animate-flower" style={{ animationDelay: "0.6s" }}>
            <img
              src={Flower3}
              alt=""
              className="w-[clamp(300px,50vmin,350px)] sm:w-[clamp(300px,50vmin,380px)] md:w-[clamp(300px,42vmin,380px)] lg:w-[clamp(300px,max(36vw,42vmin),440px)] xl:w-[clamp(280px,max(30vw,42vmin),540px)]  opacity-60"
            />
          </div>
        </div>

        {/* Bottom right flowers */}
        <div
          className="pointer-events-none 
        absolute 
        right-[-8rem] 
        bottom-[-4rem]
        lg:right-[-8rem]
        lg:bottom-[-4rem]
        xl:right-[-8rem]
        xl:bottom-[-4rem] 
        2xl:right-[-10rem] 
        2xl:bottom-[-12rem]
        -rotate-45 z-10"
        >
          <div className="animate-flower" style={{ animationDelay: "0.4s" }}>
            <img
              src={GreenFlower}
              alt=""
              className="w-[clamp(300px,50vmin,350px)] sm:w-[clamp(300px,50vmin,380px)] md:w-[clamp(300px,42vmin,380px)] lg:w-[clamp(300px,max(36vw,42vmin),440px)] xl:w-[clamp(280px,max(30vw,42vmin),540px)]  animate-float opacity-90"
            />
          </div>
        </div>

        {/* Top right flowers */}
        <div
          className="pointer-events-none 
        absolute 
        right-[-2rem] 
        top-[-8rem] 
        lg:right-[-2rem]
        lg:top-[-8rem]
        xl:right-[-2rem] 
        xl:top-[-8rem]
        2xl:right-[-2rem] 
        2xl:top-[-8rem]

        z-10 rotate-180"
        >
          <div className="animate-flower" style={{ animationDelay: "0.8s" }}>
            <img
              src={Flower2}
              alt=""
              className="w-[clamp(300px,50vmin,350px)] sm:w-[clamp(300px,50vmin,380px)] md:w-[clamp(300px,42vmin,380px)] lg:w-[clamp(300px,max(36vw,42vmin),440px)] xl:w-[clamp(300px,max(30vw,42vmin),540px)]  animate-float opacity-90"
            />
          </div>
        </div>

        {/* Top right eucalyptus */}
        <div
          className="pointer-events-none 
        absolute 
        right-[-8rem] 
        top-[-9rem] 
        lg:right-[-8rem]
        lg:top-[-9rem]
        xl:right-[-8rem] 
        xl:top-[-9rem]
        2xl:right-[-8rem] 
        2xl:top-[-9rem]
        rotate-180 md:block"
        >
          <div className="animate-flower" style={{ animationDelay: "1.2s" }}>
            <img
              src={Flower3}
              alt=""
              className="w-[clamp(300px,50vmin,350px)] sm:w-[clamp(300px,50vmin,380px)] md:w-[clamp(300px,42vmin,380px)] lg:w-[clamp(300px,max(36vw,42vmin),440px)] xl:w-[clamp(280px,max(30vw,42vmin),540px)]  opacity-60"
            />
          </div>
        </div>

        {/* Top left flowers */}
        <div
          className="pointer-events-none
    absolute
    left-[-7rem]
    top-[-9rem]
    rotate-[220deg]
           lg:left-[-7rem] 
        lg:top-[-9rem]
          xl:left-[-7rem] 
        xl:top-[-9rem]
         2xl:left-[-7rem] 
        2xl:top-[-9rem]"
        >
          <div className="animate-flower" style={{ animationDelay: "0s" }}>
            <img
              src={FlowerCorner}
              alt=""
              className="w-[clamp(300px,50vmin,350px)] sm:w-[clamp(300px,50vmin,380px)] md:w-[clamp(300px,42vmin,380px)] lg:w-[clamp(300px,max(36vw,42vmin),440px)] xl:w-[clamp(280px,max(30vw,42vmin),540px)]  animate-float opacity-90"
              style={{ animationDelay: "2.5s" }}
            />
          </div>
        </div>
        <div className="relative flex h-[clamp(350px,65vmin,620px)] w-[clamp(350px,65vmin,620px)] items-center justify-center mb-28 sm:mb-0">
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
      w-[clamp(350px,65vmin,620px)]
      h-[clamp(350px,65vmin,620px)]
     opacity-0 animate-diamondIn


  "
            style={{ animationDelay: "0.5s" }}
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
      w-[calc(clamp(350px,65vmin,620px)-30px)]
      h-[calc(clamp(350px,65vmin,620px)-30px)]
      opacity-0 animate-diamondIn

  "
            style={{ animationDelay: "1.5s" }}
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
            <div
              className="
    absolute
    left-1/2
    top-1/2
    z-30
    flex
    w-[clamp(220px,60%,380px)]
    -translate-x-1/2
    -translate-y-1/2
    flex-col
    items-center
    text-center
  "
            >
              <p
                className="mb-[clamp(1rem,3vmin,1.75rem)] text-[clamp(0.5rem,1.5vmin,0.9rem)] uppercase tracking-[0.38em] text-[#8e8f7c] opacity-0 animate-fadeIn"
                style={{ animationDelay: "1.8s" }}
              >
                With Love, We Invite You
              </p>

              <h1
                className="font-tangerine text-[clamp(4rem,14vmin,8.5rem)] leading-[0.92] text-[#676b57] opacity-0 animate-fadeIn"
                style={{ animationDelay: "2.0s" }}
              >
                Kris
                <span className="mx-[0.08em] text-[#D6C27A]">&</span>
                Jhane
              </h1>

              <div
                className="my-[clamp(1.2rem,4vmin,2.5rem)] flex items-center justify-center gap-[clamp(0.75rem,2.5vmin,1.25rem)] opacity-0 animate-fadeUp"
                style={{ animationDelay: "2.2s" }}
              >
                <div className="h-px w-[clamp(2.5rem,8vmin,5rem)] bg-[#676b57]/70" />

                <div className="h-[clamp(0.4rem,1.2vmin,0.55rem)] w-[clamp(0.4rem,1.2vmin,0.55rem)] rotate-45 bg-[#D6C27A]" />

                <div className="h-px w-[clamp(2.5rem,8vmin,5rem)] bg-[#676b57]/70" />
              </div>

              <div className="space-y-[clamp(0.6rem,2vmin,1rem)]">
                <p
                  className="text-[clamp(0.7rem,1.8vmin,1rem)] uppercase tracking-[0.38em] text-[#676b57] opacity-0 animate-fadeUp"
                  style={{ animationDelay: "2.4s" }}
                >
                  07 July 2027
                </p>

                <p
                  className="text-[clamp(0.65rem,1.6vmin,0.9rem)] uppercase tracking-[0.32em] text-[#8e8f7c] opacity-0 animate-fadeUp"
                  style={{ animationDelay: "2.6s" }}
                >
                  Bourton Hall
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
