import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ReportDetails = () => {
  const { id } = useParams();
  const report = useSelector((state) =>
    state.reports.reports.find((r) => r.id.toString() === id)
  );

  if (!report) return <p>Report not found.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Incident Details</h2>
      <div>
        <p><strong>Title:</strong> {report.title}</p>
        <p><strong>Description:</strong> {report.description}</p>
        <p><strong>Status:</strong> {report.status}</p>
        <p><strong>Location:</strong> {report.location}</p>
        {report.media && <img src={report.media} alt="incident" className="mt-2 max-w-md" />}
      </div>
    </div>
  );
};

export default ReportDetails;
