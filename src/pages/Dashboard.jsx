import { useContext, useState } from "react";
import { DashboardContext } from "../context/DashboardContext";
import KPI from "../components/KPI";
import ChartCard from "../components/ChartCard";
import DataTable from "../components/DataTable";

const Dashboard = () => {
  const { data, loading } = useContext(DashboardContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  if (loading) return <p>Loading dashboard...</p>;

  const filteredCases = data.cases.filter((item) => {
    const matchesSearch = 
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === 'All' || item.status === statusFilter;
      
    return matchesSearch && matchesStatus;
  });

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

        <div className="filters">
          <input
            type="text"
            placeholder="Search by type or status..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Resolved">Resolved</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <div className="table-section">
          <DataTable cases={filteredCases} />
        </div>
      </div>
  );
};

export default Dashboard;