/* eslint import/no-webpack-loader-syntax: off */
//@ts-ignore
import { Map } from "!mapbox-gl";

import { useContext, useLayoutEffect, useRef } from "react";
import { PlacesContext, MapContext } from "../context";

import { Loading } from "./";

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: "mapbox://styles/mapbox/dark-v10", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 12, // starting zoom
      });
      setMap(map);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      ref={mapDiv}
      style={{
        height: "100vh",
        left: 0,
        position: "fixed",
        top: 0,
        width: "100vw",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <p style={{ color: "white" }}>{userLocation?.join(",")}</p>
    </div>
  );
};
