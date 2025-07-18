import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MapView = ({ incidents }) => {
  const navigate = useNavigate();
  const [selectedIncident, setSelectedIncident] = useState(null);

  const mapContainerStyle = {
    height: '500px',
    width: '100%',
  };

  const center = {
    lat: incidents.length > 0 ? incidents[0].latitude : 0,
    lng: incidents.length > 0 ? incidents[0].longitude : 0,
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        {incidents.map((incident) => (
          <Marker
            key={incident.id}
            position={{ lat: incident.latitude, lng: incident.longitude }}
            onClick={() => setSelectedIncident(incident)}
          >
            {selectedIncident?.id === incident.id && (
              <InfoWindow onCloseClick={() => setSelectedIncident(null)}>
                <div className="p-2">
                  <h3 className="font-bold">{incident.title}</h3>
                  <p>Status: {incident.status}</p>
                  <p>Category: {incident.category}</p>
                  <button
                    onClick={() => navigate(`/incident/${incident.id}`)}
                    className="text-blue-600 hover:underline"
                  >
                    View Details
                  </button>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
