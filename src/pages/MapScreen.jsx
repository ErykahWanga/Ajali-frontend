import React from "react";
import MapView from "../components/Map/MapView";

const MapScreen = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Incidents Map</h2>
      <MapView />
    </div>
  );
};

export default MapScreen;

