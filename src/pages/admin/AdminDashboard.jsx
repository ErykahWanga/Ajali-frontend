import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIncidents } from '../../store/slices/incidentSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import StatusChangeControl from '../../components/admin/StatusChangeControl';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { incidents, loading, error } = useSelector((state) => state.incidents);

  useEffect(() => {
    dispatch(fetchIncidents()).catch(() => toast.error('Failed to fetch incidents'));
  }, [dispatch]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map((incident) => (
              <tr key={incident.id} className="border-b">
                <td className="py-2 px-4">{incident.id}</td>
                <td className="py-2 px-4">
                  <Link to={`/incident/${incident.id}`} className="text-blue-600 hover:underline">
                    {incident.title}
                  </Link>
                </td>
                <td className="py-2 px-4">{incident.category}</td>
                <td className="py-2 px-4">
                  <StatusChangeControl incident={incident} />
                </td>
                <td className="py-2 px-4">{new Date(incident.createdAt).toLocaleDateString()}</td>
                <td className="py-2 px-4">
                  <Link to={`/incident/${incident.id}`} className="text-blue-600 hover:underline">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
