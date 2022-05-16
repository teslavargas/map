/* eslint import/no-webpack-loader-syntax: off */

import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";

//@ts-ignore
import mapboxgl from "!mapbox-gl"; 


mapboxgl.accessToken =
  "pk.eyJ1IjoidGVzbGF2YXJnYXMiLCJhIjoiY2wyejhkOG9iMWNsOTNqb2JiZnVmeDVxbCJ9.YbtklYNq8ncWREO-RDYcMw";

if (!navigator.geolocation) {
  alert("Tu navegador no tiene acceso a la geolocalización");
  throw new Error("Tu navegador no tiene acceso a la geolocalización");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
