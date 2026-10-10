import React from 'react'

const StatCard = ({ title, value, valueColor }) => {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className={`mt-3 text-3xl font-bold ${valueColor}`}>
        {value}
      </h3>
    </div>
  );
}

export default StatCard
