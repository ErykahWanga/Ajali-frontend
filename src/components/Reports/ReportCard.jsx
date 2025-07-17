import React from "react";
import { Link } from "react-router-dom";

const ReportCard = ({ report, isAdmin }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-semibold text-lg">{report.title}</h3>
      <p>{report.description}</p>
      <p className="text-sm text-gray-500">Status: {report.status}</p>
      {isAdmin && (
        <Link
          to={`/incident/${report.id}`}
          className="inline-block mt-2 text-blue-600 underline"
        >
          View Details
        </Link>
      )}
    </div>
  );
};

export default ReportCard;

