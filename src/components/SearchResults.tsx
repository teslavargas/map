import { useContext, useState } from "react";
import { PlacesContext, MapContext } from "../context";
import { Feature } from "../interfaces/places";
import { LoadingPlaces } from "./";

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);

  const { map, getRouteBetweenPoints } = useContext(MapContext);

  const [activePlaceId, setActivePlaceId] = useState("");

  const onPlaceClicked = (place: Feature) => {
    setActivePlaceId(place.id);

    const [lng, lat] = place.center;
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  const getRoute = ( place: Feature ) => {
    if ( !userLocation ) return;
    const [lng, lat] = place.center;

    getRouteBetweenPoints(userLocation, [lng, lat]);
}

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }
  if (places.length === 0) {
    return <></>;
  }

  return (
    <ul className="list-group mt-2 ul-background">
      {places.map((place) => (
        <li
          key={place.id}
          className={`list-group-item list-group-item-action list-background pointer ${
            activePlaceId === place.id && "activePlace"
          }`}
          onClick={() => onPlaceClicked(place)}
        >
          <h6
            style={{
              color: "#61dbfb",
            }}
          >
            {place.text_es}
          </h6>
          <p
            className="text-muted"
            style={{
              fontSize: "12px",
            }}
          >
            {place.place_name_es}
          </p>
          <button 
            onClick={() => getRoute(place)}
            className="btn btn-outline-primary btn-sm btn-search"
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
