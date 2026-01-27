import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import KPI from "../components/KPI";
import ChartCard from "../components/ChartCard";
import DataTable from "../components/DataTable";

const Dashboard = () => {
  const { data, loading } = useContext(DashboardContext);

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div className="dashboard">
      <h1>Business Insights Dashboard</h1>

      <div className="kpi-container">
        <KPI title="Total Cases" value={data.kpis.totalCases} />
        <KPI title="Resolved Cases" value={data.kpis.resolvedCases} />
        <KPI title="Pending Cases" value={data.kpis.pendingCases} />
        <KPI title="Growth (%)" value={`${data.kpis.growth}%`} />
      </div>

      <div className="chart-section">
        <ChartCard cases={data.cases} />
      </div>

      <div className="table-section">
        <DataTable cases={data.cases} />
      </div>
    </div>
  );
};

export default Dashboard;