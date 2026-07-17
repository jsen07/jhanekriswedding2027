import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-[#8e8f7c]">
        RSVP Received
      </p>

      <h2 className="mt-4 font-tangerine text-7xl leading-none text-[#676b57]">
        Thank You
      </h2>

      <div className="my-8 flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-[#D6C27A]" />
        <div className="h-2 w-2 rotate-45 bg-[#D6C27A]" />
        <div className="h-px w-16 bg-[#D6C27A]" />
      </div>

      <p className="mx-auto max-w-lg text-sm leading-8 text-[#676b57]/75">
        Thank you for taking the time to respond to our invitation. We are
        incredibly grateful and cannot wait to celebrate this special day
        together.
      </p>

      <p className="mt-8 text-[#8e8f7c] italic">With love,</p>

      <h3 className="mt-2 font-tangerine text-5xl text-[#676b57]">
        Kris & Jhane
      </h3>

      <div className="mt-12">
        <Link
          to="/"
          className="
            inline-flex
            rounded-full
            bg-[#676b57]
            px-8
            py-4
            text-xs
            uppercase
            tracking-[0.3em]
            text-white
            transition
            hover:bg-[#8e8f7c]
          "
        >
          Return to Website
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
