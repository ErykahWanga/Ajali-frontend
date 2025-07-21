import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './Map.css';

const Map = ({ incidents, onMarkerClick, selectedIncident, onMapClick }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: selectedIncident?.latitude || 0,
    lng: selectedIncident?.longitude || 0,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onClick={onMapClick}
      >
        {incidents.map((incident) => (
          <Marker
            key={incident.id}
            position={{ lat: incident.latitude, lng: incident.longitude }}
            onClick={() => onMarkerClick(incident)}
          />
        ))}
        {selectedIncident && (
          <InfoWindow
            position={{ lat: selectedIncident.latitude, lng: selectedIncident.longitude }}
            onCloseClick={() => onMarkerClick(null)}
          >
            <div className="info-window">
              <h3>{selectedIncident.title}</h3>
              <p>{selectedIncident.description}</p>
              <span className={`status-tag ${selectedIncident.status}`}>
                {selectedIncident.status.replace('_', ' ')}
              </span>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;