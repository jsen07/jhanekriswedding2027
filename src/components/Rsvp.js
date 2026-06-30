import React from "react";

const Rsvp = () => {
  return (
    <section
      id="rsvp"
      className="relative flex min-h-screen items-center justify-center px-5 py-20 text-[#676b57]"
    >
      <div className="w-full max-w-2xl rounded-3xl bg-white/40 p-4 md:p-12">
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
            let us know whether you'll be joining us by completing the form
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

          <div>
            <label className="mb-3 block text-sm uppercase tracking-[0.25em] text-[#8e8f7c]">
              Will you be attending?
            </label>

            <div className="flex gap-4 mt-6">
              <label className="flex cursor-pointer items-center gap-2 text-xs">
                <input type="radio" name="attendance" />
                Joyfully Accept
              </label>

              <label className="flex cursor-pointer items-center gap-2 text-xs">
                <input type="radio" name="attendance" />
                Regretfully Decline
              </label>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm uppercase tracking-[0.25em] text-[#8e8f7c]">
              Comments
            </label>

            <textarea
              rows={4}
              placeholder="Please let us know if you have any dietary requirements..."
              className="text-base w-full resize-none rounded-xl border border-[#676b57]/20 bg-white/20 p-4 outline-none transition focus:border-[#D6C27A]"
            />
          </div>

          <button
            className="
              mt-6
              w-full
              rounded-full
              bg-[#676b57]
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
