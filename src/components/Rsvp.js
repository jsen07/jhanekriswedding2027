import React from "react";
import FlowerBanner from "../assets/Flower-banner.png";
const Rsvp = () => {
  return (
    <section
      id="rsvp"
      className="relative flex min-h-screen items-center justify-center px-5 py-20 text-[#676b57]"
    >
      <div className="relative w-full max-w-2xl  overflow-visible rounded-3xl bg-white/40 md:p-12">
        <div className="pointer-events-none absolute left-1/2 -top-40 -translate-x-1/2  -translate-y-[10%]">
          <img
            src={FlowerBanner}
            alt="flower-banner"
            className="
            max-w-none
      w-[320px]
      sm:w-[450px]
      lg:w-[650px]
      xl:w-[750px]
      2xl:w-[450px]
      select-none
    "
          />
        </div>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#8e8f7c]">
            Kindly Reply
          </p>

          <h2 className="mt-4 font-tangerine text-7xl leading-none md:text-8xl">
            RSVP
          </h2>

          <div className="my-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#D6C27A]" />
            <div className="h-2 w-2 rotate-45 bg-[#D6C27A]" />
            <div className="h-px w-16 bg-[#D6C27A]" />
          </div>

          <p className="mx-auto max-w-lg leading-8 text-[#676b57]/80">
            We would be honoured to celebrate this special day with you. Please
            let us know whether you will be joining us by completing the form
            below.
          </p>
        </div>

        <form className="mt-10 space-y-6">
          <div>
            <label className="mb-2 block text-sm uppercase tracking-[0.25em] text-[#8e8f7c]">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="w-full border-b border-[#676b57]/20 bg-transparent py-3 outline-none transition focus:border-[#D6C27A]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm uppercase tracking-[0.25em] text-[#8e8f7c]">
              Email
            </label>

            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border-b border-[#676b57]/20 bg-transparent py-3 outline-none transition focus:border-[#D6C27A]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="mb-2 block text-sm uppercase tracking-[0.25em] text-[#8e8f7c]">
              Phone Number{" "}
              <span className="text-xs italic normal-case tracking-tighter">
                (Recommended)
              </span>
            </label>

            <input
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="0121 Do 1 mate"
              className="w-full border-b border-[#676b57]/20 text-sm bg-transparent py-3 outline-none transition focus:border-[#D6C27A]"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm uppercase tracking-[0.25em] text-[#8e8f7c]">
              Will you be attending?
            </label>

            <div className="flex gap-4 mt-6 mb-10">
              <label className="flex cursor-pointer items-center gap-2 text-xs">
                <input
                  type="radio"
                  name="attendance"
                  className="h-4 w-4 accent-[#D6C27A]"
                />
                Accept
              </label>

              <label className="flex cursor-pointer items-center gap-2 text-xs">
                <input
                  type="radio"
                  name="attendance"
                  className="h-4 w-4 accent-[#D6C27A]"
                />
                Decline
              </label>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm uppercase tracking-[0.25em] text-[#8e8f7c]">
              Comments
            </label>

            <textarea
              rows={6}
              placeholder="Please let us know if you have any dietary requirements..."
              className="text-sm placeholder:text-sm w-full resize-none rounded-xl border border-[#676b57]/20 bg-white/20 p-4 outline-none transition focus:border-[#D6C27A]"
            />
          </div>

          <button
            className="
              mt-6
              w-full
              rounded-full
              bg-[#D6C27A]
              py-4
              text-sm
              uppercase
              tracking-[0.3em]
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#8e8f7c]
            "
          >
            Send RSVP
          </button>
        </form>
      </div>
    </section>
  );
};

export default Rsvp;
