import axios from "../../services/axios";

export const fetchReports = async () => {
  const response = await axios.get("/api/reports");
  return response.data;
};
