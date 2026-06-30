import React from "react";
import Dress from "../assets/pngwing.com.png";
import Suit from "../assets/suit.png";

const Details = () => {
  return (
    <section
      id="details"
      className="relative min-h-screen bg-sage px-5 py-20 text-[#676b57] sm:px-6 lg:px-10 lg:py-28 flex flex-col items-center"
    >
      <div className="relative flex max-w-6xl flex-col gap-12 lg:min-h-[70vh] lg:flex-row lg:gap-16">
        <div className="pointer-events-none absolute bottom-[-10px] left-[250px] hidden 2xl:block">
          <img src={Suit} alt="" className="w-[300px] opacity-75" />
        </div>

        <div className="pointer-events-none absolute bottom-0 right-[-250px] hidden 2xl:block">
          <img src={Dress} alt="" className="w-[300px] opacity-75" />
        </div>

        {/* Left content */}
        <div className="flex flex-col">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#8e8f7c] sm:text-sm">
            Wedding Details
          </p>

          <h2 className="font-tangerine text-[5rem] leading-none sm:text-[6rem] lg:text-[8rem]">
            The Day
          </h2>

          <div className="mt-6 h-px w-24 bg-[#D6C27A] sm:mt-8 sm:w-28" />

          <p className="mt-6 max-w-md text-base leading-8 text-[#676b57]/80 sm:mt-8 sm:text-lg">
            Your presence is the greatest gift we could ask for. We are so
            excited to celebrate this special chapter of our lives with our
            closest family and friends. Below you'll find everything you need to
            know about our wedding day, from the ceremony and reception to our
            dress code and venue details. We can't wait to share this
            unforgettable day with you.
          </p>
        </div>

        {/* Right cards */}
        <div className="flex flex-col gap-4 lg:w-[60%]">
          <div className="bg-white/45 p-6 backdrop-blur-sm sm:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8e8f7c]">
              Date
            </p>
            <h3 className="text-xl font-light sm:text-2xl">
              Wednesday, 07 July 2027
            </h3>
          </div>

          <div className="bg-white/45 p-6 backdrop-blur-sm sm:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8e8f7c]">
              Venue
            </p>
            <h3 className="mb-3 text-xl font-light sm:text-2xl">
              Bourton Hall
            </h3>
            <p className="text-sm leading-7 text-[#676b57]/80 sm:text-base">
              Main St, Bourton on Dunsmore, Rugby CV23 9QZ
            </p>
          </div>

          <div className="bg-white/45 p-6 backdrop-blur-sm sm:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8e8f7c]">
              Itinerary
            </p>

            <div className="space-y-5 text-sm sm:text-base">
              <div className="flex justify-between gap-6 border-b border-[#676b57]/10 pb-4">
                <span>Ceremony</span>
                <span className="text-[#676b57]/70">TBC</span>
              </div>

              <div className="flex justify-between gap-6 border-b border-[#676b57]/10 pb-4">
                <span>Reception</span>
                <span className="text-[#676b57]/70">TBC</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>Evening Celebration</span>
                <span className="text-[#676b57]/70">TBC</span>
              </div>
            </div>
          </div>

          <div className="bg-white/45 p-6 shadow-xl shadow-[#676b57]/10 backdrop-blur-sm sm:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8e8f7c]">
              Dress Code
            </p>

            <h3 className="text-xl font-light text-[#676b57] sm:text-2xl">
              Garden Elegance
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-7 text-[#676b57]/75">
              We kindly invite our guests to dress in elegant attire inspired by
              our wedding palette. Soft, earthy and romantic tones are
              encouraged.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              {["#B4C8B2", "#E8CFC7", "#F8F4EA"].map((color) => (
                <div key={color} className="flex flex-col items-center gap-2">
                  <div
                    className="h-12 w-12 rounded-full border border-black/10 shadow-lg sm:h-14 sm:w-14"
                    style={{ backgroundColor: color }}
                  />

                  <span className="text-[10px] tracking-wide text-[#676b57] sm:text-[11px]">
                    {color}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
