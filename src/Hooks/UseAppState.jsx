// src/hooks/useAppState.js
import { useState } from 'react';

export const useAppState = () => {
  const [filters, setFilters] = useState({
    dateRange: 'Jul 5 - Jul 11, 2025',
    campaign: 'All Campaigns',
    country: 'All Countries',
    device: 'All Devices'
  });

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return { filters, updateFilter };
};