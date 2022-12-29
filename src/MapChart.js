import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import WorldMap from "./features.json";
import PointerData from "./data.json";
import "./styles.css";
import Details from "./Details";

const MapChart = () => {
  const [passData, setPassData] = useState({
    id: "",
    region: "",
    data: "",
    lat: "",
    lng: "",
  });

  return (
    <div className="container">
      <ComposableMap className="mapdiv">
        <Geographies geography={WorldMap}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} stroke="#FFF" />
            ))
          }
        </Geographies>
        {PointerData.map((pointerData) => (
          <Marker
            className="markerpointer"
            coordinates={[pointerData.pointer.lng, pointerData.pointer.lat]}
            key={pointerData.id}
            onClick={() => {
              setPassData({
                id: pointerData.id,
                region: pointerData.region,
                data: pointerData.data,
                lat: pointerData.pointer.lat,
                lng: pointerData.pointer.lng,
              });
            }}
          >
            {pointerData.data <= 300 ? (
              <rect width="10" height="10" fill="#C23A3A" />
            ) : pointerData.data >= 300 && pointerData.data <= 600 ? (
              <rect width="12" height="12" fill="#4092C1" />
            ) : (
              <rect width="14" height="14" r={12} fill="#49178D" />
            )}
          </Marker>
        ))}
      </ComposableMap>
      <Details mapdata={passData} />
    </div>
  );
};

export default MapChart;
