// 📁 src/components/Map/MapView.jsx
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -1.2921,
  lng: 36.8219,
};

const MapView = () => {
  const { reports } = useSelector((state) => state.reports);
  const [selected, setSelected] = useState(null);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        {reports.map((report) => (
          <Marker
            key={report.id}
            position={{ lat: report.latitude, lng: report.longitude }}
            onClick={() => setSelected(report)}
          />
        ))}

        {selected && (
          <InfoWindow
            position={{ lat: selected.latitude, lng: selected.longitude }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <p><strong>{selected.title}</strong></p>
              <p>{selected.status}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
