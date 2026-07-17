import React from "react";

const GuestDetails = ({ guest, updateGuest, next, back }) => {
  const canContinue =
    guest.firstName.trim().length > 0 && guest.lastName.trim().length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!canContinue) return;

    next();
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
      <p className="text-center text-xs uppercase tracking-[0.4em] text-[#8e8f7c]">
        Guest Details
      </p>

      <h2 className="mt-4 text-center font-tangerine text-6xl leading-none text-[#676b57]">
        Tell Us Who You Are
      </h2>

      <p className="mx-auto mt-6 max-w-md text-center text-sm leading-7 text-[#676b57]/70">
        Please enter the name of the guest you are completing this RSVP for.
      </p>

      <div className="mt-12 space-y-4">
        <div>
          <label
            htmlFor="firstName"
            className="mb-3 block text-xs uppercase tracking-[0.3em] text-[#8e8f7c]"
          >
            First Name
          </label>

          <input
            id="firstName"
            type="text"
            autoCapitalize="words"
            autoComplete="given-name"
            value={guest.firstName}
            onChange={(event) => updateGuest({ firstName: event.target.value })}
            placeholder="First name"
            className="w-full rounded-3xl border border-[#D6C27A]/30 bg-white/60 px-6 py-4 text-[#676b57] outline-none transition placeholder:text-[#8e8f7c]/60 focus:border-[#D6C27A]"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="mb-3 block text-xs uppercase tracking-[0.3em] text-[#8e8f7c]"
          >
            Last Name
          </label>

          <input
            id="lastName"
            type="text"
            autoCapitalize="words"
            autoComplete="family-name"
            value={guest.lastName}
            onChange={(event) => updateGuest({ lastName: event.target.value })}
            placeholder="Last name"
            className="w-full rounded-3xl border border-[#D6C27A]/30 bg-white/60 px-6 py-4 text-[#676b57] outline-none transition placeholder:text-[#8e8f7c]/60 focus:border-[#D6C27A]"
          />
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between gap-4">
        {back ? (
          <button
            type="button"
            onClick={back}
            className="rounded-full border border-[#676b57]/20 px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#676b57] transition hover:bg-white/50"
          >
            Back
          </button>
        ) : (
          <div />
        )}

        <button
          type="submit"
          disabled={!canContinue}
          className={`rounded-full px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition ${
            canContinue
              ? "bg-[#676b57] hover:bg-[#8e8f7c]"
              : "cursor-not-allowed bg-[#676b57]/35"
          }`}
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default GuestDetails;
