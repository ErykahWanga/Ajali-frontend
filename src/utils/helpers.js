export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const getStatusColor = (status) => {
  switch (status) {
    case 'reported':
      return '#f39c12';
    case 'under_investigation':
      return '#3498db';
    case 'resolved':
      return '#2ecc71';
    default:
      return '#95a5a6';
  }
};

export const validateIncidentForm = (formData) => {
  const errors = {};
  if (!formData.title.trim()) errors.title = 'Title is required';
  if (!formData.description.trim()) errors.description = 'Description is required';
  if (!formData.latitude || !formData.longitude) errors.location = 'Location is required';
  return errors;
};