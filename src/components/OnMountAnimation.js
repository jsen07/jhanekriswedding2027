import React, { useEffect } from "react";

const OnMountAnimation = ({ duration = 2000, onFinish }) => {
  useEffect(() => {
    const finishTimeout = setTimeout(() => {
      onFinish();
    }, duration);

    return () => {
      clearTimeout(finishTimeout);
    };
  }, [duration, onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-sage">
      <div className="text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8e8f7c]">
          Welcome to the wedding of
        </p>

        <h1 className="font-tangerine text-[5rem] leading-none text-[#676b57]">
          Kris <span className="text-[#D6C27A]">&</span> Jhane
        </h1>

        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#676b57]">
          Loading invitation
        </p>

        <div className="mt-8 h-px w-56 overflow-hidden bg-[#676b57]/20 mx-auto">
          <div className="h-full origin-left animate-[loadingBar_2s_linear_forwards] bg-[#D6C27A]" />
        </div>
      </div>
    </div>
  );
};

export default OnMountAnimation;
