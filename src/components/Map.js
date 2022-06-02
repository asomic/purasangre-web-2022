import React from "react";
import GoogleMapReact from "google-map-react";

import LocationPin from "./LocationPin";
import mapStyles from "../styles/mapStyles";

const Map = ({ location, zoomLevel }) => {
  const API_KEY = process.env.GOOGLE_MAPS_APIKEY;

  // function _onClick(obj) {
  //   // console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);
  // }

  return (
    <>
      <GoogleMapReact
        options={{
          styles: mapStyles,
        }}
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        // onClick={_onClick}
        onClick={() =>
          window.open(
            "https://www.google.com/maps/place/Pura+Sangre+CrossFit/@-34.9842245,-71.2184862,17z/data=!3m1!4b1!4m5!3m4!1s0x966457b7de8d5a7f:0xfba538fd4f0401f0!8m2!3d-34.9842245!4d-71.2162975?hl=es-ES",
            "_blank"
          )
        }
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
