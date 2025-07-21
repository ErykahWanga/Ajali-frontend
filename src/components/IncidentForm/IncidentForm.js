import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './IncidentForm.css';

const IncidentForm = ({ incident, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: incident?.title || '',
    description: incident?.description || '',
    category: incident?.category || 'other',
    status: incident?.status || 'reported',
    latitude: incident?.latitude || 0,
    longitude: incident?.longitude || 0,
  });

  const [mediaPreviews, setMediaPreviews] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const newPreviews = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setMediaPreviews(prev => [...prev, ...newPreviews]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*,video/*',
    multiple: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, media: mediaPreviews });
  };

  return (
    <form className="incident-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="accident">Accident</option>
            <option value="crime">Crime</option>
            <option value="hazard">Hazard</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="reported">Reported</option>
            <option value="under_investigation">Under Investigation</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Location</label>
        <div className="location-inputs">
          <input
            type="number"
            name="latitude"
            placeholder="Latitude"
            value={formData.latitude}
            onChange={handleChange}
            step="any"
            required
          />
          <input
            type="number"
            name="longitude"
            placeholder="Longitude"
            value={formData.longitude}
            onChange={handleChange}
            step="any"
            required
          />
          <button type="button" onClick={handleLocationClick}>
            Use Current Location
          </button>
        </div>
      </div>

      <div className="form-group">
        <label>Media</label>
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <p>Drag & drop files here, or click to select</p>
          )}
        </div>
        <div className="media-previews">
          {mediaPreviews.map((preview, index) => (
            <div key={index} className="media-preview">
              {preview.file.type.startsWith('image/') ? (
                <img src={preview.preview} alt="Preview" />
              ) : (
                <video src={preview.preview} controls />
              )}
              <button
                type="button"
                onClick={() => {
                  setMediaPreviews(prev => prev.filter((_, i) => i !== index));
                  URL.revokeObjectURL(preview.preview);
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="form-actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">
          {incident ? 'Update' : 'Create'} Incident
        </button>
      </div>
    </form>
  );
};

export default IncidentForm;