import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-white/80 overflow-hidden px-6 py-14 text-[#676b57]">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#8e8f7c]">
          Thank You For Celebrating With Us
        </p>

        <h2 className="font-tangerine text-[5rem] leading-none md:text-[7rem]">
          Kris <span className="text-[#D6C27A]">&</span> Jhane
        </h2>

        <div className="my-8 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-[#D6C27A]" />
          <div className="h-2 w-2 rotate-45 bg-[#D6C27A]" />
          <div className="h-px w-16 bg-[#D6C27A]" />
        </div>

        <p className="text-sm uppercase tracking-[0.35em] text-[#676b57]/80">
          07 July 2027 · Bourton Hall
        </p>

        {/* <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.25em]">
          <a href="#hero" className="transition hover:text-[#D6C27A]">
            Home
          </a>
          <a href="#story" className="transition hover:text-[#D6C27A]">
            Our Story
          </a>
          <a href="#details" className="transition hover:text-[#D6C27A]">
            Details
          </a>
          <a href="#rsvp" className="transition hover:text-[#D6C27A]">
            RSVP
          </a>
          <a href="#faq" className="transition hover:text-[#D6C27A]">
            FAQ
          </a>
        </div> */}

        <p className="mt-12 text-xs tracking-[0.2em] text-[#8e8f7c]">
          Made with love · 2027
        </p>

        <p className="mt-8 text-[8px] tracking-[0.2em] text-[#8e8f7c]">
          Created by Jayssen De Castro
        </p>
      </div>
    </footer>
  );
};

export default Footer;
