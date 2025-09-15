import React from "react";
import  Card  from "./UI/Card"; // adjust path if needed
// import mockData from "../data/mockData"; // adjust path to your mockData file
import { MockData } from "../Data/MockData";

const BiggestChanges = () => (
  <Card className="p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-900">Biggest Changes</h3>
      <div className="flex space-x-2">
        <button className="px-3 py-1 bg-orange-100 text-orange-700 rounded text-sm font-medium">
          Campaigns
        </button>
        <button className="px-3 py-1 text-gray-500 hover:text-gray-700 rounded text-sm">
          Ad Groups
        </button>
        <button className="px-3 py-1 text-gray-500 hover:text-gray-700 rounded text-sm">
          Keywords
        </button>
        <button className="px-3 py-1 text-gray-500 hover:text-gray-700 rounded text-sm">
          Ads
        </button>
      </div>
    </div>

    <div className="space-y-3">
      {mockData.biggestChanges.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          {/* status dot */}
          <div
            className={`w-2 h-2 rounded-full ${
              item.type === "increase" ? "bg-green-500" : "bg-red-500"
            }`}
          />

          {/* name + location */}
          <div className="flex-1">
            <div className="font-medium text-sm">{item.name}</div>
            <div className="text-xs text-gray-500">India</div>
          </div>

          {/* value + change percentage */}
          <div className="text-right">
            <div className="font-medium text-sm">${item.value.toFixed(2)}</div>
            <div
              className={`text-xs ${
                item.type === "increase" ? "text-green-600" : "text-red-600"
              }`}
            >
              {item.type === "increase" ? "+" : ""}
              {item.change}%
            </div>
          </div>

          {/* mini bar */}
          <div className="w-16 h-8">
            <div
              className={`h-full ${
                item.type === "increase"
                  ? "bg-orange-400"
                  : item.name === "Today tab"
                  ? "bg-yellow-400"
                  : "bg-orange-400"
              } rounded`}
              style={{ width: `${Math.abs(item.change) * 3}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export default BiggestChanges;
