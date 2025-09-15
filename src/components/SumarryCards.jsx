// src/components/SummaryCards.js
import React from 'react';
import { Target, DollarSign, MousePointer, TrendingUp, Eye, Users } from 'lucide-react';
import Card from './ui/Card';

const SummaryCards = () => {
  const cards = [
    { 
      title: 'Conversions ROAS', 
      value: '0.00%', 
      change: '+27.42%', 
      icon: Target,
      color: 'text-blue-600' 
    },
    { 
      title: 'Conversions ROAS', 
      value: '$6,109.89', 
      change: '+27.42%', 
      icon: DollarSign,
      color: 'text-green-600' 
    },
    { 
      title: 'Conversions ROAS', 
      value: '0.00%', 
      change: '-4%', 
      icon: MousePointer,
      color: 'text-purple-600' 
    },
    { 
      title: 'Conversions ROAS', 
      value: '$2,101', 
      change: '-4%', 
      icon: TrendingUp,
      color: 'text-orange-600' 
    },
    { 
      title: 'Conversions ROAS', 
      value: '$2.91', 
      change: '+8%', 
      icon: Eye,
      color: 'text-indigo-600' 
    },
    { 
      title: 'Conversions ROAS', 
      value: '0', 
      change: '0%', 
      icon: Users,
      color: 'text-pink-600' 
    },
    { 
      title: 'Conversions ROAS', 
      value: '$0.00', 
      change: '0%', 
      icon: Target,
      color: 'text-teal-600' 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-6">
      {cards.map((card, index) => (
        <Card key={index} className="p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <card.icon className={`w-5 h-5 ${card.color}`} />
            <span className={`text-xs font-medium ${
              card.change.startsWith('+') ? 'text-green-600' : 
              card.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
            }`}>
              {card.change}
            </span>
          </div>
          <div className="text-lg font-bold text-gray-900 mb-1">{card.value}</div>
          <div className="text-xs text-gray-500">{card.title}</div>
        </Card>
      ))}
    </div>
  );
};

export default SummaryCards;