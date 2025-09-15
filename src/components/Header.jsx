// src/components/Header.js
import React from 'react';
import { Calendar, Settings } from 'lucide-react';

const Header = ({ filters, updateFilter }) => (
  <header className="bg-white border-b border-gray-200 px-6 py-4">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Apple Search Ads Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">A consolidated view of your app efficiency by storefronts and key metrics</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">{filters.dateRange}</span>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
  </header>
);

export default Header;