import React from "react";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
const Navbar = () => {
  const navigate = useNavigate();
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

          <button
            onClick={() => navigate("/rsvp")}
            className="rounded-full bg-[#D6C27A] px-5 py-2 text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#D6C27A]"
          >
            Rsvp
            {/* <a
              href="#rsvp"
              className="rounded-full bg-[#D6C27A] px-5 py-2 text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#D6C27A]"
           >
              RSVP
           </a>  */}
          </button>
        </div>

        <button
          onClick={() => navigate("/rsvp")}
          className="rounded-full bg-[#D6C27A] px-5 py-2 text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#D6C27A] md:hidden"
        >
          RSVP
        </button>
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
