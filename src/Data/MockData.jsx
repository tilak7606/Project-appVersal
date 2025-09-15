// src/data/mockData.js
export const MockData = {
  summary: {
    conversions: { value: 6109.89, change: '+27.42%', label: 'Conversions ROAS' },
    spend: { value: 2101, change: '-4%', label: 'Spend' },
    installs: { value: 2.91, change: '+8%', label: 'Installs' },
    ctr: { value: 0, change: '0%', label: 'CTR' },
    impressions: { value: 0, change: '0%', label: 'Impressions' },
    cpa: { value: 0, change: '0%', label: 'CPA' }
  },
  trends: [
    { date: 'Jul 5', spend: 2100, conversions: 5800, installs: 45 },
    { date: 'Jul 6', spend: 2300, conversions: 6200, installs: 52 },
    { date: 'Jul 7', spend: 2500, conversions: 6800, installs: 58 },
    { date: 'Jul 8', spend: 2200, conversions: 6100, installs: 48 },
    { date: 'Jul 9', spend: 2400, conversions: 6500, installs: 55 },
    { date: 'Jul 10', spend: 2600, conversions: 7000, installs: 62 },
    { date: 'Jul 11', spend: 2800, conversions: 7200, installs: 68 }
  ],
  campaigns: [
    { name: 'Discovery', type: 'LOC', spend: 6109.89, installs: 44, conversions: 0.00, status: 'active' },
    { name: 'Competitor', type: 'LOC', spend: 6109.89, installs: 121, conversions: 0.00, status: 'active' },
    { name: 'Today tab', type: 'LOC', spend: 6109.89, installs: 44, conversions: 0.00, status: 'paused' },
    { name: 'Branding', type: 'LOC', spend: 6109.89, installs: 44, conversions: 0.00, status: 'active' }
  ],
  geoData: [
    { country: 'United States', spend: 3200, conversions: 145, lat: 39.8283, lng: -98.5795 },
    { country: 'United Kingdom', spend: 1800, conversions: 82, lat: 55.3781, lng: -3.4360 },
    { country: 'Germany', spend: 1200, conversions: 58, lat: 51.1657, lng: 10.4515 },
    { country: 'France', spend: 950, conversions: 44, lat: 46.6034, lng: 1.8883 },
    { country: 'Canada', spend: 780, conversions: 35, lat: 56.1304, lng: -106.3468 }
  ],
  biggestChanges: [
    { name: 'Discovery', change: 27.42, value: 6109.89, type: 'increase' },
    { name: 'Competitor', change: 15.30, value: 5200.45, type: 'increase' },
    { name: 'Today tab', change: -8.50, value: 4800.20, type: 'decrease' },
    { name: 'Branding', change: 12.80, value: 3900.15, type: 'increase' }
  ]
};