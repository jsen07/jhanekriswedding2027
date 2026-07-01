import React from "react";
import storyborder from "../assets/07397740e5e379825087a8b71720ecff.webp";
import whiteflower from "../assets/whiteflower.webp";
import Couple from "../assets/KrisAndJhane.webp";

const timeline = [
  {
    date: "2019",
    title: "The First Meeting",
    description: "The beginning.",
  },
  {
    date: "2021",
    title: "Our First Adventure",
    description: "The middle",
  },
  {
    date: "2025",
    title: "The Proposal",
    description: "Somwhere.",
  },
  {
    date: "2027",
    title: "Our Wedding Day",
    description: "Wedding dayy",
  },
];

const Story = () => {
  return (
    <section
      id="story"
      className="relative px-5 py-24 text-[#676b57] sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute left-15 top-1/3 -translate-x-1/2 -translate-y-1/2">
        <img
          src={whiteflower}
          alt=""
          className="w-[380px] opacity-90 sm:w-[420px] lg:w-[560px] 2xl:w-[650px]"
        />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#8e8f7c]">
            Our Journey
          </p>

          <h2 className="font-tangerine text-[5rem] leading-none md:text-[7rem]">
            Our Story
          </h2>

          <div className="my-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#D6C27A]" />
            <div className="h-2 w-2 rotate-45 bg-[#D6C27A]" />
            <div className="h-px w-16 bg-[#D6C27A]" />
          </div>

          <p className="mx-auto max-w-2xl leading-8 text-[#676b57]/80">
            Every love story is unique, and ours has been filled with laughter,
            adventures, and countless beautiful memories. Here's a glimpse into
            the moments that led us here.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-[#D6C27A]/40 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">
            {timeline.map((item, index) => (
              <div
                key={item.date}
                className={`relative flex flex-col gap-6 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="mx-4 mt-4 md:w-1/2">
                  <div className="rounded-3xl bg-white/90 mx-2 border-b p-8">
                    <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#D6C27A]">
                      {item.date}
                    </p>

                    <h3 className="mb-4 text-2xl font-light">{item.title}</h3>

                    <p className="leading-8 text-[#676b57]/80 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* dot */}
                <div className="absolute left-4 top-10 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#F8F4EA] bg-[#D6C27A] md:left-1/2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Photo Placeholder */}
                <div className="md:flex md:w-1/2 md:items-center md:justify-center">
                  {index === 2 ? (
                    <div className="relative w-[380px] sm:w-[420px] lg:w-[560px] 2xl:w-[650px] aspect-square">
                      {/* Photo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={Couple}
                          alt="Kris & Jhane"
                          className="h-[70%] w-[70%] rounded object-cover"
                        />
                      </div>

                      <img
                        src={storyborder}
                        alt=""
                        className="absolute inset-0 z-10 h-full w-full object-contain pointer-events-none"
                      />
                    </div>
                  ) : (
                    <div className="mx-6 aspect-square w-full max-w-xs rounded-3xl bg-white/90 backdrop-blur-sm shadow-lg shadow-[#676b57]/5 flex items-center justify-center text-[#8e8f7c]">
                      Photo Here
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
