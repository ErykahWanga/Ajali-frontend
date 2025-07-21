import React from 'react';
import './IncidentCard.css';

const IncidentCard = ({ incident, onClick, isSelected }) => {
  const statusColors = {
    reported: '#f39c12',
    under_investigation: '#3498db',
    resolved: '#2ecc71'
  };

  return (
    <div 
      className={`incident-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <h3>{incident.title}</h3>
      <p className="description">{incident.description}</p>
      <div className="meta">
        <span 
          className="status"
          style={{ backgroundColor: statusColors[incident.status] }}
        >
          {incident.status.replace('_', ' ')}
        </span>
        <span className="date">
          {new Date(incident.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default IncidentCard;