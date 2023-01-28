import React, { useEffect, useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  Circle,
  useMapEvents,
  useMap,
} from "react-leaflet";

const MapMarkings = () => {
  return (
    <MapContainer
      center={[32.392391, 75.510246]}
      zoom={18}
      scrollWheelZoom={false}
      className="w-full h-2/3 rounded-3xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <ReactLeafletDriftMarker
        ref={markerRef}
        draggable
        position={[0, 0]}
        duration={1000}
        keepAtCenter
      >
        <Popup>Popup</Popup>
      </ReactLeafletDriftMarker> */}
    </MapContainer>
  );
};

export default MapMarkings;
