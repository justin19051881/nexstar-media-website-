import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', viewers: 150, engagement: 45, revenue: 80 },
  { month: 'Feb', viewers: 180, engagement: 52, revenue: 85 },
  { month: 'Mar', viewers: 210, engagement: 58, revenue: 95 },
  { month: 'Apr', viewers: 250, engagement: 65, revenue: 110 },
  { month: 'May', viewers: 290, engagement: 72, revenue: 125 },
  { month: 'Jun', viewers: 320, engagement: 78, revenue: 140 },
];

const PerformanceChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-6">Performance Metrics</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="viewers" 
              stroke="#5B2A86" 
              name="Viewers (M)"
            />
            <Line 
              type="monotone" 
              dataKey="engagement" 
              stroke="#2EC4B6" 
              name="Engagement (%)"
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#FF9F1C" 
              name="Revenue ($M)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;