import StatusChangeControl from './StatusChangeControl';

const IncidentDetailsCard = ({ incident }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{incident.title}</h2>
      <p className="text-gray-700 mb-2"><strong>Description:</strong> {incident.description}</p>
      <p className="text-gray-700 mb-2"><strong>Category:</strong> {incident.category}</p>
      <p className="text-gray-700 mb-2"><strong>Status:</strong> {incident.status}</p>
      <p className="text-gray-700 mb-2"><strong>Location:</strong> ({incident.latitude}, {incident.longitude})</p>
      <p className="text-gray-700 mb-4"><strong>Created:</strong> {new Date(incident.createdAt).toLocaleString()}</p>
      {incident.media && (
        <div className="mb-4">
          {incident.media.endsWith('.mp4') ? (
            <video controls className="w-full max-h-96 rounded-md">
              <source src={incident.media} type="video/mp4" />
            </video>
          ) : (
            <img src={incident.media} alt="Incident Media" className="w-full max-h-96 object-cover rounded-md" />
          )}
        </div>
      )}
      <StatusChangeControl incident={incident} />
    </div>
  );
};

export default IncidentDetailsCard;
