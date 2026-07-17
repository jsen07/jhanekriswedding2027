import React from "react";

const meals = ["Chicken", "Beef", "Vegetarian", "Vegan"];

const MealDetails = ({ guest, updateGuest, next, back }) => {
  const canContinue = guest.mealPreference?.trim().length > 0;

  return (
    <div className="mx-auto max-w-xl">
      <p className="text-center text-xs uppercase tracking-[0.4em] text-[#8e8f7c]">
        Meal Preference
      </p>

      <h2 className="mt-4 text-center font-tangerine text-6xl leading-none text-[#676b57]">
        Dining Details
      </h2>

      <p className="mx-auto mt-6 max-w-md text-center text-sm leading-7 text-[#676b57]/70">
        Please let us know{" "}
        <span className="font-medium">{guest.firstName}'s</span> meal preference
        and any dietary requirements.
      </p>

      {/* Meal Selection */}
      <div className="mt-12 space-y-4">
        {meals.map((meal) => (
          <button
            key={meal}
            type="button"
            onClick={() =>
              updateGuest({
                mealPreference: meal,
              })
            }
            className={`w-full rounded-3xl text-sm border p-4 text-left transition ${
              guest.mealPreference === meal
                ? "border-[#D6C27A] bg-[#D6C27A]/10"
                : "border-[#D6C27A]/30 bg-white/60 hover:bg-white"
            }`}
          >
            <p className="text-[#676b57]">{meal}</p>
          </button>
        ))}
      </div>

      {/* Dietary Requirements */}
      <div className="mt-10">
        <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-[#8e8f7c]">
          Dietary Requirements
        </label>

        <textarea
          rows={4}
          value={guest.dietaryRequirements || ""}
          onChange={(event) =>
            updateGuest({
              dietaryRequirements: event.target.value,
            })
          }
          placeholder="Please let us know of any allergies or dietary requirements."
          className="
            w-full
            rounded-3xl
            border
            border-[#D6C27A]/30
            bg-white/60
            px-6
            py-4
            text-[#676b57]
            outline-none
            transition
            placeholder:text-[#8e8f7c]/60
            focus:border-[#D6C27A]
          "
        />
      </div>

      {/* Navigation */}
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

export default MealDetails;
