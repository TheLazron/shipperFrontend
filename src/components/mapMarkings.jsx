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
      center={[currentLocation.latitude, currentLocation.longitude]}
      zoom={18}
      scrollWheelZoom={false}
      className="w-full h-2/3 rounded-3xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ReactLeafletDriftMarker
        ref={markerRef}
        draggable
        position={[currentLocation.latitude, currentLocation.longitude]}
        duration={1000}
        keepAtCenter
      >
        <Popup>Popup</Popup>
      </ReactLeafletDriftMarker>
      <Circle
        ref={circleRef}
        center={{
          lat: circleCenter.lat,
          lng: circleCenter.lng,
        }}
        color="green"
        radius={20}
        fillOpacity={0.5}
      ></Circle>
    </MapContainer>
  );
};

export default MapMarkings;
