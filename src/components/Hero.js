import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

import FlowerAnimation from "../assets/animations/newScene_nicer_sakura_flowers.json";

import Flower from "../assets/—Pngtree—corner frame with pastel flowers_20851707.png";

import Flower2 from "../assets/3680e6bc131c74861feac38387bbc2a0.png";
import Flower3 from "../assets/a3842616d010f9b8b0d5779a93c4e1a5.png";

const weddingDate = new Date("2027-07-07T00:00:00").getTime();

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen">
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 sm:px-6">
        {/* Bottom left flowers */}
        <div className="pointer-events-none absolute -bottom-[-60px] -left-24 z-10 sm:-bottom-24 sm:-left-20 lg:-bottom-28 lg:-left-16">
          <img
            src={Flower2}
            alt=""
            className="w-[380px] opacity-90 animate-float sm:w-[420px] lg:w-[560px] 2xl:w-[650px]"
          />
        </div>

        {/* Top right flowers */}
        <div className="pointer-events-none absolute -right-28 -top-24 z-10 rotate-180 sm:-right-24 sm:-top-24 lg:-right-20 lg:-top-20">
          <img
            src={Flower2}
            alt=""
            className="w-[380px] opacity-90 animate-float sm:w-[420px] lg:w-[560px] 2xl:w-[650px]"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Extra florals - hidden on mobile to keep layout clean */}
        <div className="pointer-events-none absolute -right-20 top-0 rotate-180 md:block">
          <img
            src={Flower3}
            alt=""
            className="w-[280px] opacity-60 lg:w-[380px]"
          />
        </div>

        <div className="pointer-events-none absolute bottom-[30px] left-[-20px] rotate-90 md:block">
          <img
            src={Flower3}
            alt=""
            className="w-[280px] opacity-60 lg:w-[380px]"
          />
        </div>

        <div
          className="relative z-30 max-w-3xl text-center border rounded-2xl bg-white/60 p-6 mb-10
    md:mb-0
    md:border-0
    md:bg-transparent
    md:p-0
    md:backdrop-blur-none"
        >
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#8e8f7c] sm:text-sm sm:tracking-[0.4em]">
            Together with their families
          </p>

          <h1 className="font-tangerine text-[clamp(5rem,18vw,12rem)] leading-none text-[#676b57]">
            Kris
            <span className="mx-3 text-amber-300 sm:mx-6">&</span>
            Jhane
          </h1>

          <div className="my-7 flex items-center justify-center gap-4 sm:my-8">
            <div className="h-px w-12 bg-[#676b57]/70 sm:w-16" />
            <div className="h-2 w-2 rotate-45 bg-[#676b57]" />
            <div className="h-px w-12 bg-[#676b57]/70 sm:w-16" />
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-[#4E5848] sm:flex-row sm:gap-5 sm:text-sm sm:tracking-[0.3em]">
            <span>07 July 2027</span>
            <div className="hidden h-6 w-px bg-[#4E5848]/40 sm:block" />
            <span>Bourton Hall</span>
          </div>

          <div className="mt-12 flex flex-row gap-x-5 gap-y-8 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-10 md:gap-12">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={item.label}
                className="flex items-center justify-center"
              >
                <div className="text-center">
                  <p className="min-w-[60px] text-4xl font-light tracking-tight text-[#676b57] transition-all duration-500 sm:text-5xl md:text-6xl">
                    {String(item.value).padStart(2, "0")}
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[#8e8f7c] sm:text-[11px] sm:tracking-[0.35em]">
                    {item.label}
                  </p>
                </div>

                {index < 3 && (
                  <div className="mx-6 hidden h-12 w-px bg-[#8e8f7c] md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div className="absolute rounded-full w-[500px] h-[500px] z-10 bg-stone-100 flex items-center justify-center">
        <h1 className="font-tangerine text-8xl font-bold"> Kris & Jhane </h1>
      </div> */
}
{
  /* <Lottie
        animationData={FlowerAnimation}
        loop={false}
        className="w-[800px] h-[800px]"
      /> */
}
