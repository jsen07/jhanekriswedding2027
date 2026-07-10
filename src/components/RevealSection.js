import React from "react";
import { InView } from "../hooks/Observer";

const RevealSection = ({ children, className = "", id }) => {
  const [ref, isVisible] = InView();

  return (
    <section
      ref={ref}
      id={id}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-16 opacity-0 blur-sm"
      }`}
    >
      {children}
    </section>
  );
};

export default RevealSection;
