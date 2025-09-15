import React from "react";
// import { Card } from "@/components/ui/card"; // adjust path if your Card is in a different folder
import Card from "./UI/Card";

const GeoDistribution = () => (
  <Card className="p-6 mb-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-900">Storefronts</h3>
      <div className="flex space-x-2">
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Spend
        </button>
        <button className="text-sm text-blue-600 font-medium">Map</button>
      </div>
    </div>

    <div className="relative h-64 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Simplified world map representation */}
          <svg
            width="400"
            height="200"
            viewBox="0 0 400 200"
            className="opacity-20"
          >
            <path
              d="M50 80 Q 80 70, 120 80 T 200 90 T 300 85 T 350 80"
              stroke="#f97316"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M60 120 Q 90 110, 130 115 T 210 125 T 310 120 T 360 115"
              stroke="#f97316"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* India highlight */}
          <div className="absolute top-16 left-64 w-4 h-4 bg-orange-500 rounded-full animate-pulse">
            <div className="absolute -top-1 -left-1 w-6 h-6 bg-orange-300 rounded-full animate-ping opacity-75" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-gray-600">
        <span>$0.1k</span>
        <span>$6.11k</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-200 via-orange-300 to-orange-500 rounded-b-lg" />
    </div>
  </Card>
);

export default GeoDistribution;
