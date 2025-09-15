// src/components/Sidebar.js
import React from 'react';
import { 
  TrendingUp,
  Target,
  Users,
  Globe,
  Smartphone,
  BarChart
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: TrendingUp, label: 'Dashboard', active: true },
    { icon: Target, label: 'Campaigns', active: false },
    { icon: Users, label: 'Audiences', active: false },
    { icon: Globe, label: 'Keywords', active: false },
    { icon: Smartphone, label: 'Creative', active: false },
    { icon: BarChart, label: 'Reports', active: false }
  ];

  return (
    <aside className="w-16 bg-orange-500 flex flex-col items-center py-6 space-y-8">
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-orange-500 rounded-full" />
      </div>
      <nav className="flex flex-col space-y-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`p-2 rounded-lg transition-colors ${
              item.active 
                ? 'bg-orange-400 text-white' 
                : 'text-orange-100 hover:bg-orange-400 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;