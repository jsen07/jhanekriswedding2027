import React from "react";

const Attendance = ({ guest, updateGuest, next, back }) => {
  const canContinue = guest.attending !== null;

  return (
    <div className="mx-auto max-w-xl">
      <p className="text-center text-xs uppercase tracking-[0.4em] text-[#8e8f7c]">
        Attendance
      </p>

      <h2 className="mt-4 text-center font-tangerine text-6xl leading-none text-[#676b57]">
        Will You Be Joining Us?
      </h2>

      <p className="mx-auto mt-6 max-w-md text-center text-sm leading-7 text-[#676b57]/70">
        Please let us know whether{" "}
        <span className="font-medium">
          {guest.firstName} {guest.lastName}
        </span>{" "}
        will be attending our special day.
      </p>

      <div className="mt-12 space-y-4">
        <button
          type="button"
          onClick={() =>
            updateGuest({
              attending: true,
            })
          }
          className={`w-full rounded-3xl border p-4 text-left transition ${
            guest.attending === true
              ? "border-[#D6C27A] bg-[#D6C27A]/10"
              : "border-[#D6C27A]/30 bg-white/60 hover:bg-white"
          }`}
        >
          <p className="text-md text-[#676b57]">Joyfully Accept</p>

          <p className="mt-2 text-xs text-[#676b57]/70">
            We can't wait to celebrate with you.
          </p>
        </button>

        <button
          type="button"
          onClick={() =>
            updateGuest({
              attending: false,
            })
          }
          className={`w-full rounded-3xl border p-4 text-left transition ${
            guest.attending === false
              ? "border-[#D6C27A] bg-[#D6C27A]/10"
              : "border-[#D6C27A]/30 bg-white/60 hover:bg-white"
          }`}
        >
          <p className="text-md text-[#676b57]">Regretfully Decline</p>

          <p className="mt-2 text-xs text-[#676b57]/70">
            We will miss celebrating with you.
          </p>
        </button>
      </div>

      <div className="mt-12 flex items-center justify-between">
        <button
          type="button"
          onClick={back}
          className="
            rounded-full
            border
            border-[#676b57]/20
            px-8
            py-4
            text-xs
            uppercase
            tracking-[0.3em]
            text-[#676b57]
            transition
            hover:bg-white/50
          "
        >
          Back
        </button>

        <button
          type="button"
          disabled={!canContinue}
          onClick={next}
          className={`
            rounded-full
            px-8
            py-4
            text-xs
            uppercase
            tracking-[0.3em]
            text-white
            transition
            ${
              canContinue
                ? "bg-[#676b57] hover:bg-[#8e8f7c]"
                : "cursor-not-allowed bg-[#676b57]/40"
            }
          `}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Attendance;
