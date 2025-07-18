import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIncidents } from '../../store/slices/incidentSlice';
import MapView from '../../components/admin/MapView';
import { toast } from 'react-toastify';

const MapViewPage = () => {
  const dispatch = useDispatch();
  const { incidents, loading, error } = useSelector((state) => state.incidents);

  useEffect(() => {
    dispatch(fetchIncidents()).catch(() => toast.error('Failed to fetch incidents'));
  }, [dispatch]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Incident Map</h1>
      <MapView incidents={incidents} />
    </div>
  );
};

export default MapViewPage;
