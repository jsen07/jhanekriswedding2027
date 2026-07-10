import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import ButterflyPink from "../assets/Lottie/fQzTM2FBOs.json";
import RevealSection from "./RevealSection";

const weddingDate = new Date("2027-07-07T00:00:00").getTime();

const Countdown = () => {
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

      setTimeLeft({
        days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((distance / (1000 * 60)) % 60)),
        seconds: Math.max(0, Math.floor((distance / 1000) % 60)),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="countdown"
      className="relative flex items-center justify-center px-6 pt-24 mt-10"
    >
      {/* Butterfly - top left */}
      <div
        className="
    pointer-events-none
    absolute
    left-[4%]
    top-[8%]
    sm:left-[6%]
    sm:top-[10%]
    md:left-[8%]
    md:top-[12%]
    lg:left-[10%]
    lg:top-[14%]
    xl:left-[12%]
    xl:top-[15%]
    z-10
  "
      >
        <div
          className="animate-butterfly"
          style={{
            animationDelay: "0.4s",
            animationDuration: "18s",
          }}
        >
          <Lottie
            animationData={ButterflyPink}
            autoplay
            loop
            className="w-[clamp(20px,6vw,40px)]"
          />
        </div>
      </div>

      {/* Butterfly - top right */}
      <div
        className="
    pointer-events-none
    absolute
    right-[4%]
    top-[12%]
    sm:right-[6%]
    sm:top-[15%]
    md:right-[8%]
    md:top-[16%]
    lg:right-[10%]
    lg:top-[18%]
    xl:right-[12%]
    xl:top-[18%]
    z-10
  "
      >
        <div
          className="animate-butterfly"
          style={{
            animationDuration: "20s",
          }}
        >
          <Lottie
            animationData={ButterflyPink}
            autoplay
            loop
            className="w-[clamp(32px,10vw,40px)]"
          />
        </div>
      </div>

      {/* Butterfly - centre right */}
      <div
        className="
    pointer-events-none
    absolute
    right-[2%]
    top-[52%]
    sm:right-[3%]
    sm:top-[54%]
    md:right-[5%]
    md:top-[55%]
    lg:right-[7%]
    lg:top-[56%]
    xl:right-[9%]
    xl:top-[56%]
    z-10
  "
      >
        <div
          className="animate-butterfly"
          style={{
            animationDelay: "2.4s",
            animationDuration: "24s",
          }}
        >
          <Lottie
            animationData={ButterflyPink}
            autoplay
            loop
            className="w-[clamp(18px,6vw,30px)]"
          />
        </div>
      </div>

      {/* Butterfly - bottom left */}
      <div
        className="
    pointer-events-none
    absolute
    left-[4%]
    bottom-[-10%]
    sm:left-[6%]
    sm:bottom-[10%]
    md:left-[8%]
    md:bottom-[14%]
    lg:left-[10%]
    lg:bottom-[18%]
    xl:left-[12%]
    xl:bottom-[20%]
    z-10
  "
      >
        <div
          className="animate-butterfly"
          style={{
            animationDelay: "1.6s",
            animationDuration: "22s",
          }}
        >
          <Lottie
            animationData={ButterflyPink}
            autoplay
            loop
            className="w-[clamp(10px,5vw,40px)]"
          />
        </div>
      </div>

      {/* Butterfly - bottom right */}
      <div
        className="
    pointer-events-none
    absolute
    right-[8%]
    bottom-[2%]
    sm:right-[10%]
    sm:bottom-[-14%]
    md:right-[12%]
    md:bottom-[-20%]
    lg:right-[15%]
    lg:bottom-[-24%]
    xl:right-[18%]
    xl:bottom-[-30%]
    z-10
  "
      >
        <div
          className="animate-butterfly"
          style={{
            animationDelay: "3.2s",
            animationDuration: "26s",
          }}
        >
          <Lottie
            animationData={ButterflyPink}
            autoplay
            loop
            className="w-[clamp(22px,7vw,65px)]"
          />
        </div>
      </div>

      <RevealSection className="mx-auto max-w-6xl text-center z-50">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#8e8f7c]">
          Counting Down
        </p>

        <h2 className="font-tangerine text-7xl mb-4 leading-none text-[#676b57] md:text-[7rem]">
          Until We Say
          <br></br>
          <span className="mx-5 text-[#D6C27A]">I Do</span>
        </h2>

        <RevealSection className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-[#D6C27A]/40 bg-white/30 px-10 py-8 backdrop-blur-sm"
            >
              <h3 className="text-5xl font-light text-[#676b57] md:text-6xl">
                {String(item.value).padStart(2, "0")}
              </h3>

              <p className="mt-3 text-xs uppercase tracking-[0.35em] text-[#8e8f7c]">
                {item.label}
              </p>
            </div>
          ))}
        </RevealSection>
      </RevealSection>
    </section>
  );
};

export default Countdown;
