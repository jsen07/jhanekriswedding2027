import React from "react";

import SageDressWomen from "../assets/Models/SageDressWomen.webp";
import PinkDressWomen from "../assets/Models/PinkDressWomen.webp";
import ChampagneWomen from "../assets/Models/ChampagneWomen.webp";

import GreenSuitMan from "../assets/Models/GreenSuitMan.webp";
import GreyPinkSuitMan from "../assets/Models/GreyPinkSuitMan.webp";
import GreyWhiteSuitMan from "../assets/Models/GreyWhiteSuitMan.webp";

const colours = [
  { name: "Sage", hex: "#b4c8b2" },
  { name: "Olive", hex: "#8e8f7c" },
  { name: "Blush", hex: "#f2c1bd" },
  { name: "Champagne", hex: "#F7E7C4" },
  { name: "Light Grey", hex: "#d3d8d4" },
  { name: "Beige", hex: "#EDE4D3" },
];

const DressCode = () => {
  return (
    <section
      id="dresscode"
      className="relative overflow-hidden pt-28 pb-28 px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#8e8f7c]">
            What To Wear
          </p>

          <h2 className="font-tangerine text-[5rem] leading-none text-[#676b57] md:text-[7rem]">
            Dress Code
          </h2>

          <div className="my-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#D6C27A]" />
            <div className="h-2 w-2 rotate-45 bg-[#D6C27A]" />
            <div className="h-px w-16 bg-[#D6C27A]" />
          </div>

          <p className="mx-auto max-w-2xl leading-8 text-[#676b57]/80">
            We kindly invite our guests to embrace our wedding colour palette.
            Elegant, soft and timeless tones will perfectly complement the
            celebration and our beautiful surroundings at Bourton Hall.
          </p>
        </div>

        <div className="mt-20 rounded-[40px] bg-white/40 py-8 md:p-14">
          <div className="flex flex-col gap-16 lg:flex-row">
            {/* Left */}
            <div className="flex-1">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8e8f7c]">
                Theme
              </p>

              <h3 className="text-xl font-light text-[#676b57]">
                Floral Bridgerton
              </h3>

              <p className="mt-6 leading-8 text-sm text-[#676b57]/80">
                Think flowing dresses, tailored suits and refined accessories.
                Soft earthy colours are encouraged, while bright neon shades,
                denim and casual trainers are best avoided.
              </p>

              <p className="mt-4 text-xs leading-6 italic text-[#8e8f7c]">
                Note: We kindly request that guests refrain from wearing white,
                ivory, or cream to allow the bride to shine on her special day.
              </p>

              <div className="mt-10 flex flex-col gap-4 text-[#676b57]/80 text-sm">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-[#D6C27A]" />
                  <span>Formal Attire</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-[#D6C27A]" />
                  <span>Earthy & Romantic Tones</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-[#D6C27A]" />
                  <span>Garden-Friendly Footwear Recommended</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-1 flex-col justify-center">
              <p className="mb-8 text-center text-xs uppercase tracking-[0.35em] text-[#8e8f7c]">
                Wedding Colour Palette
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {colours.map((colour) => (
                  <div key={colour.hex} className="flex flex-col items-center">
                    <div
                      className="h-20 w-20 rounded-full border-4 border-white shadow-lg"
                      style={{ backgroundColor: colour.hex }}
                    />

                    <span className="mt-3 text-xs tracking-wide text-[#676b57]">
                      {colour.name}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-10 px-4 text-center text-xs italic text-[#8e8f7c]">
                These colours are simply a guide to help create a beautifully
                coordinated day.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-b border-[#D6C27A]/75 pb-4 lg:flex-row">
          {/* Ladies */}
          <div className="flex-1 rounded-3xl bg-white/40 py-6 lg:px-8 backdrop-blur-sm">
            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#8e8f7c]">
              Ladies
            </p>

            <h4 className="text-xl font-light text-[#676b57]">
              Midi or Maxi Dresses
            </h4>

            <p className="mt-3 text-sm leading-7 text-[#676b57]/75">
              Elegant dresses in soft, romantic tones inspired by our wedding
              palette.
            </p>
          </div>

          {/* Gentlemen */}
          <div className="flex-1 rounded-3xl bg-white/40 py-6 lg:px-8 backdrop-blur-sm">
            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#8e8f7c]">
              Gentlemen
            </p>

            <h4 className="text-xl font-light text-[#676b57]">
              Suits & Smart Attire
            </h4>

            <p className="mt-3 text-sm leading-7 text-[#676b57]/75">
              Suits or smart button-down shirts paired with formal trousers.
            </p>
          </div>
        </div>
        {/* Models */}
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="mt-10 text-base uppercase tracking-[0.35em] text-[#8e8f7c]">
            Aesthetic
          </p>
          {/* Female Models */}

          <div className="relative w-full">
            <div className="w-full overflow-x-auto custom-scrollbar">
              <div className="flex mx-auto w-max items-center py-4">
                <img
                  src={SageDressWomen}
                  alt=""
                  className="w-[130px] flex-shrink-0 opacity-80 sm:w-[200px]"
                />

                <img
                  src={PinkDressWomen}
                  alt=""
                  className="w-[130px] flex-shrink-0 opacity-80 sm:w-[200px]"
                />

                <img
                  src={ChampagneWomen}
                  alt=""
                  className="w-[130px] flex-shrink-0 opacity-80 sm:w-[200px]"
                />
              </div>
            </div>
            <div className="sm:hidden pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-neutral-300/60 via-neutral-200/30 to-transparent" />
          </div>
          {/* Male Models */}
          <div className="relative w-full">
            <div className="w-full overflow-x-auto custom-scrollbar">
              <div className="flex mx-auto w-max items-center py-4">
                <img
                  src={GreenSuitMan}
                  alt=""
                  className="w-[130px] flex-shrink-0 opacity-80 sm:w-[200px]"
                />

                <img
                  src={GreyPinkSuitMan}
                  alt=""
                  className="w-[130px] flex-shrink-0 opacity-80 sm:w-[200px]"
                />

                <img
                  src={GreyWhiteSuitMan}
                  alt=""
                  className="w-[130px] flex-shrink-0 opacity-80 sm:w-[200px]"
                />
              </div>
            </div>
            <div className="sm:hidden pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-neutral-300/60 via-neutral-200/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
