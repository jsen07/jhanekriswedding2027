import { useRef, useEffect } from "react";
import * as mapboxgl from "mapbox-gl/esm";
import "mapbox-gl/dist/mapbox-gl.css";

function Map() {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-1.3857, 52.3558],
      zoom: 15,
    });

    new mapboxgl.Marker({
      color: "#676b57",
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
    <>
      <div
        id="map-container"
        ref={mapContainerRef}
        className="w-full h-[400px] my-10"
      />
    </>
  );
}

export default Map;
