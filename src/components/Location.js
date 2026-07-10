import React, { useEffect, useRef } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const Location = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return;

    const key = process.env.REACT_APP_MAPTILER_KEY;
    if (!key) return;

    maptilersdk.config.apiKey = key;

    maptilersdk.config.workerUrl = "https://maptiler.com";

    if (mapContainerRef.current) {
      mapContainerRef.current.innerHTML = "";
    }

    const map = new maptilersdk.Map({
      container: mapContainerRef.current,
      style: maptilersdk.MapStyle.BASIC,
      center: [-1.3857, 52.3558],
      zoom: 12,
      navigationControl: "top-right",
      workerCount: 0,
    });

    new maptilersdk.Marker({ color: "#f2c1bd" })
      .setLngLat([-1.3857, 52.3558])
      .setPopup(
        new maptilersdk.Popup({
          offset: 30,
          maxWidth: "300px",
        }).setHTML(`
  <div class="bg-white p-2 text-center w-[200px] ">
    <h3 class="mt-3 text-base font-light text-[#676b57]">
      Bourton Hall
    </h3>

    <div class="mx-auto my-5 flex items-center justify-center gap-3">
      <div class="h-px w-10 bg-[#D6C27A]"></div>
      <div class="h-2 w-2 rotate-45 bg-[#D6C27A]"></div>
      <div class="h-px w-10 bg-[#D6C27A]"></div>
    </div>

    <p class="text-xs leading-7 text-[#676b57]/80">
      Main Street<br />
      Bourton-on-Dunsmore<br />
      Rugby CV23 9QZ
    </p>
  </div>
`),
      )
      .addTo(map);

    mapRef.current = map;
  }, []);

  return (
    <section
      id="location"
      className="relative overflow-hidden py-28 px-6 text-[#676b57]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#8e8f7c]">
            Getting Here
          </p>

          <h2 className="font-tangerine text-[5rem] leading-none md:text-[7rem]">
            Location
          </h2>

          <div className="my-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#D6C27A]" />
            <div className="h-2 w-2 rotate-45 bg-[#D6C27A]" />
            <div className="h-px w-16 bg-[#D6C27A]" />
          </div>

          <p className="mx-auto max-w-2xl leading-8 text-[#676b57]/80">
            Nestled in the heart of the Warwickshire countryside, Bourton Hall
            provides the perfect setting for our special day. We hope the
            information below helps you plan your journey with ease.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 flex flex-col md:px-14 md:flex-row">
          {/* Venue Information */}
          <div className="flex w-[520px] md:max-w-[350px] flex-col justify-center rounded-[32px] bg-white/40 py-8 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-[#8e8f7c]">
              Venue
            </p>

            <h3 className="mt-3 text-4xl font-light">Bourton Hall</h3>

            <p className="mt-6 leading-8 text-[#676b57]/80 text-sm">
              Main Street
              <br />
              Bourton-on-Dunsmore
              <br />
              Rugby
              <br />
              CV23 9QZ
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 text-[#676b57]/80 text-sm">
                <div className="h-3 w-3 rounded-full bg-[#D6C27A]" />
                Complimentary parking available
              </div>

              <div className="flex items-center gap-4 text-[#676b57]/80 text-sm">
                <div className="h-3 w-3 rounded-full bg-[#D6C27A]" />
                <span>Accessible Venue</span>
              </div>

              <div className="flex items-center gap-4 text-[#676b57]/80 text-sm">
                <div className="h-3 w-3 rounded-full bg-[#D6C27A]" />
                Beautiful countryside setting
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Bourton+Hall+Rugby+CV23+9QZ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex w-fit rounded-full bg-[#676b57] px-8 py-4 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-[#8e8f7c]"
            >
              Get Directions
            </a>
          </div>

          {/* Map */}
          <div className="flex-1 flex justify-center items-center">
            <div
              ref={mapContainerRef}
              className="h-[300px] md:h-full w-full overflow-hidden rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
