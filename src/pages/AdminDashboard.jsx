import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReports } from "../features/reports/reportsSlice";
import ReportCard from "../components/Reports/ReportCard";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { reports, loading } = useSelector((state) => state.reports);

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4">
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} isAdmin />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;