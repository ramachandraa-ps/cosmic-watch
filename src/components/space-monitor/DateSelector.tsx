import React from 'react';

interface DateSelectorProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center bg-space-light p-4 rounded-lg">
      <label className="flex flex-col">
        <span className="text-sm text-gray-300 mb-1">Start Date:</span>
        <input
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          className="bg-space-dark text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </label>
      
      <label className="flex flex-col">
        <span className="text-sm text-gray-300 mb-1">End Date:</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          className="bg-space-dark text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </label>
    </div>
  );
};

export default DateSelector;