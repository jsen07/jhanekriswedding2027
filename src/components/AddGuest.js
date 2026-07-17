import React from "react";

const AddGuest = ({ currentGuest, addAnotherGuest, review, back }) => {
  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-[#8e8f7c]">
        Guest Added
      </p>

      <h2 className="mt-4 text-3xl font-light text-[#676b57]">
        Thank you, {currentGuest.firstName}
      </h2>

      <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#676b57]/70">
        Would you also like to complete an RSVP for another person included in
        your invitation?
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={back}
          className="rounded-full border border-[#676b57]/25 px-7 py-4 text-xs uppercase tracking-[0.25em] text-[#676b57] transition hover:bg-white/40"
        >
          Back
        </button>

        <button
          type="button"
          onClick={addAnotherGuest}
          className="rounded-full border border-[#D6C27A] px-7 py-4 text-xs uppercase tracking-[0.25em] text-[#676b57] transition hover:bg-[#D6C27A]/10"
        >
          Add Another Guest
        </button>

        <button
          type="button"
          onClick={review}
          className="rounded-full bg-[#676b57] px-7 py-4 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-[#8e8f7c]"
        >
          Review RSVP
        </button>
      </div>
    </div>
  );
};

export default AddGuest;
