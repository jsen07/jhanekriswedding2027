import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import GuestDetails from "./GuestDetails";
import Attendance from "./Attendance";
import MealDetails from "./MealDetails";
import AddGuest from "./AddGuest";
import Review from "./Review";
import ThankYou from "./ThankYou";

const createEmptyGuest = () => ({
  firstName: "",
  lastName: "",
  attending: null,
  mealPreference: "",
  dietaryRequirements: "",
});

const RsvpProcess = () => {
  const [step, setStep] = useState(1);

  const [guests, setGuests] = useState([createEmptyGuest()]);

  const [currentGuestIndex, setCurrentGuestIndex] = useState(0);

  const currentGuest = guests[currentGuestIndex];

  const submitRsvp = async () => {
    try {
      // await db.ref("rsvps").push({
      //   guests,
      //   submittedAt: firebase.database.ServerValue.TIMESTAMP,
      // });

      await db.ref("rsvps").push({
        guests,
        submittedAt: Date.now(),

        primaryGuest: `${guests[0].firstName} ${guests[0].lastName}`,
      });

      setStep(6);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [step]);

  const updateCurrentGuest = (updates) => {
    setGuests((previousGuests) =>
      previousGuests.map((guest, index) =>
        index === currentGuestIndex
          ? {
              ...guest,
              ...updates,
            }
          : guest,
      ),
    );
  };

  const handleAttendanceNext = () => {
    if (currentGuest.attending) {
      setStep(3);
    } else {
      setStep(4);
    }
  };

  const addAnotherGuest = () => {
    setGuests((previousGuests) => [...previousGuests, createEmptyGuest()]);

    setCurrentGuestIndex(guests.length);
    setStep(1);
  };

  const totalSteps = 5;

  return (
    <div className="min-h-screen py-8 px-4">
      {step <= totalSteps && (
        <div className="mb-10 flex justify-center gap-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className={`h-2 rounded-full transition-all duration-500 ${
                step >= item ? "w-10 bg-[#D6C27A]" : "w-2 bg-[#D6C27A]/30"
              }`}
            />
          ))}
        </div>
      )}

      {step === 1 && (
        <GuestDetails
          guest={currentGuest}
          updateGuest={updateCurrentGuest}
          next={() => setStep(2)}
          back={currentGuestIndex > 0 ? () => setStep(4) : undefined}
        />
      )}

      {step === 2 && (
        <Attendance
          guest={currentGuest}
          updateGuest={updateCurrentGuest}
          next={handleAttendanceNext}
          back={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <MealDetails
          guest={currentGuest}
          updateGuest={updateCurrentGuest}
          next={() => setStep(4)}
          back={() => setStep(2)}
        />
      )}

      {step === 4 && (
        <AddGuest
          currentGuest={currentGuest}
          addAnotherGuest={addAnotherGuest}
          review={() => setStep(5)}
          back={() => setStep(currentGuest.attending ? 3 : 2)}
        />
      )}

      {step === 5 && (
        <Review
          guests={guests}
          editGuest={(index) => {
            setCurrentGuestIndex(index);
            setStep(1);
          }}
          submit={submitRsvp}
          back={() => setStep(4)}
        />
      )}

      {step === 6 && <ThankYou />}
    </div>
  );
};

export default RsvpProcess;
