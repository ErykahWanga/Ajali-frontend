import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import Home from './pages/user/Home';
import CreateIncident from './pages/user/CreateIncident';
import EditIncident from './pages/user/EditIncident';
import AdminDashboard from './pages/admin/AdminDashboard';
import IncidentDetailsPage from './pages/admin/IncidentDetailsPage';
import MapViewPage from './pages/admin/MapViewPage';
import ProtectedAdminRoute from './utils/ProtectedAdminRoute';
import ProtectedUserRoute from './utils/ProtectedUserRoute';

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<ProtectedUserRoute><Home /></ProtectedUserRoute>} />
          <Route path="/create-incident" element={<ProtectedUserRoute><CreateIncident /></ProtectedUserRoute>} />
          <Route path="/edit-incident/:id" element={<ProtectedUserRoute><EditIncident /></ProtectedUserRoute>} />
          <Route path="/admin" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
          <Route path="/incident/:id" element={<ProtectedAdminRoute><IncidentDetailsPage /></ProtectedAdminRoute>} />
          <Route path="/map" element={<ProtectedAdminRoute><MapViewPage /></ProtectedAdminRoute>} />
        </Routes>
        <ToastContainer />
      </div>
    </Provider>
  );
};

export default App;
