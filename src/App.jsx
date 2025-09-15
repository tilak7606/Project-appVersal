// src/App.js
import React from 'react';
import { useAppState } from './hooks/useAppState';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SummaryCards from './components/SumarryCards';
import PerformanceTrends from './components/PerformanceTrends';

// Import remaining components (you'll create these following the same pattern)
import GeoDistribution from './components/GeoDistribution';
import TopCampaignsTable from './components/TopCampaignsTable';
import BiggestChanges from './components/BiggestChanges';
import FiltersPanel from './components/FiltersPanel';

const App = () => {
  const { filters, updateFilter } = useAppState();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header filters={filters} updateFilter={updateFilter} />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <FiltersPanel filters={filters} updateFilter={updateFilter} />
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Total Summary</h2>
              <SummaryCards />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <PerformanceTrends />
                <TopCampaignsTable />
              </div>
              <div className="space-y-6">
                <GeoDistribution />
                {/* <BiggestChanges /> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;