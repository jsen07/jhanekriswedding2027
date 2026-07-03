import React, { useEffect, useRef } from "react";
import * as mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Location = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const token = process.env.REACT_APP_MAPBOX_TOKEN;

    if (!token) {
      console.error("Missing REACT_APP_MAPBOX_TOKEN");
      return;
    }

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-1.3857, 52.3558],
      zoom: 15,
    });

    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    new mapboxgl.Marker({
      color: "#f2c1bd",
    })
      .setLngLat([-1.3857, 52.3558])
      .setPopup(
        new mapboxgl.Popup().setHTML(`
          <h3>Bourton Hall</h3>
          <p>Wedding Venue</p>
        `),
      )
      .addTo(map);

    mapRef.current = map;

    return () => map.remove();
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
        <div className="mt-20 flex flex-col lg:flex-row">
          {/* Venue Information */}
          <div className="flex w-[520px] flex-col justify-center rounded-[32px] bg-white/40 py-8 lg:p-10 backdrop-blur-sm">
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
              className="h-[300px] lg:h-[500px] w-full overflow-hidden rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
