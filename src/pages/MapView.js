import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIncidents } from '../store/slices/incidentSlice';
import Map from '../components/Map/Map';
import IncidentCard from '../components/IncidentCard/IncidentCard';
import './MapView.css';

const MapView = () => {
  const dispatch = useDispatch();
  const { incidents, loading, error } = useSelector((state) => state.incidents);
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    category: '',
  });

  useEffect(() => {
    dispatch(fetchIncidents());
  }, [dispatch]);

  const handleMarkerClick = (incident) => {
    setSelectedIncident(incident);
  };

  const handleMapClick = () => {
    setSelectedIncident(null);
  };

  const filteredIncidents = incidents.filter((incident) => {
    return (
      (filters.status === '' || incident.status === filters.status) &&
      (filters.category === '' || incident.category === filters.category)
    );
  });

  return (
    <div className="map-view">
      <div className="sidebar">
        <div className="filters">
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">All Statuses</option>
            <option value="reported">Reported</option>
            <option value="under_investigation">Under Investigation</option>
            <option value="resolved">Resolved</option>
          </select>
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          >
            <option value="">All Categories</option>
            <option value="accident">Accident</option>
            <option value="crime">Crime</option>
            <option value="hazard">Hazard</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="incident-list">
          {loading && <p>Loading incidents...</p>}
          {error && <p className="error">{error}</p>}
          {filteredIncidents.map((incident) => (
            <IncidentCard
              key={incident.id}
              incident={incident}
              onClick={() => setSelectedIncident(incident)}
              isSelected={selectedIncident?.id === incident.id}
            />
          ))}
        </div>
      </div>
      <div className="map-container">
        <Map
          incidents={filteredIncidents}
          onMarkerClick={handleMarkerClick}
          onMapClick={handleMapClick}
          selectedIncident={selectedIncident}
        />
      </div>
    </div>
  );
};

export default MapView;