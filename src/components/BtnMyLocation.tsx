import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error("El mapa no está listo");
    if (!userLocation) throw new Error("No hay ubicación del usuario");

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };

  return (
    <button
      className="btn btn-primary"
      onClick={onClick}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 999,
        backgroundColor: "#61DBFB",
        border: "none",
        padding: '7px',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)'
      }}
    >
      Mi ubicación
    </button>
  );
};
