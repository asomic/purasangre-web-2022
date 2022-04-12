import React from "react";
import GoogleMapReact from "google-map-react";

import LocationPin from "./LocationPin";
import mapStyles from "../styles/mapStyles";

const Map = ({ location, zoomLevel }) => {
  const API_KEY = process.env.GOOGLE_MAPS_APIKEY;
  return (
    <>
      <GoogleMapReact
        options={{
          styles: mapStyles,
        }}
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          //   text={location.address}
        />
      </GoogleMapReact>
    </>
  );
};

export default Map;
