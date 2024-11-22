import React from 'react';
import {
  BarChart, Bar,
  PieChart, Pie,
  LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell
} from 'recharts';
import { destinations } from '../data/destinations';

const COLORS = ['#e11d48', '#f43f5e', '#fb7185', '#fda4af'];
const turkeyData = destinations[0];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#1f2937"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      className="text-xs font-semibold"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100">
        <p className="font-medium text-gray-900">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function TurkeyStats() {
  const seasonData = Object.entries(turkeyData.statistics.popularSeasons).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value
  }));

  const venueTypeData = Object.entries(turkeyData.statistics.venueTypes).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value
  }));

  const guestOriginData = Object.entries(turkeyData.statistics.guestOrigins).map(([name, value]) => ({
    name: name === 'middleEast' ? 'Middle East' : name.charAt(0).toUpperCase() + name.slice(1),
    value
  }));

  const regionData = turkeyData.regions.map(region => ({
    name: region.name,
    venues: region.venueCount,
    cost: region.averageCost / 1000
  }));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Turkey Wedding Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Popular Seasons */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Seasons</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={seasonData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#e11d48"
                dataKey="value"
                strokeWidth={2}
                stroke="#fff"
              >
                {seasonData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Venue Types */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Venue Types</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={venueTypeData} margin={{ top: 20, right: 30, left: 20, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-15}
                textAnchor="end"
                height={60}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                label={{ 
                  value: 'Percentage (%)', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fontSize: 12 }
                }}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="#e11d48">
                {venueTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Guest Origins */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Guest Origins</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={guestOriginData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#e11d48"
                dataKey="value"
                strokeWidth={2}
                stroke="#fff"
              >
                {guestOriginData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Regional Comparison */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Regional Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={regionData} margin={{ top: 20, right: 30, left: 20, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-15}
                textAnchor="end"
                height={60}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                yAxisId="left" 
                tick={{ fontSize: 12 }}
                label={{ 
                  value: 'Venues', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fontSize: 12 }
                }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right"
                tick={{ fontSize: 12 }}
                label={{ 
                  value: 'Avg. Cost (K)', 
                  angle: 90, 
                  position: 'insideRight',
                  style: { fontSize: 12 }
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey="venues" 
                stroke="#e11d48" 
                name="Venues"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="cost" 
                stroke="#f43f5e" 
                name="Avg. Cost (K)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-rose-50 rounded-lg p-6 text-center">
          <h4 className="text-lg font-semibold text-rose-700 mb-2">Average Guest Count</h4>
          <p className="text-3xl font-bold text-rose-600">{turkeyData.statistics.averageGuestCount}</p>
          <p className="text-sm text-rose-500 mt-1">guests per wedding</p>
        </div>
        <div className="bg-rose-50 rounded-lg p-6 text-center">
          <h4 className="text-lg font-semibold text-rose-700 mb-2">Average Budget</h4>
          <p className="text-3xl font-bold text-rose-600">${turkeyData.statistics.averageBudget.toLocaleString()}</p>
          <p className="text-sm text-rose-500 mt-1">per wedding</p>
        </div>
        <div className="bg-rose-50 rounded-lg p-6 text-center">
          <h4 className="text-lg font-semibold text-rose-700 mb-2">Total Venues</h4>
          <p className="text-3xl font-bold text-rose-600">{turkeyData.venues}</p>
          <p className="text-sm text-rose-500 mt-1">across all regions</p>
        </div>
      </div>
    </div>
  );
}
