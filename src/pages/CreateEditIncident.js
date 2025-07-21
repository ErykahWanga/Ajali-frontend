import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createIncident, updateIncident, fetchIncidentById,} from '../store/slices/incidentSlice';
import IncidentForm from '../components/IncidentForm/IncidentForm';
import Modal from '../components/Modal/Modal';
import './CreateEditIncident.css';

const CreateEditIncident = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { currentIncident, loading, error } = useSelector((state) => state.incidents);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchIncidentById(id));
    }
  }, [id, dispatch]);

  const handleSubmit = async (formData) => {
    try {
      if (id) {
        await dispatch(updateIncident({ id, ...formData })).unwrap();
      } else {
        await dispatch(createIncident(formData)).unwrap();
      }
      navigate('/');
    } catch (err) {
      console.error('Failed to save incident:', err);
    }
  };

  const handleCancel = () => {
    if (Object.values(currentIncident).some(val => val !== '')) {
      setShowModal(true);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="create-edit-incident">
      <h1>{id ? 'Edit Incident' : 'Create New Incident'}</h1>
      {error && <p className="error">{error}</p>}
      <IncidentForm
        incident={id ? currentIncident : null}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => navigate('/')}
        title="Discard Changes?"
        message="Are you sure you want to leave? All unsaved changes will be lost."
      />
    </div>
  );
};

export default CreateEditIncident;