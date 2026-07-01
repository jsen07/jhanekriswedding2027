import React from "react";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <nav className="flex w-full max-w-4xl items-center justify-between px-5 py-3 md:px-8">
        <div className="hidden items-center gap-8 md:flex">
          <a href="#story" className="nav-link">
            Our Story
          </a>
        </div>

        {/* <a
          href="#hero"
          className="font-tangerine text-5xl leading-none text-[#676b57]"
        >
          K <span className="text-amber-400/60">|</span> J
        </a> */}

        <div className="hidden items-center gap-8 md:flex">
          <a href="#gallery" className="nav-link">
            Donate
          </a>

          <a href="#details" className="nav-link">
            Details
          </a>

          <a
            href="#rsvp"
            className="rounded-full bg-amber-400 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#b08b80]"
          >
            RSVP
          </a>
        </div>

        <a
          href="#rsvp"
          className="rounded-full bg-amber-300 px-4 py-2 text-xs uppercase tracking-[0.2em] mt-4 text-white md:hidden"
        >
          RSVP
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
