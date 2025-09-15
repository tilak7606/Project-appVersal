import React, { useState } from "react";
import { Filter, ChevronDown } from "lucide-react"; // icons

const FiltersPanel = ({ filters, updateFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium">Filters</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Filter Options */}
      {isOpen && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Date Range */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Date Range
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              value={filters.dateRange}
              onChange={(e) => updateFilter("dateRange", e.target.value)}
            >
              <option>Jul 5 - Jul 11, 2025</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>

          {/* Campaign */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Campaign
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              value={filters.campaign}
              onChange={(e) => updateFilter("campaign", e.target.value)}
            >
              <option>All Campaigns</option>
              <option>Discovery</option>
              <option>Competitor</option>
              <option>Today tab</option>
            </select>
          </div>

          {/* Country */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Country
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              value={filters.country}
              onChange={(e) => updateFilter("country", e.target.value)}
            >
              <option>All Countries</option>
              <option>United States</option>
              <option>India</option>
              <option>United Kingdom</option>
            </select>
          </div>

          {/* Device */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Device
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              value={filters.device}
              onChange={(e) => updateFilter("device", e.target.value)}
            >
              <option>All Devices</option>
              <option>iPhone</option>
              <option>iPad</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltersPanel;
