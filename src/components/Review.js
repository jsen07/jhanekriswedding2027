import React from "react";

const Review = ({ guests, back, submit, editGuest }) => {
  const attendingCount = guests.filter((guest) => guest.attending).length;

  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-center text-xs uppercase tracking-[0.4em] text-[#8e8f7c]">
        Review
      </p>

      <h2 className="mt-4 text-center font-tangerine text-6xl leading-none text-[#676b57]">
        Final Details
      </h2>

      <p className="mx-auto mt-6 max-w-md text-center text-sm leading-7 text-[#676b57]/70">
        Please review your RSVP before submitting.
      </p>

      <p className="mt-6 text-center text-sm text-[#676b57]/70">
        {attendingCount} of {guests.length} guests attending
      </p>

      <div className="mt-12 space-y-6">
        {guests.map((guest, index) => (
          <div
            key={index}
            className="
              rounded-3xl
              border
              border-[#D6C27A]/30
              bg-white/60
              p-8
              backdrop-blur-sm
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl text-[#676b57]">
                  {guest.firstName} {guest.lastName}
                </h3>

                <div className="mt-4 space-y-2 text-sm text-[#676b57]/80">
                  <p>
                    Attendance:{" "}
                    <span className="font-medium">
                      {guest.attending ? "Attending" : "Not Attending"}
                    </span>
                  </p>

                  {guest.attending && (
                    <>
                      <p>
                        Meal:{" "}
                        <span className="font-medium">
                          {guest.mealPreference}
                        </span>
                      </p>

                      <p>
                        Dietary Requirements:{" "}
                        <span className="font-medium">
                          {guest.dietaryRequirements || "None"}
                        </span>
                      </p>
                    </>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() => editGuest(index)}
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-[#8e8f7c]
                  transition
                  hover:text-[#676b57]
                "
              >
                Edit
              </button>
            </div>
          </div>
        ))}
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
          onClick={submit}
          className="
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
          Submit RSVP
        </button>
      </div>
    </div>
  );
};

export default Review;
