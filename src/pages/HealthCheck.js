import React from 'react';
import './HealthCheck.css';

const HealthCheck = () => {
  return (
    <div className="health-check">
      <h1>System Health</h1>
      <div className="health-status">
        <div className="status-card online">
          <h3>API Service</h3>
          <p>Operational</p>
        </div>
        <div className="status-card online">
          <h3>Database</h3>
          <p>Connected</p>
        </div>
        <div className="status-card online">
          <h3>Storage</h3>
          <p>Available</p>
        </div>
      </div>
    </div>
  );
};

export default HealthCheck;