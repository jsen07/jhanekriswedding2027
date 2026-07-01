import React, { useEffect, useState } from "react";

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
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#8e8f7c]">
          Counting Down
        </p>

        <h2 className="font-tangerine text-7xl mb-4 leading-none text-[#676b57] md:text-[7rem]">
          Until We Say
          <br></br>
          <span className="mx-5 text-[#D6C27A]">I Do</span>
        </h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
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
        </div>
      </div>
    </section>
  );
};

export default Countdown;
