import { useDispatch } from 'react-redux';
import { updateIncidentStatus } from '../../store/slices/incidentSlice';
import { toast } from 'react-toastify';

const StatusChangeControl = ({ incident }) => {
  const dispatch = useDispatch();

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    try {
      await dispatch(updateIncidentStatus({ id: incident.id, status: newStatus })).unwrap();
      toast.success('Status updated successfully');
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  return (
    <select
      value={incident.status}
      onChange={handleStatusChange}
      className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="Open">Open</option>
      <option value="Under Investigation">Under Investigation</option>
      <option value="Resolved">Resolved</option>
    </select>
  );
};

export default StatusChangeControl;
