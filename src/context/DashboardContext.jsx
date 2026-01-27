import { createContext, useEffect, useState } from "react";
import { fetchDashboardData } from "../services/api";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData().then(response => {
      setData(response);
      setLoading(false);
    });
  }, []);

  return (
    <DashboardContext.Provider value={{ data, loading }}>
      {children}
    </DashboardContext.Provider>
  );
};