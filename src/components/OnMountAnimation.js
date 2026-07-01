import React, { useEffect } from "react";

const preloadImages = (images = []) => {
  return Promise.all(
    images.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        }),
    ),
  );
};

const OnMountAnimation = ({ duration = 2000, onFinish, images = [] }) => {
  useEffect(() => {
    let isMounted = true;

    const timer = new Promise((resolve) => {
      setTimeout(resolve, duration);
    });

    Promise.all([timer, preloadImages(images)]).then(() => {
      if (isMounted) {
        onFinish?.();
      }
    });

    return () => {
      isMounted = false;
    };
  }, [duration, onFinish, images]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-sage">
      <div className="text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8e8f7c]">
          Welcome to the wedding of
        </p>

        <h1 className="font-tangerine text-[5rem] leading-none text-[#676b57]">
          Kris <span className="text-[#D6C27A]">&</span> Jhane
        </h1>

        <div className="mx-auto mt-8 h-px w-56 overflow-hidden bg-[#676b57]/20">
          <div
            className="h-full origin-left bg-[#D6C27A]"
            style={{
              animation: `loadingBar ${duration}ms linear forwards`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OnMountAnimation;
