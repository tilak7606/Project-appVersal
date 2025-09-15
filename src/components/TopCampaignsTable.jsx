import React, { useState, useMemo } from "react";
import  Card  from "./UI/Card"; 
import  Badge  from "./UI/Badge"; 
import {MockData} from "../Data/MockData";   


const TopCampaignsTable = () => {
  const [sortField, setSortField] = useState("spend");
  const [sortDirection, setSortDirection] = useState("desc");

  const sortedCampaigns = useMemo(() => {
    return [...MockData.campaigns].sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      const direction = sortDirection === "asc" ? 1 : -1;
      return aValue > bValue ? direction : -direction;
    });
  }, [sortField, sortDirection]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  return (
    <Card className="p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Top List</h3>
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

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th
                className="text-left py-2 cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort("name")}
              >
                Campaign
              </th>
              <th
                className="text-right py-2 cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort("spend")}
              >
                Spend {sortField === "spend" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="text-right py-2 cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort("installs")}
              >
                Installs {sortField === "installs" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="text-right py-2 cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort("conversions")}
              >
                Conv. {sortField === "conversions" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedCampaigns.map((campaign, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-3">
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        campaign.status === "active"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    />
                    <span className="font-medium">{campaign.name}</span>
                    <Badge variant="default">{campaign.type}</Badge>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">India</div>
                </td>
                <td className="text-right py-3">
                  <div className="font-medium">${campaign.spend.toFixed(2)}</div>
                  <div className="text-xs text-gray-500">+27.42%</div>
                </td>
                <td className="text-right py-3">
                  <div className="font-medium">{campaign.installs}</div>
                  <div className="text-xs text-gray-500">+27.42%</div>
                </td>
                <td className="text-right py-3">
                  <div className="font-medium">
                    {campaign.conversions.toFixed(2)}%
                  </div>
                  <div className="text-xs text-gray-500">0%</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default TopCampaignsTable;
