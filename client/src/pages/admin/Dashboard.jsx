import { useEffect, useMemo, useState } from 'react';
import { getStats } from '../../services/leadService';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import Card from '../../components/common/Card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await getStats();
      setStats(data.stats);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statusData = useMemo(() => {
    return (stats?.leadsByStatus || []).map((item) => ({
      name: item._id,
      value: item.count,
    }));
  }, [stats]);

  const monthlyData = useMemo(() => {
    return (stats?.monthlyTrend || []).map((item) => ({
      name: `${item._id.month}/${item._id.year}`,
      leads: item.count,
    }));
  }, [stats]);

  const COLORS = ['#3b82f6', '#f59e0b', '#f97316', '#22c55e', '#ef4444'];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="text-center">
          <h3 className="text-lg font-semibold text-gray-600">Total Leads</h3>
          <p className="text-3xl font-bold text-primary mt-2">
            {stats?.totalLeads || 0}
          </p>
        </Card>
        <Card className="text-center">
          <h3 className="text-lg font-semibold text-gray-600">Today's Leads</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {stats?.todayLeads || 0}
          </p>
        </Card>
        <Card className="text-center">
          <h3 className="text-lg font-semibold text-gray-600">Recent Leads</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {stats?.recentLeads || 0}
          </p>
        </Card>
        <Card className="text-center">
          <h3 className="text-lg font-semibold text-gray-600">Follow-ups</h3>
          <p className="text-3xl font-bold text-orange-600 mt-2">
            {stats?.leadsByStatus?.find(s => s._id === 'Follow-up')?.count || 0}
          </p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Leads by Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Monthly Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="leads" stroke="#dc3545" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold mb-4">Status Distribution (Bar)</h2>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={statusData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#dc3545" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
